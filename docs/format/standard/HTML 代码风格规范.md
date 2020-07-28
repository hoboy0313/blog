## 目录

1. [代码风格](#user_1)

   1.1  [缩进和换行](#user_1_1)

   1.2  [标签](#user_1_2)

   1.3  [属性](#user_1_3)

   1.4  [命名](#user_1_4)

2. [通用](#user_2)

   2.1  [DOCTYPE](#user_2_1)

   2.2  [编码](#user_2_2)

   2.3  [CSS 和 JavaScript 引入](#user_2_3)

3. [head 部分](#user_3)

   3.1  [title](#user_3_1)

   3.2  [favicon](#user_3_2)

   3.3  [viewport](#user_3_3)

4. [图片](#user_4)

5. [表单](#user_5)

   5.1 [控件标题](#user_5_1)

   5.2 [按钮](#user_5_2)

   5.3 [可访问性 (A11Y)](#user_5_3)

6. [模板中的 HTML](#user_6)



## 1. <span id="user_1">代码风格</span>

### 1.1 <span id="user_1_1">缩进和换行</span>

#### 1.1.1 <span style="color: #DC143C;">[强制]: </span>用 `两个空格` 的缩进方式。部分使用 `tab` 缩进的，可能会是 `tab` 符，需要自行设置 `tab` 自动变成 `space`

> 注意：HTML 中的 js 和 css 采用的都是同样的缩进方式

示例：

```HTML
<style>
/* 样式内容的第一级缩进与所属的 style 标签对齐 */
header {
  font-size: 28px;
}
main {}
footer {}
</style>

<body>
	<header>Header</header>
  <main>main</main>
  <footer>footer</footer>
</body>

<script>
// 脚本代码的第一级缩进与所属的 script 标签对齐
(function(w) {
  // to do something.
})(window)
</script>
```

#### 1.1.2 [建议]：每行不能超过100个字符。

原因：太长不利于阅读，特别是后面的`Vue` 文件，经常会碰到长度问题。我们希望它看起来更为清晰。

示例：

```vue
<template>
  <section class="detail-container">
    <some-component
      v-for="(item, index) in items"
      :key="index"
      :style="computedStyle"
      :message="`some message`"
      class="some-items"
    ></some-component>
  </section>
</template>
```



###  <span id="user_1_2">1.2 标签</span>

#### 1.2.1<span style="color: #DC143C;">[强制]: </span> 标签必须是用小写字母

示例：

```html
<!-- good  -->
<p>Hello</p>

<!-- bad -->
<P>Hello</P>
```

#### 1.2.2 <span style="color: #DC143C;">[强制]: </span> 对于无需自闭合的标签，不允许自闭合

示例：

```html
<!-- good -->
<ul>
    <li>first</li>
    <li>second</li>
</ul>

<!-- bad -->
<ul>
    <li>first
    <li>second
</ul>
```

#### 1.2.3 <span style="color: #DC143C;">[强制]: </span>标签使用必须符合标签嵌套规则。

解释：

比如 `div` 不得置于 `p` 中，`tbody` 必须置于 `table` 中, 亦或者`inline`标签不应该包裹 `block`标签。

详细的标签嵌套规则参见[HTML DTD](http://www.cs.tut.fi/~jkorpela/html5.dtd)中的 `Elements` 定义部分。

示例：

```html
<!-- good -->
<div>
 <span>Span</span> 
</div>

<!-- bad -->
<a>
 <div>Span</div> 
</a>
```

#### 1.2.4 [建议] HTML 标签的使用应该遵循标签的语义。

解释：

下面是常见标签语义

- p - 段落
- h1,h2,h3,h4,h5,h6 - 层级标题
- strong,em - 强调
- ins - 插入
- del - 删除
- abbr - 缩写
- code - 代码标识
- cite - 引述来源作品的标题
- q - 引用
- blockquote - 一段或长篇引用
- ul - 无序列表
- ol - 有序列表
- dl,dt,dd - 定义列表

示例：

示例：

```html
<!-- good -->
<p>Esprima serves as an important <strong>building block</strong> for some JavaScript language tools.</p>

<!-- bad -->
<div>Esprima serves as an important <span class="strong">building block</span> for some JavaScript language tools.</div>
```

#### 1.2.5 [建议] 标签的使用应尽量简洁，减少不必要的标签。

示例：

```html
<!-- good -->
<img class="avatar" src="image.png">

<!-- bad -->
<span class="avatar">
    <img src="image.png">
</span>
```



### <span id="user_1_3">1.3 属性</span>

#### 1.3.1 [强烈建议] 属性名必须使用小写字母。

示例：

```html
<!-- good -->
<table cellspacing="0">...</table>

<!-- bad -->
<table cellSpacing="0">...</table>
```

> 注意：有些许例外。例如，svg 的 viewBox 属性必须使用驼峰命名才可生效。

#### 1.3.2 <span style="color: #DC143C;">[强制]: </span> 属性值必须用双引号包围。

解释：

不允许使用单引号，不允许不使用引号。

示例：

```html
<!-- good -->
<script src="app.js"></script>

<!-- bad -->
<script src='app.js'></script>
<script src=app.js></script>
```

#### 1.3.3 [建议] 布尔类型的属性，建议不添加属性值。

示例：

```html
<input type="text" disabled>
<input type="checkbox" value="1" checked>
```

#### 1.3.4 [建议] 自定义属性建议以 `xxx-` 为前缀，推荐使用 `data-`。

解释：

使用前缀有助于区分自定义属性和标准定义的属性。

示例：

```html
<ol data-list-type="news"></ol>
```

#### 1.3.5 [建议] 属性按照一定的顺序出现在以保持易读性。

大致如下：

id class name data- *src, for, type, href, value , checked, max-length, max, min, pattern placeholder, title, alt aria-*, role required, readonly, disabled

示例：

```html
<div
  id=""
  class=""
  name=""
  data-xx=""
  for=""
  type=""
  href=""
  value=""
  checked
  max-length=""
  max=""
  min=""
  placeholder=""
  title=""
  alt=""
  aria-xx=""
  role=""
  required=""
  readonly
  disabled
></div>
```



### <span id="user_1_4">1.4 命名</span>

#### 1.4.1 <span style="color: #DC143C;">[强制]: </span> 元素 `id` 必须保证页面唯一。

解释：

同一个页面中，不同的元素包含相同的 `id`，不符合 `id` 的属性含义。并且使用 `document.getElementById` 时可能导致难以追查的问题。

#### 1.4.2 [建议] `id` 建议单词全字母小写，单词间以 `-` 分隔。同项目必须保持风格一致。

#### 1.4.3 <span style="color: #DC143C;">[强制]: </span> 禁止为了 `hook 脚本`，创建无样式信息的 `class`。

解释：

不允许 `class` 只用于让 JavaScript 选择某些元素，`class` 应该具有明确的语义和样式。否则容易导致 CSS class 泛滥。

使用 `id`、属性选择作为 hook 是更好的方式。

#### 1.4.4 <span style="color: #DC143C;">[强制]: </span> 同一页面，应避免使用相同的 `name` 与 `id`。

解释：

IE 浏览器会混淆元素的 `id` 和 `name` 属性， `document.getElementById` 可能获得不期望的元素。所以在对元素的 `id` 与 `name` 属性的命名需要非常小心。

一个比较好的实践是，为 `id` 和 `name` 使用不同的命名法。

示例：

```html
<input name="foo">
<div id="foo"></div>
<script>
// IE6 将显示 INPUT
alert(document.getElementById('foo').tagName);
</script>
```

## <span id="user_2">2 通用</span>



### <span id="user_2_1">2.1 DOCTYPE</span>

#### 2.1.1 <span style="color: #DC143C;">[强制]: </span>使用 `HTML5` 的 `doctype` 来启用标准模式，建议使用大写的 `DOCTYPE`。

示例：

```html
<!DOCTYPE html>
```

##### #### 2.1.2 [建议] 启用 IE Edge 模式。

示例：

```html
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
```

##### #### 2.1.3 [建议] 在 `html` 标签上设置正确的 `lang` 属性。

解释：

有助于提高页面的可访问性，如：让语音合成工具确定其所应该采用的发音，令翻译工具确定其翻译语言等。

示例：

```html
<html lang="zh-CN">
```



### <span id="user_2_2">2.2 编码</span>

#### 2.2.1 <span style="color: #DC143C;">[强制]: </span> 页面必须使用精简形式，明确指定字符编码。指定字符编码的 `meta` 必须是 `head` 的第一个直接子元素。

解释：

见 [HTML5 Charset能用吗](http://www.qianduan.net/html5-charset-can-it.html) 一文。

示例：

```html
<html>
    <head>
        <meta charset="UTF-8">
        ......
    </head>
    <body>
        ......
    </body>
</html>
```

#### 2.2.2 [建议] `HTML` 文件使用无 `BOM` 的 `UTF-8` 编码。

解释：

`UTF-8` 编码具有更广泛的适应性。`BOM` 在使用程序或工具处理文件时可能造成不必要的干扰。

### <span id="user_2_3">2.3 CSS 和 JavaScript 引入</span>

#### 2.3.1<span style="color: #DC143C;">[强制]: </span> 引入 `CSS` 时必须指明 `rel="stylesheet"`。

示例：

```html
<link rel="stylesheet" href="page.css">
```

#### 2.3.2 [建议] 引入 `CSS` 和 `JavaScript` 时无须指明 `type` 属性。

解释：

`text/css` 和 `text/javascript` 是 `type` 的默认值。

#### 2.3.3 [建议] 展现定义放置于外部 `CSS` 中，行为定义放置于外部 `JavaScript` 中。

解释：

结构-样式-行为的代码分离，对于提高代码的可阅读性和维护性都有好处。

#### 2.3.4 [建议] 在 `head` 中引入页面需要的所有 `CSS` 资源。

解释：

在页面渲染的过程中，新的CSS可能导致元素的样式重新计算和绘制，页面闪烁。

#### 2.3.5 [建议] `JavaScript` 应当放在页面末尾，或采用异步加载。

解释：

将 `script` 放在页面中间将阻断页面的渲染。出于性能方面的考虑，如非必要，请遵守此条建议。

示例：

```html
<body>
    <!-- a lot of elements -->
    <script src="init-behavior.js"></script>
</body>
```

#### 2.3.6 [建议] 移动环境或只针对现代浏览器设计的 Web 应用，如果引用外部资源的 `URL` 协议部分与页面相同，建议省略协议前缀。

解释：

使用 `protocol-relative URL` 引入 CSS，在 `IE7/8` 下，会发两次请求。是否使用 `protocol-relative URL` 应充分考虑页面针对的环境。

示例：

```html
<script src="//s1.bdstatic.com/cache/static/jquery-1.10.2.min_f2fb5194.js"></script>
```



## <span id="user_3">3. head</span>

### <span id="user_3_1">3.1 title</span>

#### 3.1.1 <span style="color: #DC143C;">[强制]: </span>页面必须包含 `title` 标签声明标题。

#### 3.1.2 <span style="color: #DC143C;">[强制]: </span> `title` 必须作为 `head` 的直接子元素，并紧随 `charset` 声明之后。

解释：

`title` 中如果包含 ASCII 之外的字符，浏览器需要知道字符编码类型才能进行解码，否则可能导致乱码。

示例：

```html
<head>
    <meta charset="UTF-8">
    <title>页面标题</title>
</head>
```

### <span id="user_3_2">3.2 favicon</span>

#### 3.2.1<span style="color: #DC143C;">[强制]: </span> 保证 `favicon` 可访问。

解释：

在未指定 favicon 时，大多数浏览器会请求 Web Server 根目录下的 `favicon.ico` 。为了保证 favicon 可访问，避免 404，必须遵循以下两种方法之一：

1. 在 Web Server 根目录放置 `favicon.ico` 文件。
2. 使用 `link` 指定 favicon。

示例：

```html
<link rel="shortcut icon" href="path/to/favicon.ico">
```

### <span id="user_3_3">3.3 viewport</span>

#### 3.3.1 [建议] 若页面欲对移动设备友好，需指定页面的 `viewport`。

解释：

viewport meta tag 可以设置可视区域的宽度和初始缩放大小，避免在移动设备上出现页面展示不正常。

比如，在页面宽度小于 `980px` 时，若需 iOS 设备友好，应当设置 viewport 的 `width` 值来适应你的页面宽度。同时因为不同移动设备分辨率不同，在设置时，应当使用 `device-width` 和 `device-height` 变量。

另外，为了使 viewport 正常工作，在页面内容样式布局设计上也要做相应调整，如避免绝对定位等。关于 viewport 的更多介绍，可以参见 [Safari Web Content Guide的介绍](https://developer.apple.com/library/mac/documentation/AppleApplications/Reference/SafariWebContent/UsingtheViewport/UsingtheViewport.html#//apple_ref/doc/uid/TP40006509-SW26)

## <span id="user_4">4 图片</span>

#### 4.1.1 <span style="color: #DC143C;">[强制]: </span> 禁止 `img` 的 `src` 取值为空。延迟加载的图片也要增加默认的 `src`。

解释：

`src` 取值为空，会导致部分浏览器重新加载一次当前页面，参考：https://developer.yahoo.com/performance/rules.html#emptysrc

#### 4.1.2 [建议] 避免为 `img` 添加不必要的 `title` 属性。

解释：

多余的 `title` 影响看图体验，并且增加了页面尺寸。

#### 4.1.3 [建议] 为重要图片添加 `alt` 属性。

解释：

可以提高图片加载失败时的用户体验。

#### 4.1.4 [建议] 添加 `width` 和 `height` 属性，以避免页面抖动。

#### 4.1.5 [建议] 有下载需求的图片采用 `img` 标签实现，无下载需求的图片采用 CSS 背景图实现。

解释：

1. 产品 logo、用户头像、用户产生的图片等有潜在下载需求的图片，以 `img` 形式实现，能方便用户下载。
2. 无下载需求的图片，比如：icon、背景、代码使用的图片等，尽可能采用 CSS 背景图实现。

## <span id="user_5">5 表单</span>

### <span id="user_5_1">5.1 控件标题</span>

#### 5.1.1 <span style="color: #DC143C;">[强制]: </span> 有文本标题的控件必须使用 `label` 标签将其与其标题相关联。

解释：

有两种方式：

1. 将控件置于 `label` 内。
2. `label` 的 `for` 属性指向控件的 `id`。

推荐使用第一种，减少不必要的 `id`。如果 DOM 结构不允许直接嵌套，则应使用第二种。

示例：

```html
<label><input type="checkbox" name="confirm" value="on"> 我已确认上述条款</label>

<label for="username">用户名：</label> <input type="textbox" name="username" id="username">
```

### <span id="user_5_2">5.2 按钮</span>

#### 5.2.1 <span style="color: #DC143C;">[强制]: </span> 使用 `button` 元素时必须指明 `type` 属性值。

解释：

`button` 元素的默认 `type` 为 `submit`，如果被置于 `form` 元素中，点击后将导致表单提交。为显示区分其作用方便理解，必须给出 `type` 属性。

示例：

```html
<button type="submit">提交</button>
<button type="button">取消</button>
```

#### 5.2.2 [建议] 尽量不要使用按钮类元素的 `name` 属性。

解释：

由于浏览器兼容性问题，使用按钮的 `name` 属性会带来许多难以发现的问题。具体情况可参考[此文](http://w3help.org/zh-cn/causes/CM2001)。

> 关于 button 标签具有较多的默认样式，建议在全局样式初始化给定一个初始化的 button 样式

### <span id="user_5_3">5.3 可访问性 (A11Y)</span>

##### #### 5.3.1 [建议] 负责主要功能的按钮在 DOM 中的顺序应靠前。

解释：

负责主要功能的按钮应相对靠前，以提高可访问性。如果在 CSS 中指定了 `float: right` 则可能导致视觉上主按钮在前，而 DOM 中主按钮靠后的情况。

示例：

```html
<!-- good -->
<style>
.buttons .button-group {
  float: right;
}
</style>

<div class="buttons">
  <div class="button-group">
    <button type="submit">提交</button>
    <button type="button">取消</button>
  </div>
</div>

<!-- bad -->
<style>
.buttons button {
  float: right;
}
</style>

<div class="buttons">
  <button type="button">取消</button>
  <button type="submit">提交</button>
</div>
```

#### 5.3.2 [建议] 当使用 JavaScript 进行表单提交时，如果条件允许，应使原生提交功能正常工作。

解释：

当浏览器 JS 运行错误或关闭 JS 时，提交功能将无法工作。如果正确指定了 `form` 元素的 `action` 属性和表单控件的 `name` 属性时，提交仍可继续进行。

示例：

```html
<form action="/login" method="post">
    <p><input name="username" type="text" placeholder="用户名"></p>
    <p><input name="password" type="password" placeholder="密码"></p>
</form>
```

#### 5.3.3 [建议] 在针对移动设备开发的页面时，根据内容类型指定输入框的 `type` 属性。

解释：

根据内容类型指定输入框类型，能获得能友好的输入体验。

示例：

```html
<input type="date">
```


## 6 <span id="user_6">模板中的 HTML</span>

在Node做服务端渲染的时候，常常会需要用到模版渲染。模版中的 `HTML` 要保持 `HTML` 文件的要求。如有逻辑嵌入(例如模块中的 `if-else`, `for`)， 保证和 `Vue` 格式一致即可。