# Critical render path

a simple example

1. the **client** request a url
1. the **server** return a HTML document
1. the **browser** parses the HTML, it incrementally generates this tree model of the HTML tags, the DOM.
1. encounter a style link, request CSS
1. continue creating DOM
1. once the CSS is downloaded, the **browser** starts to create the CSS object module, CSSOM
1. in HTML, encounter a script link, request the js file
1. start to read the js file, and then execute to js code (js might act on the DOM or CSSOM)

1. once it's all done the **browser** combines the DOM and CSSOM into a render tree
1. the **browser** use the render tree to figure the layout (e.g. position, width, height etc.)
1. and then paint all the pixels

browser will start downloading the **image** as soon as it sees it, and it'll be downloaded in the background
