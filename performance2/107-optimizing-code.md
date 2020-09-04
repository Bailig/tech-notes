# Optimizing code

## Loading js

js is a big part of webpage loading, which you can see from the performance tab of chrome.

a typical js flow

1. request js
1. js arrives
1. compile, parse, and execute the js
1. js fetch data
1. data arrives
1. execute js

test your webpage at [WebPageTest](https://www.webpagetest.org/)

browsers do just in time compilation. angular can do ahead of time compilation, which is compile the code before shifting it.

## After load

to improve the performance limit the processing. primarily it means limiting animation.

## Keys

improve the

- time to first meaningful paint
- time to interactive
