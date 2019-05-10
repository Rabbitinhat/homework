# Day6

## Git review

文件改动, 服务器自动刷新

github 密钥 SSH key

git remote set-url origin `<remote origin url>`

显示`<remote origin url>`
git remote -v

git push -u origin master(绑定remote origin)

## new element

* br break new line
* hr harizitial 水平分割线
* font/blink/marquee
  * deprecated 不推荐使用
  * obsolete 已废弃
* em emphasis
* b bold
* i italic 也q常用于font-icon
* u underline
* pre

## list

说明列表

* dl
  * dd
  * dt

identifier 标识符 不要用数字

**emmet** 快速输出html(语法类似CSS selector)

可访问性 accessibility internationalizition

* 不同设备 特殊人群

* aria
  * role 提示browser 当前元素是什么视觉元素
  * aria-xxx = "yyy" 提示browser当前视觉元素的状态或其他信息

## 表单标签

input tpye="checkbox"

* name, value 必须

input type="raido"

* name 分组

`<label for="inputId">`

file

accept="MIME-Type"

媒体类型

`Multipurpose Internet Mail Extensions`

* image/* image/jpg video/webm ...

hidden

* name="csrf-token"

input tpye="image" 图片按钮

## attr

autofocus

select

* 可以通过hidden隐藏`<option>`
* optgroup