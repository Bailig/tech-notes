# Critical render path

## HTML

in html, load the css as soon as possible and load scripts as late as possible with a few exceptions (e.g. google analytics)

js requires html and css parsing to finish before it can run

if you put javascript in the head tag in html, it'll block page rendering.

scripts historically blocked additional resources from being downloaded more quickly.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>

    <script>
      // render blocking and parser blocking
      // from browser network tab, we can see the style sheet is pending
      // the css request will be stalled
      alert("click");
    </script>

    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <h1>Hi</h1>
    <script>
      // from browser network tab, we can see the stylesheet is already requested
      alert("click");
    </script>
  </body>
</html>
```
