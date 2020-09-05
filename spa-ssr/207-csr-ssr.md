# Client side rendering (CSR) vs server side rendering (SSR)

## CSR

Topical CSR app

1. client request html
1. a bare bone html is returned
1. a js file, linked in the html, is requested
1. js arrive
1. js evaluated
1. page is loaded and become interactive
1. when user interact with the page, no js is requested any more

during the time from step one to page loaded, the webpage is blank

## SSR

1. client request html
1. server return a fully rendered html
1. page get rendered
1. js is being download and evaluated
1. page become interactive

once the html is returned from the server the page is render but it's not interactive until the js is evaluated
