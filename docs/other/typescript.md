# Typescript

## tsconfig.json
```js
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */

    /* Basic Options */
    // 允许导入 js文件。如果为 false，在 ts 文件中 import js文件会报错。
    "allowJs": true,

    /** 与 “allowjs” 协同，会对 js 中的使用，也进行类型校验。
     *  例如："checkJs": false,
     *  @file1.js
     *  export default const pi = parseFloat(3.14)   // 其实 parseFloat(str: String), 入参规定是 字符串。
     *  @file2.ts
     *  import pi from 'files1.js'  // 这里不会报错。如果，"checkJs": true, 则会报错，入参必须为 String.
     */
    "checkJs": true,

    /**
     * 启动工程编译：
     * 
     * ❓不太懂什么意思。
     * 
     * 前置条件：
     * - `allowJs` 属性必须开启。
     * - 设置 `rootDir` 配置项。
     * - 所有的声明文件都必须在 `includes` 和 `files` 属性中有列出来。
     * - 复合功能的开启，强依赖，`declaration` 的开启。
     */
    "composite": true,

    /**
     * 为项目下的 ts 和 js 文件生成，对应的 d.ts 声明文件
     */
    "declaration": true,

    /**
     * @origin `Generates a sourcemap for each corresponding '.d.ts' file.`
     * 
     * declarationMap 属性，依赖于 `declaration` 或 `composite` 属性中的任意一个
     * 开启后，会生成 .d.ts.map 文件，对应源 .d.ts 文件的 sourceMap.
     */
    "declarationMap": true,

    /**
     * @origin `Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'.`
     * 
     * 为 false 时，则对迭代器的写法默认自动降级成 for 循环。
     * 例如，for-of, [...arr], function(...args) 和 Symbol.iterator, 都会被转换成 for 循环进行赋值。
     * 
     * 注意⚠️：虽然绝大多数情况下是满足期望的，但不是百分百。例如，很多 emoji，如（😜），for 循环的长度为2，甚至更多，但是迭代器只会读取到一个。
     * 关于这个可以看[1.this blog post by Jonathan New]的博客, 本末有链接。
     * 
     * 如果，Symbol.iterator 不被提供在运行时，就存在一些问题。如下：
     * // Make an array where the '1' element is missing
     * let missing = [0, , 1];
     * let spreaded = [...missing];
     * let concated = [].concat(missing);
     * 
     * // true
     * "1" in spreaded;
     * // false
     * "1" in concated;
     * 
     * 所有，只有当 Symbol.iterator，被提供的时候才能更加准备的模仿 ES6 的行为。
     * 
     * 简而言之，开启就对了，可以尽可能提高合法性。（如果原生不支持，Symbol.iterator就尴尬了。)
     * 假想：能否通过 babel 对 Symbol 的垫片来完成更加低版本的兼容问题。
     */
    "downlevelIteration": true,

    /** 
     * @origin `Import emit helpers from 'tslib'.`
     * 
     * 简称为：导入助手。
     * 在降级过程中，例如上面对迭代器的兼容，使用一个 for循环的函数。如果，很多文件都有使用的话，则会每个文件都有自己的一个迭代器的实现。
     * downlevelIteration 和 importHelpers 开启的话，就会去引入 'tslib' 来进行模版的复用。
     */
    "importHelpers": true,

    /**
     * @origin `Enable incremental compilation`
     * 
     * 创建一个 .tsbuildinfo 后缀的名称，跟随在 tsconfig.json 目录中。
     * 功能是，展示一个对项目中依赖关系的图文件，可以随时删除，对项目无影响。
     */
    "incremental": true,

    /**
     * @origin `Transpile each file as a separate module (similar to 'ts.transpileModule').`
     * 
     * 对每个文件都进行隔离模块导出。即，必须在文件中使用 import/export.
     * 场景：
     *  // 假设 someType 根本没被定义，没有这个导出项，那么 export 出的 someType 将被过滤掉。从而引发 js 运行时错误。
     *  import { someType, someFunction } from "someModule";
     *  someFunction();
     *  export { someType, someFunction };
     *  
     * ❓个人疑问：someType 没写，按理来说不是，ts 编译器就会报错，为什么，到运行时？还是说，其他的编译器可以通过？例如，babel。
     */
    "isolatedModules": true,

    /**
     * @origin `Specify JSX code generation: 'preserve', 'react-native', or 'react'.`
     * 对 jsx 语法的内置支持。三种支持的区别为：
     * 模式             输入         输出                        输出文件扩展名
     * preserve	      <div />   	<div />	                       .jsx
     * react	        <div />	   React.createElement("div")	     .js
     * react-native	  <div />	    <div />	                       .js
     * 
     * 碰到问题1: JSX 元素隐式具有类型 "any"，因为不存在接口 "JSX.IntrinsicElements"。
     * 解决：React 对 IntrinsicElements 接口， Element 接口等都进行了实现，貌似在 react.d.ts
     * TODO: 找到声明的 types 包。
     */
    "jsx": "preserve",

    /** 
     * @origin `Specify library files to be included in the compilation.`
     * 
     */                   
    "lib": [],

    "target": "es5",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
    "module": "commonjs",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
    // "sourceMap": true,                     /* Generates corresponding '.map' file. */
    // "outFile": "./",                       /* Concatenate and emit output to single file. */
    // "outDir": "./",                        /* Redirect output structure to the directory. */
    // "rootDir": "./",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
    // "tsBuildInfoFile": "./",               /* Specify file to store incremental compilation information */
    // "removeComments": true,                /* Do not emit comments to output. */
    // "noEmit": true,                        /* Do not emit outputs. */

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

[1.this blog post by Jonathan New](https://blog.jonnew.com/posts/poo-dot-length-equals-two)