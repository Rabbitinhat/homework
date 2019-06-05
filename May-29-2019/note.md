# Note

## homework

使用vw设置宽高; 使其成比例.

```html
<!-- CSS像素为400px -->
<meta name="viewport" content="width=400px">
```

亚像素

rem vw

html {font-size: calc(100vw/视觉稿宽度)}; 将1rem和vw长度相关联; 由于chrome会重置小于12px的font-size; 所以通常会改动为 calc(100vw/width * 100); 同时视觉稿中的具体尺寸需要/100

viewport 仅被移动端浏览器支持; pc端渲染窗口大小减去额外浏览器自身元素
如果没有设置viewport 移动端浏览器会默认以980px的浏览器窗口渲染页面

viewport = width(px) 移动端browser以widthpx为初始包含块渲染页面
viewport = device-width 以出厂设置的宽度为初始包含块的宽度渲染(一般是360px)

移动端一般有两种情况

* 页面复杂, 希望

## 修改页面

DOM树中存在于浮动元素前面的元素, 当由于页面缩小而换行时, 不会移动到浮动元素后面

禁止换行 white-space: no-wrap

在Chrome的调试器中选中元素时, 会显示该元素的选择器; 可以用来查找祖先元素

position right 默认值 auto

media query

line-height 不影响基线
基线位置由字体和font-size决定

### mobike

成比例缩放的banner图

* img object-fit: cover;

* background-size: cover;

网站头部存在的较大图片区域: hero
hero image 主页横幅

<!-- hack book time line -->
<!-- time line of book, 网站, 应用 -->

min-width 要正序排列(大到小)
max-width 倒序排列(小到大)

当使用媒体查询改变布局时; 多个块元素排列时中间部分的空白无法很好的处理

[负外边距和overflow:hidden](https://jsbin.com/vetuyay/1/edit?html,css,output)

### question

```css
  .hero-promos {
    width: 100%;
    margin-left: -10px;
    margin-right: -10px;
    background-color: rgba(0, 0, 255, .5);
  }
```
过分受限, margin-right重置为auto(10px); margin-left为-10px; 但是控制台的计算结果仍然是-10px