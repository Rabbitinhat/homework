# Note

## mobike

负外边距 实现圣杯布局

[swiper](https://idangero.us/swiper/) 滑动插件

## viewport

使用rem将设计图的具体尺寸转换为相对于100vw的数值 1rem = 100vw/设计稿尺寸

## flex

弹性布局

`display: flex/inline-flex;`
flex-container flex item(block?)

`flex-grow: 1(比例系数);` 控制容器元素剩余空间(? 如果子元素设置了宽度, 则先按照具体宽度分配)的分配; 多个元素同时声明时, 按比例分配
`flex-grow: .5(百分比)`
不会影响`max-width:`值

`flex-shrink: ` 当子元素总长度超出容器元素的长度时, 控制子元素进行收缩
<!-- NOTE  -->
`flex-shrink: 1;` 将超出部分的总长度按照子元素的长度比例进行分配, 从每个子元素中减去相应长度; 收缩时的权重 = 子元素宽度 * flex-shrink
不影响`min-width`

`flex-direction: row/row-reverse/column/column-reverse` 排列方向

`flex-basis: 200px` 分配基准空间(宽高)
`flex-stretch`

`flex-wrap` 换行, margin不发生重叠

主轴 main axis
交叉轴 cross axis

`justify-content: flex-start/space-between/` 主轴方向摆放
`align-content: ` 交叉轴方向b

`order` 元素顺序 数值越小, 越在主轴上向前排列