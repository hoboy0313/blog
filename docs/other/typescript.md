# Typescript

当前书写的配置版本是基于`3.9.1`

## 0. tsconfig.json 配置项

```js
{
  /* File Inclusion */
  "include": ["src/**/*", "tests/**/*"]


  "compilerOptions": {
    /* Project Options */
    "allowJs": true,
    "checkJs": true,
    "composite": true,
    "declaration": true,
    "declarationMap": true,
    "downlevelIteration": true,
    "importHelpers": true,
    "incremental": true,
    "isolatedModules": true,
    "jsx": "preserve",                  
    // "lib": ["es5", "es2015", "es2016", "es2017", "es2018", "dom"],
    "module": "commonjs",
    // "noEmit": true,
    "outDir": "./dist",
    // "outFile": "./",
    // "plugin": [],
  
    "target": "es5",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
    // "sourceMap": true,                     /* Generates corresponding '.map' file. */
    // "rootDir": "./",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
    // "tsBuildInfoFile": "./",               /* Specify file to store incremental compilation information */
    // "removeComments": true,                /* Do not emit comments to output. */

    /* Strict Type-Checking Options */
    "strict": true,                           /* Enable all strict type-checking options. */
    // "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */
    // "strictNullChecks": true,              /* Enable strict null checks. */
    // "strictFunctionTypes": true,           /* Enable strict checking of function types. */
    // "strictBindCallApply": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
    // "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */
    // "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */
    // "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */

    /* Additional Checks */
    // "noUnusedLocals": true,                /* Report errors on unused locals. */
    // "noUnusedParameters": true,            /* Report errors on unused parameters. */
    // "noImplicitReturns": true,             /* Report error when not all code paths in function return a value. */
    // "noFallthroughCasesInSwitch": true,    /* Report errors for fallthrough cases in switch statement. */

    /* Module Resolution Options */
    // "moduleResolution": "node",            /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
    // "baseUrl": "./",                       /* Base directory to resolve non-absolute module names. */
    // "paths": {},                           /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
    // "rootDirs": [],                        /* List of root folders whose combined content represents the structure of the project at runtime. */
    // "typeRoots": [],                       /* List of folders to include type definitions from. */
    // "types": [],                           /* Type declaration files to be included in compilation. */
    // "allowSyntheticDefaultImports": true,  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
    "esModuleInterop": true,                  /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
    // "preserveSymlinks": true,              /* Do not resolve the real path of symlinks. */
    // "allowUmdGlobalAccess": true,          /* Allow accessing UMD globals from modules. */

    /* Source Map Options */
    // "sourceRoot": "",                      /* Specify the location where debugger should locate TypeScript files instead of source locations. */
    // "mapRoot": "",                         /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSourceMap": true,               /* Emit a single file with source maps instead of having a separate file. */
    // "inlineSources": true,                 /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */

    /* Experimental Options */
    // "experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */
    // "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */

    /* Advanced Options */
    "skipLibCheck": true,                     /* Skip type checking of declaration files. */
    "forceConsistentCasingInFileNames": true  /* Disallow inconsistently-cased references to the same file. */
  }
}

```

## 0.1 File Inclusion

### 0.1.1 exclude

`default: ["node_modules", "bower_components", "jspm_packages"]`

指定哪些文件会**跳过**编译操作。

:::warning
**注意**: `exclude` 只跳过包含在 `include` 文件所包含的文件。它不会排除文件中，`include` 中有的文件引入了 `exclude` 中的文件, 它是不处理这种依赖关系的，只处理该文件是否包含在`include`, 至于未排除的文件，引入了排除文件中的内容，依旧会被打包进代码库。
:::

### 0.1.2 extends

`default: false`

配置继承。
举例：

```json
// configs/base.json:
{
  "compilerOptions": {
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}
```

```json
// tsconfig.json
{
  "extends": "./configs/base",
  "files": ["main.ts", "supplemental.ts"]
}
```

```json
// tsconfig.nostrictnull.json
{
  "extends": "./tsconfig",
  "compilerOptions": {
    "strictNullChecks": false
  }
}
```

