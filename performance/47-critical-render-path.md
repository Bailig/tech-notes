# Critical render path

once the DOM content is loaded (DOMContentLoaded event)

1. build the render tree
1. figure out the positioning and layout
1. paint the pixels

once the UI is panted (load event), we have js listening on events

1. js change stuff on the page
1. redraw the render tree, and repeat layout and paint

## Extra resource

speed/performance test

- [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)
- [WebPageTest](https://www.webpagetest.org/)
