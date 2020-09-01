# Critical render path

## Javascript

js is parser blocking, and can access and change both dom and cssom.

1. once a script tag in the html is discovered the dom construction is paused and the script is requested from the server.
1. after the script is loaded, it can't be executed until the css above is fetched, as well as the cssom is constructed.
1. after the cssom is constructed, js is executed. js may access the dom and the cssom and may alter it.

browser will do the above for every script tag.

after all these are done, the browser will create render tree, layout, and then paint

to optimize

- load scripts asynchronously
- differ loading of scripts
- minimize dom manipulation
- avoid long running js
