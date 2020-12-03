浏览器解析的过程
1. 渲染进程请求html资源
2. 网络将请求html资源的request 发送到web服务器， 并且把接收到的数据返回给渲染进行
3. 渲染进程里面有一个html解析器，专门用来解析和处理接收到的html文件，并且负责构建dom
4. html 解析器会对整个的html资源做一个预解析
   4.1 当html解析器遇到script标签后，会暂停dom的构建， 去下载javaScript资源
   4.2 当html解析器遇到link标签后，也会暂停dom的构建，去下载css资源
5. 网络进程把接受到的css资源和javascript资源响应给渲染进程， 这两个请求是同时发出的，下载文件的过程是重叠的， 所以下载时间是按照最久的那个文件来计算。
6. css资源下载完成后，css解析器开始构建CSSOM
7. 等到CSSOM构建完成后V8才会去执行javascript
8. html继续构建dom
9. 构建布局树
10. 渲染

问题
1. 为什么 javascript能阻止构建dom？
   因为javascript可能要修改已经存在dom结构
2. 怎么减少javascript阻塞构建dom的时间？
   利用webpack压缩javascript的构建体积（uglify-webpack-plugin）
   把javascript放到cnd上，提高传输的速度
   对javascript脚本设置异步加载，听过async或者defer来标记
3. async 和 defer的不同
   async 标志的脚本是一旦加载完成就会立即执行
   `<script async type="text/javascript" src="foo"> </script>`
   defer 标记的脚本需要 DOMContentLoaded 之前执行
   `<script defer type="text/javascript" src="foo.js"></script>`

4. css 文件为什么会阻塞构建dom
    
    //theme.css
    div {color:blue}
   
   `
        <html>
            <head>
                <style src='theme.css'></style>
            </head>
        <body>
            <div>1</div>
            <script>
                    let div1 = document.getElementsByTagName('div')[0]
                    div1.innerText = 'time.geekbang' //需要DOM
                    div1.style.color = 'red'  //需要CSSOM
                </script>
            <div>test</div>
        </body>
        </html>
   `

   javascript也会操作CSSOM，例如  div1.style.color = 'red'，所以在执行javascript之前，需要先解析javascript上所有的css样式。所以如果代码里引用了外部的 CSS 文件，那么在执行 JavaScript 之前，还需要等待外部的 CSS 文件下载完成，并解析生成 CSSOM 对象之后，才能执行 JavaScript 脚本。

   而 JavaScript 引擎在解析 JavaScript 之前，是不知道 JavaScript 是否操纵了 CSSOM 的，所以渲染引擎在遇到 JavaScript 脚本时，不管该脚本是否操纵了 CSSOM，都会执行 CSS 文件下载，解析操作，再执行 JavaScript 脚本。