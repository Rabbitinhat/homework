# Transforms Transitions Animation

## 2D Transform

viewport coordinate system : 视口坐标系统 根据相对于viewport中的位置来描述viewport中元素位置

2D transform 改变元素的坐标位置

元素的整个坐标系统都会被旋转, 包括外边距等都会改变位置. 旋转后的元素不会影响其他元素(?); 在布局中和未旋转时相同

`transform-origin: x, y, z;` 改变转换的原点(默认是center top/bottom/left/right/数值/百分数);
`transform-origin: top/bottom left/right;` y x
`transform-origin: left/right 2em;` x y

`transform: translate(100%, 0);` 沿x轴, y轴平移; 百分比相对于元素自身大小
`translateX()/translateY()`

`counter-reset: rulecount 2` 将当前元素的计数器初始重置为2

当想要在已有变换上添加新的变换效果, 必须重新书写原有的变换效果, 否则就会覆盖原有效果

`scale(2)/scale(2, 2)/scaleX(2)/scaleY(2)` 元素沿X轴和Y轴按比例缩放
`skew(15deg, 15deg)/skewX(15deg)/skewY(15deg)` 元素沿X轴和Y轴发生倾斜

### 矩阵变化 matrix

变换矩阵

matrix()可以计算变换矩阵的值, 得到和一系列`transform`相同的结果

### transfrom 性能

浏览器计算CSS时, 如果改变文本内容, 或盒子大小. 可能会触发CSS 重新渲染布局

由于transform改变的是坐标系统, 不影响布局. 通常浏览器都会调用GPU(图形处理器)来单独计算transform的效果. 性能较好.

### 注意事项

变换后的元素会创建自己的堆叠上下文

变换后的元素会创建出新的包含块(BFC?) 如果内部元素position为fixed, 则相对于当前变换元素定位

## Transition

当元素发生变换时, 告知浏览器变换要发生的时间
transition 会双向运行, 当状态还原时, 也会生效

> 用户界面组件的transition 时间多数都应在.3秒内完成

`transition-property: all; transition-duration: .15s`

`transtion` 简写时必须为每个变换属性单独添加变换时间

为一组属性变换添加相同的变化时间

```css
button {
  transition-property: transform, box-shadow;
  /* 统一添加时间 */
  transition-duration: .15s;
}
```

### 缓动 easing

调整transition在整个变换发生过程中的速度

`transition-timing-function: ease(默认)/linear/ease-in/ease-out/ease-in-out`

`cubic-bezier()` 传入参数定义三次贝塞尔函数

### 步进函数 Step

创建帧

`transition-timing-function: steps(6, start/end(默认 在每一步结束后改变属性));`

当`step-function` 未完成时, 状态还原(eg. 取消hover). `step`也会反向发生, 但同时也会有6步, 由于此时背景元素的位置(帧动画)要小于正常位置. 所以`step`步长相同就会导致错误(状态还原时, 每步的距离要短于正常步的距离)

`transition-delay:` 正值延迟transition变化, 负值则会跳过部分trastion变化

## KeyFrame-Animation

```css
@keyframes anima-name {
  from {
    /* 0% */
    /* 动画起点 变换, 时间函数 */
    /* transform: */
    /* animation-timing-function: */
  }

  20% {
    /* 同上 */
  }

  /* ... */
  to {
    /* 100% */

  }
}

element {
  animation-name: anima-name;
  animation-duration: 1.5s;/* 运行时间 */
  /* 延迟, 运行动画前的等待时间 */
  animation-delay: 1s;
  /* 动画执行次数 infinate */
  animation-iteration-count: 3;
  /* 动画计时函数, 设置整个动画序列的计时函数, 也可以在单个帧上设置 */
  animation-timing-function: linear;
  /* 缩写形式 animation: roll 1.5s 1s 3 linear;
    steps(3, start); 设置步长
    aniamtion-fill-mode: backwards 动画运行前/后对动画如何处理, 默认不会应用动画第一帧的属性, backwards 目标元素立即应用动画第一帧的属性, forward 动画结束后, 目标元素应用最后一帧的变换属性 both 目标元素同时应用正向和反向填充
  */
}
```

## 特效

`drop-shadow`

### Masking

`clip-path`

germany