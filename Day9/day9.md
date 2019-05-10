# Day9

## color

色彩空间

CMYK
RGB
hsl

## unit

绝对长度单位

* mm, cm, in ...
  * print时比较有效
* -moz-mm
相对长度单位
* px
* em
  * HTML 默认字号大小 16px
* rem
* vh/vw
  * viewport 视口 包含滚动条宽度

## url

@import a.css

## keyword

inherit transparent normal
特定属性接受特定值

`\n`

content

## 字体 Font

### 字体族

font-family:

serif 衬线字体

sans-serif 非衬线字体

monospace 等宽字体



font-family: "Sunsum", "Microsoft YaHei, sans-serif;

'' & "" 可互换

### font-weight

normal thing bold 800 700 900

### font-size

会被继承, 继承**计算**后的结果, 而非CSS样式的指定

* px

* 百分比 120% 1.2em 值被继承时, 子元素的值会有影响

### font-