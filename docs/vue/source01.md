# Vue 源码解析

## Vue的知识点分类

- 核心
  - 数据驱动
    > 数据 => dom 流程
  - 组件化
    > 创建，渲染
  - 响应式原理
    > 响应方式

- 编译原理
  - parse
    > 模版 => AST树
  - optimize
    > 优化 AST 树
  - codegen
    > AST树 => 代码

- 扩展
  - event、v-model
  - slot、keep-alive
  - transtition

- 生态
  - vue-router
  - vuex

src 目录下有如下文件夹

- compiler （编译相关）
- core      (运行时相关)
- platforms (不同平台入口)
- server    (和服务端渲染相关)
- sfc       (把 vue 单文件解析成 一个对象)
- shared    (公用的辅助方法)

### Vuejs 源码构建

Vuejs 是基于 `Rollup` 构建的。所有的脚本相关配置都是在 `scripts` 标签下

从 `package.json` 的 `dev` 开始看，读取的是 `scripts/config.js` 文件的 `web-full-dev` 环境。

在 `config.js` 中找到环境配置

```js
  // Runtime+compiler development build (Browser)
  'web-full-dev': {
    entry: resolve('web/entry-runtime-with-compiler.js'),
    dest: resolve('dist/vue.js'),
    format: 'umd',
    env: 'development',
    alias: { he: './entity-decoder' },
    banner
  }
```

然后找到 `platforms` 目录里的文件 `entry-runtime-with-compiler.js` 开始分析

其中有 `Vue` 的引入
```js
import Vue from './runtime/index'
```

根据引用路径
=> `import Vue from 'core/index'`
=> `import Vue from './instance/index'`

发现Vue 的构造函数很简单

```js
// ./instance/index

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

```
