# CSS编码规范




[1 前言](#user-content-1-%E5%89%8D%E8%A8%80)

[2 代码风格](#user-content-2-%E4%BB%A3%E7%A0%81%E9%A3%8E%E6%A0%BC)

　　[2.1 文件](#user-content-21-%E6%96%87%E4%BB%B6)

　　[2.2 缩进](#user-content-22-%E7%BC%A9%E8%BF%9B)

　　[2.3 空格](#user-content-23-%E7%A9%BA%E6%A0%BC)

　　[2.4 行长度](#user-content-24-%E8%A1%8C%E9%95%BF%E5%BA%A6)

　　[2.5 选择器](#user-content-25-%E9%80%89%E6%8B%A9%E5%99%A8)

　　[2.6 属性](#user-content-26-%E5%B1%9E%E6%80%A7)

[3 通用](#user-content-3-%E9%80%9A%E7%94%A8)

　　[3.1 选择器](#user-content-31-%E9%80%89%E6%8B%A9%E5%99%A8)

　　[3.2 属性缩写](#user-content-32-%E5%B1%9E%E6%80%A7%E7%BC%A9%E5%86%99)

　　[3.3 属性书写顺序](#user-content-33-%E5%B1%9E%E6%80%A7%E4%B9%A6%E5%86%99%E9%A1%BA%E5%BA%8F)

　　[3.4 清除浮动](#user-content-34-%E6%B8%85%E9%99%A4%E6%B5%AE%E5%8A%A8)

　　[3.5 !important](#user-content-35-important)

　　[3.6 z-index](#user-content-36-z-index)

[4 值与单位](#user-content-4-%E5%80%BC%E4%B8%8E%E5%8D%95%E4%BD%8D)

　　[4.1 文本](#user-content-41-%E6%96%87%E6%9C%AC)

　　[4.2 数值](#user-content-42-%E6%95%B0%E5%80%BC)

　　[4.3 url()](#user-content-43-url)

　　[4.4 长度](#user-content-44-%E9%95%BF%E5%BA%A6)

　　[4.5 颜色](#user-content-45-%E9%A2%9C%E8%89%B2)

　　[4.6 2D 位置](#user-content-46-2d-%E4%BD%8D%E7%BD%AE)

[5 文本编排](#user-content-5-%E6%96%87%E6%9C%AC%E7%BC%96%E6%8E%92)

　　[5.1 字体族](#user-content-51-%E5%AD%97%E4%BD%93%E6%97%8F)

　　[5.2 字号](#user-content-52-%E5%AD%97%E5%8F%B7)

　　[5.3 字体风格](#user-content-53-%E5%AD%97%E4%BD%93%E9%A3%8E%E6%A0%BC)

　　[5.4 字重](#user-content-54-%E5%AD%97%E9%87%8D)

　　[5.5 行高](#user-content-55-%E8%A1%8C%E9%AB%98)

[6 变换与动画](#user-content-6-%E5%8F%98%E6%8D%A2%E4%B8%8E%E5%8A%A8%E7%94%BB)

[7 响应式](#user-content-7-%E5%93%8D%E5%BA%94%E5%BC%8F)

[8 其他]()

[9 Sass]()



## 1 前言


CSS 作为网页样式的描述语言，在百度一直有着广泛的应用。本文档的目标是使 CSS 代码风格保持一致，容易被理解和被维护。

虽然本文档是针对 CSS 设计的，但是在使用各种 CSS 的预编译器(如 less、sass、stylus 等)时，适用的部分也应尽量遵循本文档的约定。



文本列出几个等级，用来确定哪些是需要我们注意的，哪些需要放在全局样式的初始化之中。

- g: Global, 表示在全局的样式表中进行处理解决。

- p: Person, 表示需要开发者自行注意与解决。
- a: Auto, 表示希望以后可以通过保存格式化来解决


## 2 代码风格


### 2.1 文件(g)


#### [建议] `CSS` 文件使用无 `BOM` 的 `UTF-8` 编码。

解释：

UTF-8 编码具有更广泛的适应性。BOM 在使用程序或工具处理文件时可能造成不必要的干扰。

### 2.2 缩进(pa)

#### [强制] 使用 `2` 个空格做为一个缩进层级。

解释：

与js 的缩进进行统一，在拥有自动修复功能之后，使用自动修复达到统一风格。


示例：

```css
.selector {
  margin: 0;
  padding: 0;
}
```

### 2.3 空格(pa)

#### [强制] `选择器` 与 `{` 之间必须包含空格。

解释：提高易读性，保持和 `js` 的熟悉体验相同。

示例：

```css
.selector {
}
```

#### [强制] `属性名` 与之后的 `:` 之间不允许包含空格， `:` 与 `属性值` 之间必须包含空格。

解释：提高易读性，保持和 `js` 的熟悉体验相同。

示例：

```css
margin: 0;
```

#### [强制] `列表型属性值` 书写在单行时，`,` 后必须跟一个空格。

解释：提高易读性，保持和 `js` 的熟悉体验相同。

示例：

```css
font-family: Arial, sans-serif;
```

### 2.4 行长度(pa)

#### [强制] 每行不得超过 `100` 个字符，除非单行不可分割。

解释：

提高易读性，保证所有文档的长度的统一性。常见不可分割的场景为URL超长。


#### [建议] 对于超长的样式，在样式值的 `空格` 处或 `,` 后换行，建议按逻辑分组。

示例：

```css
/* 不同属性值按逻辑分组 */
background:
  transparent url(aVeryVeryVeryLongUrlIsPlacedHere)
	no-repeat 0 0;

/* 可重复多次的属性，每次重复一行 */
background-image:
	url(aVeryVeryVeryLongUrlIsPlacedHere)
	url(anotherVeryVeryVeryLongUrlIsPlacedHere);

/* 类似函数的属性值可以根据函数调用的缩进进行 */
background-image: -webkit-gradient(
	linear,
	left bottom,
	left top,
	color-stop(0.04, rgb(88,94,124)),
	color-stop(0.52, rgb(115,123,162))
);
```

### 2.5 选择器(pa)


#### [强制] 当一个 rule 包含多个 selector 时，每个选择器声明必须独占一行。

示例：

```css
/* good */
.post,
.page,
.comment {
	line-height: 1.5;
}

/* bad */
.post, .page, .comment {
	line-height: 1.5;
}
```

#### [强制] `>`、`+`、`~` 选择器的两边各保留一个空格。

示例：

```css
/* good */
main > nav {
	padding: 10px;
}

label + input {
	margin-left: 5px;
}

input:checked ~ button {
	background-color: #69C;
}

/* bad */
main>nav {
	padding: 10px;
}

label+input {
	margin-left: 5px;
}

input:checked~button {
  background-color: #69C;
}
```

#### [强制] 属性选择器中的值必须用双引号包围。

解释：

不允许使用单引号，不允许不使用引号。


示例：

```css
/* good */
article[character="juliet"] {
  voice-family: "Vivien Leigh", victoria, female;
}

/* bad */
article[character='juliet'] {
  voice-family: "Vivien Leigh", victoria, female;
}
```

### 2.6 属性(pa)


#### [强制] 属性定义必须另起一行。

示例：

```css
/* good */
.selector {
  margin: 0;
  padding: 0;
}

/* bad */
.selector { margin: 0; padding: 0; }
```

#### [强制] 属性定义后必须以分号结尾。

示例：

```css
/* good */
.selector {
  margin: 0;
}

/* bad */
.selector {
  margin: 0
}
```




## 3 通用


### 3.1 选择器


#### [强制] 如无必要，不得为 `id`、`class` 选择器添加类型选择器进行限定。

解释：

在性能和维护性上，都有一定的影响。


示例：


```css
/* good */
#error,
.danger-message {
  font-color: #c00;
}

/* bad */
dialog#error,
p.danger-message {
  font-color: #c00;
}
```

#### [建议] 选择器的嵌套层级应不大于 `3` 级，位置靠后的限定条件应尽可能精确。

示例：

```css
/* good */
#username input {}
.comment .avatar {}

/* bad */
.page .header .login #username input {}
.comment div * {}
```



### 3.2 属性缩写(p)

#### [建议] 在可以使用缩写的情况下，尽量使用属性缩写。

示例：

```css
/* good */
.post {
  font: 12px/1.5 arial, sans-serif;
}

/* bad */
.post {
  font-family: arial, sans-serif;
  font-size: 12px;
  line-height: 1.5;
}
```

#### [建议] 使用 `border` / `margin` / `padding` 等缩写时，应注意隐含值对实际数值的影响，确实需要设置多个方向的值时才使用缩写。

解释：

`border` / `margin` / `padding` 等缩写会同时设置多个属性的值，容易覆盖不需要覆盖的设定。如某些方向需要继承其他声明的值，则应该分开设置。


示例：

```css
/* centering <article class="page"> horizontally and highlight featured ones */
article {
  margin: 5px;
  border: 1px solid #999;
}

/* good */
.page {
  margin-right: auto;
  margin-left: auto;
}

.featured {
  border-color: #69c;
}

/* bad */
.page {
  margin: 5px auto; /* introducing redundancy */
}

.featured {
  border: 1px solid #69c; /* introducing redundancy */
}
```


### 3.3 属性书写顺序(pa)


#### [建议] 同一 rule set 下的属性在书写时，应按功能进行分组，并以 **Formatting Model（布局方式、位置） > Box Model（尺寸） > Typographic（文本相关） > Visual（视觉效果）** 的顺序书写，以提高代码的可读性。

解释：

- Formatting Model 相关属性包括：`position` / `top` / `right` / `bottom` / `left` / `float` / `display` / `overflow` 等
- Box Model 相关属性包括：`border` / `margin` / `padding` / `width` / `height` 等
- Typographic 相关属性包括：`font` / `line-height` / `text-align` / `word-wrap` 等
- Visual 相关属性包括：`background` / `color` / `transition` / `list-style` 等

另外，如果包含 `content` 属性，应放在最前面。


示例：

```css
.sidebar {
  /* formatting model: positioning schemes / offsets / z-indexes / display / ...  */
  position: absolute;
  top: 50px;
  left: 0;
  overflow-x: hidden;

  /* box model: sizes / margins / paddings / borders / ...  */
  width: 200px;
  padding: 5px;
  border: 1px solid #ddd;

  /* typographic: font / aligns / text styles / ... */
  font-size: 14px;
  line-height: 20px;

  /* visual: colors / shadows / gradients / ... */
  background: #f5f5f5;
  color: #333;
  transition: color 1s;
}
```


### 3.4 清除浮动(g)

#### [建议] 当元素需要撑起高度以包含内部的浮动元素时，通过对伪类设置 `clear` 或触发 `BFC` 的方式进行 `clearfix`。尽量不使用增加空标签的方式。

解释：

触发 BFC 的方式很多，常见的有：

* float 非 none
* position 非 static
* overflow 非 visible

如希望使用更小副作用的清除浮动方法，参见 [A new micro clearfix hack](http://nicolasgallagher.com/micro-clearfix-hack/) 一文。

另需注意，对已经触发 BFC 的元素不需要再进行 clearfix。


### 3.5 !important(p)


#### [建议] 尽量不使用 `!important` 声明。


#### [建议] 当需要强制指定样式且不允许任何场景覆盖时，通过标签内联和 `!important` 定义样式。

解释：

必须注意的是，仅在设计上 `确实不允许任何其它场景覆盖样式` 时，才使用内联的 `!important` 样式。通常在第三方环境的应用中使用这种方案。




## 4 值与单位


### 4.1 文本(pa)


#### [强制] 文本内容必须用双引号包围。

解释：

文本类型的内容可能在选择器、属性值等内容中。


示例：

```css
/* good */
html[lang|="zh"] q:before {
  font-family: "Microsoft YaHei", sans-serif;
  content: "“";
}

html[lang|="zh"] q:after {
  font-family: "Microsoft YaHei", sans-serif;
  content: "”";
}

/* bad */
html[lang|=zh] q:before {
  font-family: 'Microsoft YaHei', sans-serif;
  content: '“';
}

html[lang|=zh] q:after {
  font-family: "Microsoft YaHei", sans-serif;
  content: "”";
}
```

### 4.2 数值(pa)

#### [建议] 当数值为 0 - 1 之间的小数时，不省略整数部分的 `0`。

示例：

```css
/* good */
panel {
  opacity: 0.8;
}

/* bad */
panel {
  opacity: .8;
}
```

### 4.3 url()

#### [强制] `url()` 函数中的路径加引号。(pa)

解释：

和 `css` 中所有的文本类等样式保持统一，减少评判问题。

示例：

```css
body {
  background: url("bg.png");
}
```

#### [建议] `url()` 函数中的绝对路径可省去协议名。(p)

解释：

在之前浏览器，如有写前缀可能会有两次请求。


示例：

```css
body {
  background: url("//baidu.com/img/bg.png") no-repeat 0 0;
}
```


### 4.4 长度 (pa)


#### [强制] 长度为 `0` 时须省略单位。 (也只有长度单位可省)

示例：

```css
/* good */
body {
  padding: 0 5px;
}

/* bad */
body {
  padding: 0px 5px;
}
```


### 4.5 颜色 (pa)


#### [强制] RGB颜色值必须使用十六进制记号形式 `#rrggbb`。不允许使用 `rgb()`。 

解释：

带有alpha的颜色信息可以使用 `rgba()`。使用 `rgba()` 时每个逗号后必须保留一个空格。


示例：

```css
/* good */
.success {
  box-shadow: 0 0 2px rgba(0, 128, 0, .3);
  border-color: #008000;
}

/* bad */
.success {
  box-shadow: 0 0 2px rgba(0,128,0,.3);
  border-color: rgb(0, 128, 0);
}
```

#### [强制] 颜色值不允许使用命名色值。

示例：

```css
/* good */
.success {
  color: #90ee90;
}

/* bad */
.success {
  color: lightgreen;
}
```

#### [建议] 颜色值中的英文字符采用小写。如不用小写也需要保证同一项目内保持大小写一致。


示例：

```css
/* good */
.success {
  background-color: #aca;
  color: #90ee90;
}

/* good */
.success {
  background-color: #ACA;
  color: #90EE90;
}

/* bad */
.success {
  background-color: #ACA;
  color: #90ee90;
}
```


### 4.6 2D 位置


#### [强制] 必须同时给出水平和垂直方向的位置。

解释：

2D 位置初始值为 `0% 0%`，但在只有一个方向的值时，另一个方向的值会被解析为 center。为避免理解上的困扰，应同时给出两个方向的值。[background-position属性值的定义](http://www.w3.org/TR/CSS21/colors.html#propdef-background-position)


示例：

```css
/* good */
body {
  background-position: center top; /* 50% 0% */
}

/* bad */
body {
  background-position: top; /* 50% 0% */
}
```



## 5 文本编排


### 5.1 字体族(g)


#### [强制] `font-family` 属性中的字体族名称应使用字体的英文 `Family Name`，其中如有空格，须放置在引号中。

解释：

所谓英文 Family Name，为字体文件的一个元数据，常见名称如下：

| 字体            | 操作系统 | Family Name        |
| --------------- | -------- | ------------------ |
| 宋体 (中易宋体) | Windows  | SimSun             |
| 黑体 (中易黑体) | Windows  | SimHei             |
| 微软雅黑        | Windows  | Microsoft YaHei    |
| 微软正黑        | Windows  | Microsoft JhengHei |
| 华文黑体        | Mac/iOS  | STHeiti            |
| 冬青黑体        | Mac/iOS  | Hiragino Sans GB   |


示例：

```css
h1 {
  font-family: "Microsoft YaHei";
}
```

> 注：最好全局给一个通用 font-family 。

#### [强制] `font-family` 按「西文字体在前、中文字体在后」、「效果佳 (质量高/更能满足需求) 的字体在前、效果一般的字体在后」的顺序编写，最后必须指定一个通用字体族( `serif` / `sans-serif` )。

解释：

更详细说明可参考[本文](http://www.zhihu.com/question/19911793/answer/13329819)。

示例：

```css
/* Display according to platform */
.article {
  font-family: Arial, sans-serif;
}

/* Specific for most platforms */
h1 {
  font-family: "Helvetica Neue", Arial, "Hiragino Sans GB", "WenQuanYi Micro Hei", "Microsoft YaHei", sans-serif;
}
```

#### [强制] `font-family` 不区分大小写，但在同一个项目中，同样的 `Family Name` 大小写必须统一。

示例：

```css
/* good */
body {
  font-family: Arial, sans-serif;
}

h1 {
  font-family: Arial, "Microsoft YaHei", sans-serif;
}

/* bad */
body {
  font-family: arial, sans-serif;
}

h1 {
  font-family: Arial, "Microsoft YaHei", sans-serif;
}
```

### 5.2 字号


#### [强制] 需要在 Windows 平台显示的中文内容，其字号应不小于 `12px`。

解释：

由于 Windows 的字体渲染机制，小于 `12px` 的文字显示效果极差、难以辨认。


### 5.3 字体风格


#### [建议] 需要在 Windows 平台显示的中文内容，不要使用除 `normal` 外的 `font-style`。其他平台也应慎用。

解释：

由于中文字体没有 `italic` 风格的实现，所有浏览器下都会 fallback 到 `obilique` 实现 (自动拟合为斜体)，小字号下 (特别是 Windows 下会在小字号下使用点阵字体的情况下) 显示效果差，造成阅读困难。


### 5.4 字重


#### [强制] `font-weight` 属性必须使用数值方式描述。

解释：

CSS 的字重分 100 – 900 共九档，但目前受字体本身质量和浏览器的限制，实际上支持 `400` 和 `700` 两档，分别等价于关键词 `normal` 和 `bold`。

浏览器本身使用一系列[启发式规则](http://www.w3.org/TR/CSS21/fonts.html#propdef-font-weight)来进行匹配，在 `<700` 时一般匹配字体的 Regular 字重，`>=700` 时匹配 Bold 字重。

但已有浏览器开始支持 `=600` 时匹配 Semibold 字重 (见[此表](http://justineo.github.io/slideshows/font/#/3/15))，故使用数值描述增加了灵活性，也更简短。

示例：

```css
/* good */
h1 {
  font-weight: 700;
}

/* bad */
h1 {
  font-weight: bold;
}
```

### 5.5 行高


#### [建议] `line-height` 在定义文本段落时，应使用数值。

解释：

将 `line-height` 设置为数值，浏览器会基于当前元素设置的 `font-size` 进行再次计算。在不同字号的文本段落组合中，能达到较为舒适的行间间隔效果，避免在每个设置了 `font-size` 都需要设置 `line-height`。

当 `line-height` 用于控制垂直居中时，还是应该设置成与容器高度一致。


示例：

```css
.container {
  line-height: 1.5;
}
```



## 6 变换与动画

#### [强制] 使用 `transition` 时应指定 `transition-property`。

示例：

```css
/* good */
.box {
  transition: color 1s, border-color 1s;
}

/* bad */
.box {
  transition: all 1s;
}
```

#### [建议] 尽可能在浏览器能高效实现的属性上添加过渡和动画。

解释：

见[本文](http://www.html5rocks.com/en/tutorials/speed/high-performance-animations/)，在可能的情况下应选择这样四种变换：

* `transform: translate(npx, npx);`
* `transform: scale(n);`
* `transform: rotate(ndeg);`
* `opacity: 0..1;`

典型的，可以使用 `translate` 来代替 `left` 作为动画属性。

示例：

```css
/* good */
.box {
  transition: transform 1s;
}
.box:hover {
  transform: translate(20px); /* move right for 20px */
}

/* bad */
.box {
  left: 0;
  transition: left 1s;
}
.box:hover {
  left: 20px; /* move right for 20px */
}
```




## 7 响应式

#### [强制] `Media Query` 不得单独编排，必须与相关的规则一起定义。

示例：

```css
/* Good */
/* header styles */
@media (...) {
  /* header styles */
}

/* main styles */
@media (...) {
  /* main styles */
}

/* footer styles */
@media (...) {
  /* footer styles */
}

/* Bad */
/* header styles */
/* main styles */
/* footer styles */

@media (...) {
  /* header styles */
  /* main styles */
  /* footer styles */
}
```



## 8 其他(pa)

### 8.1 边框

#### [推荐]定义无边框样式时，使用 `none` 代替 `0`。

解释：在 airbnb 等规范中有使用 `0`代替`none`，旨在兼容 `IE6/IE7` 下 `none`不生效。目前无需兼容到如此低版本。但是 `none` 是有绝对的无渲染，`0`值浏览器依旧会渲染。因此，更加倾向 `none`

```css
/* good */
.foo {
  border: none;
}

/* bad */
.foo {
  border: 0;
}
```



## 8.2 JS Hook

#### [建议] 不单独设置 class 在 js 中来使用，即没有 class 样式行为。



## 9 Sass(pa)

### 9.1 语法	

#### [强制] 使用 `.scss` 的语法，不使用 `.sass` 原本的语法。

#### [强制] 属性声明的排序

1. 属性声明

首先列出除去 `@include` 和嵌套选择器之外的所有属性声明。

```scss
.btn-green {
  background: green;
  font-weight: bold;
  // ...
}
```

2. `@include` 声明

紧随后面的是 `@include`，这样可以使得整个选择器的可读性更高。

```scss
.btn-green {
  background: green;
  font-weight: bold;
  @include transition(background 0.5s ease);
  // ...
}
```

3. 嵌套选择器

如果有必要用到嵌套选择器，把它们放到最后，在规则声明和嵌套选择器之间要加上空白，相邻嵌套选择器之间也要加上空白。嵌套选择器中的内容也要遵循上述指引。

```scss
.btn {
  background: green;
  font-weight: bold;
  @include transition(background 0.5s ease);

  .icon {
    margin-right: 10px;
  }
}
```

### 变量

变量名应使用破折号（例如 `$my-variable`）代替 camelCased 和 snake_cased 风格。对于仅用在当前文件的变量，可以在变量名之前添加下划线前缀（例如 `$_my-variable`）。

### Mixins

为了让代码遵循 DRY 原则（Don't Repeat Yourself）、增强清晰性或抽象化复杂性，应该使用 mixin，这与那些命名良好的函数的作用是异曲同工的。虽然 mixin 可以不接收参数，但要注意，假如你不压缩负载（比如通过 gzip），这样会导致最终的样式包含不必要的代码重复。

### 扩展指令

应避免使用 `@extend` 指令，因为它并不直观，而且具有潜在风险，特别是用在嵌套选择器的时候。即便是在顶层占位符选择器使用扩展，如果选择器的顺序最终会改变，也可能会导致问题。（比如，如果它们存在于其他文件，而加载顺序发生了变化）。其实，使用 @extend 所获得的大部分优化效果，gzip 压缩已经帮助你做到了，因此你只需要通过 mixin 让样式表更符合 DRY 原则就足够了。

### 嵌套选择器

**请不要让嵌套选择器的深度超过 3 层！**

```scss
.page-container {
  .content {
    .profile {
      // STOP!
    }
  }
}
```