# Critical render path

## Javascript

js is parser blocking, and can access and change both dom and cssom.

1. once a script tag in the html is discovered the dom construction is paused and the script is requested from the server.

1. once the script is loaded and parsed, parser will move on and construct rest of the dom. note that the js can't be executed before all the css is fetched as well and the cssom is constructed.

1. after the cssom is constructed, js is executed. js may access the dom and the cssom and may alter it.

browser will do the above for every script tag.

after all these are done, browser will create render tree, layout, and then paint