### 0.1.3 files

`default: false`

对指定的文件进行编译处理。如果有任意文件没有找到就会报错。

举例：
```json
{
  "compilerOptions": {},
  "files": [
    "core.ts",
    "sys.ts",
    "types.ts",
    "scanner.ts",
    "parser.ts",
    "utilities.ts",
    "binder.ts",
    "checker.ts",
    "tsc.ts"
  ]
}
```

:::tip
用于小型工程是有意义的，而不需要使用 glob 模式，如果文件很多的，请使用 [inlude](#include)
:::

### 0.1.4 include

确定哪些目录一定会被编译处理。

```json
// tsconfig.json
{
  "include": ["src/**/*", "tests/**/*"]
}
```
情况如下：

```js
.
├── scripts                ⨯
│   ├── lint.ts            ⨯
│   ├── update_deps.ts     ⨯
│   └── utils.ts           ⨯
├── src                    ✓
│   ├── client             ✓
│   │    ├── index.ts      ✓
│   │    └── utils.ts      ✓
│   ├── server             ✓
│   │    └── index.ts      ✓
├── tests                  ✓
│   ├── app.test.ts        ✓
│   ├── utils.ts           ✓
│   └── tests.d.ts         ✓
├── package.json
├── tsconfig.json
└── yarn.lock
```

:::tip
`include` 和 `exclude` 支持通配符的全局模式：

- * 匹配零个或多个字符（目录分隔符除外）
- ? 匹配任何一个字符（目录分隔符除外）
- **/ 匹配嵌套到任何级别的任何目录

如果glob模式不包括文件扩展名，则只有部分文件扩展被支持（例如:  默认情况下 `.ts`，`.tsx`和`.d.ts`，`.js`和 `.jsx`, 设置`allowJs`为`true` 也可以被默认）。
:::

### 0.1.5 references

TODO: 有点晦涩，没场景解读。

### 0.1.6 typeAcquisition

类型获取。就是可以指定是否开启自动获取类型。

```json
{
  "typeAcquisition": {
    "enable": false,   // 默认为 true。`TypeScript` 会自动以 `nodule_modules/@types` 下的声明导入。
    "include": ["jest"],  // 如果有声明模块不在 `node_modules` 下，可以在这里配。
    "exclude": ["jquery"] // 如果，已经有自己的某个声明，可以忽略掉 `node_modules` 下的，使用自己的。
  }
}
```

**TODO: 自己尝试写了个目录，当未生效。**


## 0.2 Project Options

### 0.2.1 allowJs

允许导入 js文件。如果为 false，在 ts 文件中 import js文件会报错。

### 0.2.2 checkJs

与 “allowJs” 协同，会对 js 中的使用，也进行类型校验。
例如："checkJs": false,

文件 `file1.js`
```js
export default const pi = parseFloat(3.14)   // 其实 parseFloat(str: String), 入参规定是 字符串。
```

文件 `file2.ts`
```ts
import pi from 'files1.js'  // 这里不会报错。如果，"checkJs": true, 则会报错，入参必须为 String.
```

### 0.2.3 composite

启动工程编译.(TODO:❓不太懂什么意思。)

前置条件：
- `allowJs` 属性必须开启。
- 设置 `rootDir` 配置项。
- 所有的声明文件都必须在 `includes` 和 `files` 属性中有列出来。
- 复合功能的开启，强依赖，`declaration` 的开启。

### 0.2.4 declaration

为项目下的 ts 和 js 文件生成，对应的 d.ts 声明文件.

### 0.2.5 declarationMap

`Generates a sourcemap for each corresponding '.d.ts' file.`

declarationMap 属性，依赖于 `declaration` 或 `composite` 属性中的任意一个的开启，
会生成 .d.ts.map 文件，对应源 .d.ts 文件的 sourceMap.

### 0.2.6 downlevelIteration

`Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'.`

解释：设置为 false 时，则对迭代器的写法默认自动降级成 for 循环。例如，for-of, [...arr], function(...args) 和 Symbol.iterator, 都会被转换成 for 循环进行赋值。

::: warning
注意：虽然绝大多数情况下是满足期望的，但不是百分百。例如，很多 emoji，如（😜），for 循环的长度为2，甚至更多，但是迭代器只会读取到一个。
关于这个可以看[this blog post by Jonathan New](https://blog.jonnew.com/posts/poo-dot-length-equals-two).
:::

如果，Symbol.iterator 不被提供在运行时，就存在一些问题。如下：
```js
// Make an array where the '1' element is missing
let missing = [0, , 1];
let spreaded = [...missing];
let concated = [].concat(missing);

"1" in spreaded; // true
"1" in concated; // false
```
所有，只有当 Symbol.iterator，被提供的时候才能更加准备的模仿 ES6 的行为。

**简而言之，开启就对了，可以尽可能提高合法性。（如果原生不支持，Symbol.iterator就尴尬了。)**

::: tip
假想：能否通过 babel 对 Symbol 的垫片来完成更加低版本的兼容问题。
:::

### 0.2.7 importHelpers

`Import emit helpers from 'tslib'.`
      
简称为：导入助手。
在降级过程中，例如上面对迭代器的兼容，使用一个 for循环的函数。如果，很多文件都有使用的话，则会每个文件都有自己的一个迭代器的实现。
downlevelIteration 和 importHelpers 开启的话，就会去引入 'tslib' 来进行模版的复用。

### 0.2.8 incremental

`Enable incremental compilation`

创建一个 .tsbuildinfo 后缀的名称，跟随在 tsconfig.json 目录中。
此功能是展示一个对项目中依赖关系的图文件，可以随时删除，对项目无影响。


### 0.2.9 isolatedModules

`Transpile each file as a separate module (similar to 'ts.transpileModule').`

即：对每个文件都进行隔离模块导出。即，必须在文件中使用 import/export.
例如：

```ts
// 假设 someType 根本没被定义，没有这个导出项，那么 export 出的 someType 将被过滤掉。从而引发 js 运行时错误。
import { someType, someFunction } from "module1";

someFunction();

export { someType, someFunction };
```

:::tip
TODO: 个人疑问：someType 没写，按理来说不是，ts 编译器就会报错，为什么，到运行时？还是说，其他的编译器可以通过？例如，babel。
:::

### 0.2.10 jsx

`Specify JSX code generation: 'preserve', 'react-native', or 'react'.`

对 jsx 语法的内置支持。三种支持的区别为：
|     模式    |   输入   |            输出            |输出文件扩展名|
|------------|---------|----------------------------|------------|
|preserve    | <div \/> | <div \/>	                  |    .jsx    |
|react       | <div \/> | React.createElement("div") |    .js     |
|react-native| <div \/> | <div \/>	                  |    .js     |

碰到问题1: JSX 元素隐式具有类型 "any"，因为不存在接口 "JSX.IntrinsicElements"。
解决：React 对 IntrinsicElements 接口， Element 接口等都进行了实现，貌似在 react.d.ts

**解决方案：`npm i -D @types/react`**

### 0.2.11 lib

`Specify library files to be included in the compilation.`

即，编译过程中需要引入的库文件的列表。
更多：https://www.typescriptlang.org/tsconfig#lib

**一般情况下，无需做更改，默认即可**

### 0.2.12 module

`Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'.`

设置模版的导出类型。
直接参考官网文档即可：[文档](https://www.typescriptlang.org/tsconfig#module)

### 0.2.13 noEmit

`Do not emit outputs`

让 `typescript` 不输出编译后的文件，只对类型做校验检查。

**这是一个很重要的指令(曾经是...)**

曾经在做 ts 文件编译，`typescript` 在降级编译等，以及一些其他编译能力上还不够完善(现在发现以前的问题，tsc 自身都可以解决了。)，然后就需要用非 tsc 的编译器去编译文件，例如 `babel`, 但是 需要使用 `typescript` 来做类型校验，所以就不用输出两份文件，也不需要先 tsc 编译，再babel 编译这样的弟弟行为。

### 0.2.14 outDir

`Redirect output structure to the directory.`

文件的输出目录，没啥好说的。

### 0.2.15 outFile

`Concatenate and emit output to single file.`

输出文件到指定的文件中。

- 所有的**非模块文件**会输出到该文件
- 如果`module`为`system` or `amd`，那么模块文件会在所有的非模块文件输出完之后，串联输入到该文件中。

:::tip
注意： outFile只能用在 `module` 为 `none`, `system`, `amd`，此选项不能用于 `commonjs` 和 `esm`.

TODO: 个人还没有确定的使用场景，之后补上。
:::

### 0.2.16 plugin

在编辑器中运行的语言服务插件列表。

语言服务插件是一种基于现有TypeScript文件向用户提供其他信息的方法。他们可以增强TypeScript和编辑器之间的现有消息，或者提供自己的错误消息。

例如：

- [ts-sql-plugin](https://github.com/xialvjun/ts-sql-plugin#readme) 使用模板字符串“ SQL构建器”添加SQL lint。
- [typescript-styled-plugin](https://github.com/Microsoft/typescript-styled-plugin) 在模板字符串中提供CSS linting。
- [typescript-eslint-language-service](https://github.com/Quramy/typescript-eslint-language-service) : 在编译器的输出中提供eslint错误消息和修复。
- [ts-graphql-plugin](https://github.com/Quramy/ts-graphql-plugin) 在GraphQL查询模板字符串内提供验证和自动完成。

### removeComments

`default: false`

编译到 js 后，是否移除注释。

### 0.2.17 rootDir

`default: Computed from the list of input files`

设置哪个目录下的文件要编译。

### 0.2.18 sourceMap

`default: false`

是否生成源码的 `sourceMap`.

### 0.2.19 target

`default: 'ES5'`

准备编译到哪个`ESM的版本`。


### 0.2.20 tsBuildInfoFile

`default: .tsbuildinfo`

当设置 `incremental` 为 `true`, 则会生成依赖图，这个用于修改生成文件的名称。

## 0.3 Strict Checks

### 0.3.1 alwaysStrict

`default: false;`

始终严格: 给每个编译输出的js文件增加`use strict`

### 0.3.2 noImplicitAny

`default: true;`

不准有隐式的 any参数。

```ts {2}
function fn(s) {
  // Parameter 's' implicitly has an 'any' type.
  console.log(s.subtr(3));
}
```

### 0.3.3 noImplicitThis

`default: true;`

不准有隐式的 `this`.
```ts {12,13}
class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getAreaFunction() {
    return function () {
      // 'this' implicitly has type 'any' because it does not have a type annotation.
      // 'this' implicitly has type 'any' because it does not have a type annotation.
      return this.width * this.height;
    };
  }

  // getAreaFunction(this: Rectangle) {
  //   return function () {
  //     return this.width * this.height;
  //   };
  // }

}
```

:::tip
如果想使用 `this`, 可以声明到第一参数上，编译后，不会占用参数位置。如上注释代码。
:::


### 0.3.4 strict

`default: false;`

是否启用严格模式。

该项设为 `true`, 那么将开启所有的 `Strict` 校验，可根据需求去关闭其他指定的选项。如下：
```json
{
  "compilerOptions": {
    "strict": true, // 默认开启了其他的 strict 校验。
    "noImplicitThis": false   // 关闭 noImplicitThis
  }
}
```

### 0.3.5 strictBindCallApply

`default: false`

对 call,bind,apply 的函数进行参数校验。

```ts {7}
function fn(x: string) {
  return parseInt(x);
}

const n1 = fn.call(undefined, "10");

// Argument of type 'boolean' is not assignable to parameter of type 'string'.
// 关掉这不会报错。
const n2 = fn.call(undefined, false);
```

### 0.3.6 strictFunctionTypes

`default: false`

检查函数的入参和出参的数据类型是否正确。

:::warning
该模式对函数式编程友好，对于固有的不安全层级性质的数据校验不友好，就像DOM对象。
```ts
type Methodish = {
  func(x: string | number): void;
};

function fn(x: string) {
  console.log("Hello, " + x.toLowerCase());
}

// Ultimately an unsafe assignment, but not detected
// m 对象的 func 是不安全的，但是未被检测到。
const m: Methodish = {
  func: fn,
};
m.func(10);
```
:::

### 0.3.7 strictNullChecks

`default: false`

如果为 `false`, 会认为 `null` 和 `undefined` 将会被忽略，这可能导致运行时错误。例如：
```ts
declare const loggedInUsername: string;

const users = [
  { name: "Oby", age: 12 },
  { name: "Heera", age: 32 },
];

const loggedInUser = users.find((u) => u.name === loggedInUsername);
// 如果开启会有如下报错：
// ‘loggedInUser’ is possibly 'undefined'. 
console.log(loggedInUser.age);
```

### 0.3.8 strictPropertyInitialization

`default: false`

严格初始化数据，如下：

```ts
class UserAccount {
  name: string;
  accountType = "user";

  email: string;
  // Property 'email' has no initializer and is not definitely assigned in the constructor.
  address: string | undefined;

  constructor(name: string) {
    this.name = name;
    // Note that this.email is not set
  }
}
```

关于上述案例:
- `this.name` 被设置了初始化.
- `this.accountType` 有默认值.
- `this.email` 由于没有设置而报错.
- `this.address` 由于声明了可能为 `undefined`, 所以可以无需初始化.


## 0.4 Module Resolution
### 0.4.1 allowSyntheticDefaultImports
### 0.4.2 allowUmdGlobalAccess
### 0.4.3 baseUrl
### 0.4.4 esModuleInterop
### 0.4.5 moduleResolution
### 0.4.6 paths
### 0.4.7 preserveSymlinks
### 0.4.8 rootDirs
### 0.4.9 typeRoots
### 0.4.10 types

## 0.5 Source Maps

### 0.5.1 inlineSourceMap

行内 sourceMap，即输出到js文件底部，不做额外文件输出。

### 0.5.2 inlineSources

需要 `inlineSourceMap` 或 `sourceRoot` 任意一个搭配使用。增加源文件的sourceMap.

例如, 只配置 `inlineSourceMap`，则 js 下的 sourceMap 只包含编译后的 `.js`, 配置 `inlineSources`, 可包含 `.ts`.

### 0.5.3 mapRoot

TODO: ???

### 0.5.4 sourceMap

文成 `.js.map` 的sourceMap 文件。

### 0.5.5 sourceRoot

TODO: ???

## 0.6 Linter Checks

### 0.6.1 noFallthroughCasesInSwitch

`switch` 的语句中，有多个 `case` 时，如果没有 `break` or `return`，则会报错。

```ts {5}
const a: number = 6;

switch (a) {
  case 0:
    // Fallthrough case in switch.
    console.log("even");
  case 1:
    console.log("odd");
    break;
}
```

### 0.6.2 noImplicitReturns

选项为`true`，则会检查所有函数的都有定义返回值。

```ts {2}
// "noImplicitReturns": true，如果把返回值类型删除，则会有提示。
function lookupHeadphonesManufacturer(color: "blue" | "black"): string {
  // Function lacks ending return statement and return type does not include 'undefined'.
  if (color === "blue") {
    return "beats";
  } else {
    "bose";
  }
}
```

```ts
// "noImplicitReturns": false, 删除返回值类型，就不会报错了。
function lookupHeadphonesManufacturer(color: "blue" | "black") {
  // Function lacks ending return statement and return type does not include 'undefined'.
  if (color === "blue") {
    return "beats";
  } else {
    "bose";
  }
}
```

### 0.6.3 noUnusedLocals

如果有值被声明未使用，则会提示报错。

:::tip
可能项目中有使用 eslint 或者 tslint，当你关掉了之后 "no-unused-var" 后，还提示未使用，可以看看是不是这个值为 `true` 呢？
:::

### 0.6.4 noUnusedParameters

函数中，如果有声明参数，但未使用，则会提示报错。

## 0.7 Experimental
### 0.7.1 emitDecoratorMetadata

`default: false`

是否使用元数据 Metadata。此选项依赖 `experimentalDecorators` 的开启。

```ts
// 源文件
function LogMethod (a: any, b: string | symbol) {
  console.log('a :>> ', a, b);
}

class A {

  @LogMethod
  log() {}
}
```

```js
// 未开启后的编译文件
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function LogMethod(a, b) {
    console.log('a :>> ', a, b);
}
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.log = function () { };
    __decorate([
        LogMethod
    ], A.prototype, "log", null);
    return A;
}());
```

```js
// 开启后的编译文件
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function LogMethod(a, b) {
    console.log('a :>> ', a, b);
}
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.log = function () { };
    __decorate([
        LogMethod,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], A.prototype, "log", null);
    return A;
}());
```

### 0.7.2 experimentalDecorators

`default: false`
是否开启实验中的装饰器写法。

## 0.8 Command Line

### 0.8.1 preserveWatchOutput

当开启 `--watch` 模式的时候，为 `true`, 则不会删除控制台每次更新打印的东西。为 `false`, 每次修改保存，都会清空控制台。

### 0.8.2 pretty

默认开启，给编译器提供一个单一颜色并具有上下文的`干净环境`。

## 0.9 Watch Options

从 3.8 版本才有的新配置项。一套新的 watching 策略去监听你的目录。

- fixedPollingInterval : 以固定的时间间隔，检查文件的更改
- priorityPollingInterval : 以固定的时间间隔，检查文件的更改，但是使用「heuristics」检查某些类型的文件的频率比其他文件低
- dynamicPriorityPolling : 使用动态队列，在该队列中，较少检查不经常修改的文件
- useFsEvents【default】 : 尝试使用操作系统/文件系统原生事件来监听文件更改
- useFsEventsOnParentDirectory : 尝试使用操作系统/文件系统原生事件来监听文件、目录的更改，这样可以使用较小的文件监听程序，但是准确性可能较低

- synchronousWatchDirectory : 在目录上禁用延迟监听功能。在可能一次发生大量文件（如 node_modules）更改时，它非常有用，但是你可能需要一些不太常见的设置时，禁用它。

### 0.9.1 fallbackPolling

当使用文件系统的事件，该选项用来指定使用特定策略

### 0.9.2 watchDirectory

在缺少递归文件监听功能的系统中，使用哪种策略监听整个目录树

### 0.9.3 watchFile

监听单个文件的策略


## 0.10 Advanced
### 0.10.1 allowUnreachableCode
### 0.10.2 allowUnusedLabels
### 0.10.3 assumeChangesOnlyAffectDirectDependencies
### 0.10.4 charset
### 0.10.5 declarationDir
### 0.10.6 diagnostics
### 0.10.7 disableSizeLimit
### 0.10.8 disableSolutionSearching
### 0.10.9 disableSourceOfProjectReferenceRedirect
### 0.10.10 emitBOM
 
### 0.10.10 emitDeclarationOnly
### 0.10.11 extendedDiagnostics
### 0.10.12 forceConsistentCasingInFileNames
### 0.10.13 generateCpuProfile
### 0.10.14 importsNotUsedAsValues
### 0.10.15 jsxFactory
### 0.10.16 jsxFragmentFactory
### 0.10.17 keyofStringsOnly
### 0.10.18 listEmittedFiles
### 0.10.19 listFiles
 
### 0.10.20 maxNodeModuleJsDepth
### 0.10.21 newLine
### 0.10.22 noEmitHelpers
### 0.10.23 noEmitOnError
### 0.10.24 noErrorTruncation
### 0.10.25 noImplicitUseStrict
### 0.10.26 noLib
### 0.10.27 noResolve
### 0.10.28 noStrictGenericChecks
### 0.10.29 out
 
### 0.10.30 preserveConstEnums
### 0.10.31 reactNamespace
### 0.10.32 resolveJsonModule
### 0.10.33 skipDefaultLibCheck
### 0.10.34 skipLibCheck
### 0.10.35 stripInternal
### 0.10.36 suppressExcessPropertyErrors
### 0.10.37 suppressImplicitAnyIndexErrors
### 0.10.38 traceResolution
### 0.10.39 useDefineForClassFields
