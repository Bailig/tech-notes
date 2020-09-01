# Critical render path

a simple example

1. the **client** request a url
1. the **server** return a html document
1. the **browser** parses the html, it incrementally generates this tree model of the html tags, the dom.
1. encounter a style link, request css
1. continue creating dom
1. once the css is downloaded, the **browser** starts to create the css object module, cssom
1. in html, encounter a script link, request the js file
1. start to read the js file, and then execute to js code (js might act on the dom or cssom)

1. once it's all done the **browser** combines the dom and cssom into a render tree
1. the **browser** use the render tree to figure the layout (e.g. position, width, height etc.)
1. and then paint all the pixels

browser will start downloading the **image** as soon as it sees it, and it'll be downloaded in the background
