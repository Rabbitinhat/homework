# HTML-01

HTML(Hyper Text Markup language)

标签 Tag(open tag, close tag)

```html
<!-- shift + arrow选中 Ctrl+D选中同名 -->
<h1>This is a Big Title</h1>

<a href="https://www.google.com">Google</a>
```

a href(hyper reference) alternative 替补选项
img src(source)
其他标记语言(XML)

树形结构(root Tree Structure)(图论, 数据结构)

* 自相似(分形)

* 数学公式, DOM树, 书籍目录

标签嵌套: 元素种类不同(flow elements vs block-level elements)

## 标签 Tag

---

`<开始标签></闭合标签>`

自闭合标签 `<img />` self-closing tag

## 属性 attribute

---

attr-name="attr-value"

`<a tittle='ToolTip'>`

name 主要用于表单标签

comma type

* input typeindex(会给予不可交互元素焦点(存在点击效果))
* data- 自定义attr
* contenteditable (HTML5) 可编辑属性

## HTML实体 entitiy

---

实体|符号
:--|--
`&copy`|&copy;
`&lt;`|&lt;
`&gt;`|&gt;
`&amp;`|&amp;
`&apos`|&apos;
`&nbsp;`|&nbsp;
`&#32;`|&#32;

space 空格 160 & 32 &nbsp; &#160; &#32;

## HTML 忽略空白

`<span>TestOne </span>` 空白不会忽略
`<span> TestTwo</span>` 空白会被忽略