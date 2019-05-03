# Day5-Mar-3

## element

* link
  * favicon
  
    * ```html <link rel="icon" href="#">```

调整浏览器内核

```html
<meta name="X-UA-Compible" content="IE=Edge">
```

## meta info

---

* meta
  * http-equiv="refresh"

* base
  * link 与 base 的位置关系

* h1
  * SEO search engine optimization 搜索引擎优化
    * meta name="keyword"/"description"
    * 被引用次数(反向链接)

* p
* a
  * anchor
  * href hyperlink reference
  * 页面内跳转 :target
  * 邮件 href="mailto:XXXX@hotmail.com"
  * target
    * eg "shopping" 多个链接target值相同会进行覆盖
  * download
    * href 指向下载链接
    * download="filename" 表示下载的文件名

* node http-server 文件修改时更新
* img image
  * `<img srcset="a.jpg 1x, b.jpg 2x, c.jpg 3x>`
  * alt alter

## Source Control

git

* git commit -> 进入文本编辑器, 提示输入提交信息

* git commit -a -m "message" 自動add當前folder所有文件並提交

* git push 本地倉庫與遠程倉庫的狀態分別