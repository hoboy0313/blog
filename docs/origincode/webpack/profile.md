# 基础
webpack 有四个基础配置

- 入口
- 出口
- loader
- plugin
- mode (后来用于区分打包环境)

## 起步

这里以 `webpack4.x` 为讲解，不对`webpack3.x`解释。

1. 安装工具

```shell
npm i -D webpack webpack-cli
```

2. 启动 `webpack` 进行打包

```shell 
npx webpack
```

这时候会报错。

![w_001_npx_webpack](/img/webpack/w_001_npx_webpack.png)

根据错误，我们会知道一些信息:
1. webpack 默认以 `src/index.js` 为打包入口开始打包。
2. webpack 默认mode 以 `production` 打包。

这时，我们创建 `src文件夹`，并创建 `index.js`文件，随便写一个 `console`，在重新执行命令。则会打包成功。由此我们又可知。
3. 默认的打包路径为 `dist`，入口文件名为 `main.js`。

## 一、入口（entry）

```ts
// webpack.config.js
module.exports = {
  entry: String | [String] | Object { <key>: String | [String] } | (function: () => String | [String] | Object { <key>: String | [String] })
}
```


### 1. 字符串入口
```js
const path = require('path');

module.exports = {
  mode: 'development',

  entry: path.resolve('src/index.js'),  // 要求绝对路径
}
```

### 2. 字符串数组入口
```js
const path = require('path');

module.exports = {
  mode: 'development',

  entry: ['index', 'index2'].map(p => path.resolve(`src/${p}.js`)),
}
```

> 这里会有 harmony import。即，index2.js 会单独引入一次，index.js 中也有导入了 index2.js 。因此，index.js 会对 index2.js 进行调用。

### 3. 对象键值对入口
> 对象入口最大的一个特点就是，会为每一个入口生成依赖关系，从而实现多页面系统(MPA)。
```js
// 3. Object { <key>: String | [String] }
const path = require('path');

module.exports = {
  mode: 'development',

  entry: {
    // 打出的包叫 `app`, 入口文件为 `src/index.js`
    app: path.resolve('src/index.js'),
    app2: path.resolve('src/index2.js'),
  },
}
```

### 4. 动态入口(函数导出)
```js
// 4. function: () => String | [String] | Object { <key>: String | [String] }
// 函数就没有什么特别的了，就是基于函数的 return 来定，可以做一定的逻辑处理。return 的结果为上三种情况。
const path = require('path');

module.exports = {
  mode: 'development',

  entry: () => {
    /**
     * return path.resolve('src/index.js');
     * return ['index', 'index2'].map(p => path.resolve(`src/${p}.js`));
     * return {
     *   app: path.resolve('src/index.js')
     * }
     */
  }
}
```

此外，入口还支持Promise 的异步导入。

### 5. 动态入口(Promise导入)
```js
const path = require('path');

module.exports = {
  mode: 'development',

  entry: () => new Promise(resolve => {
    // 这里可以做一些异步操作。
    resolve(['index', 'index2'].map(p => path.resolve(`src/${p}.js`)))
  })
}
```

## 二、出口(output)

出口就是键值对配置，默认的`output`是：
```js
module.exports = {
  mode: 'development',

  entry: path.resolve('src/index.js')

  output: {
    path: path.resolve('dist'),
    filename: 'main.js',
  }
}
```

### 2.1 auxiliaryComment

简单来说就是给每个段导出加一段注释，常常用于库添加版本等情况。要配合 `output.library` 和 `output.libraryTarget` 一起使用。
```js
module.exports = {
  mode: 'development',

  entry: path.resolve('src/index.js')

  output: {
    library: "testlib",
    libraryTarget: "umd",
    path: path.resolve('dist'),
    filename: 'main.js',
    auxiliaryComment: "Test auxiliaryComment",
  },

  auxiliaryComment: {
    root: "Root Comment",
    commonjs: "CommonJS Comment",
    commonjs2: "CommonJS2 Comment",
    amd: "AMD Comment"
  },
}
```

结果：
```js
(function webpackUniversalModuleDefinition(root, factory) {
	//Test auxiliaryComment
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	//Test auxiliaryComment
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	//Test auxiliaryComment
	else if(typeof exports === 'object')
		exports["testlib"] = factory();
	//Test auxiliaryComment
	else
		root["testlib"] = factory();
})(window, function() {
  // ...
})
```

亦或者更细粒度控制。

```js
module.exports = {
  mode: 'development',

  entry: path.resolve('src/index.js')

  output: {
    library: "testlib",
    libraryTarget: "umd",
    path: path.resolve('dist'),
    filename: 'main.js',
    auxiliaryComment: {
      root: "Root Comment",
      commonjs: "CommonJS Comment",
      commonjs2: "CommonJS2 Comment",
      amd: "AMD Comment"
    },
  },
}
```

结果：
```js
(function webpackUniversalModuleDefinition(root, factory) {
	//CommonJS2 Comment
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	//AMD Comment
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	//CommonJS Comment
	else if(typeof exports === 'object')
		exports["testlib"] = factory();
	//Root Comment
	else
		root["testlib"] = factory();
})(window, function() {
  // ...
})
```

> 如果不写库，暂时用不上。

### 2.2 chunkFilename