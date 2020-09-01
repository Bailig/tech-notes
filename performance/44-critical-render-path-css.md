# Critical render path

## CSS

css is render blocking because, in order to construct the rendered tree,
we need to wait for the cssom to complete and combine it with the dom to create the render tree.

css's render-blocking will not block dom construction, it only blocks the content from rendering until cssom is ready.

to improve the performance

- in html, load style tag in the head

- in css, only load whatever is needed
  - above the fold loading
  - media attributes
  - less specificity
  - ? style tag and inline style in html has better performance but hard to maintain

### Above the fold loading

load css for only what user can see, above the fold. load the rest after page load.

```html
<head>
  <link rel="stylesheet" href="./above-fold.css" />
</head>
```

```javascript
const loadStylesheet = (href) => {
  if (document.createStyleSheet) {
    document.createStyleSheet(href);
  } else {
    const styleSheet = document.createElement("link");
    styleSheet.rel = "stylesheet";
    styleSheet.href = href;
    document.getElementsByTagName("head")[0].appendChild(styleSheet);
  }
};
window.addEventListener("load", () => loadStylesheet("./below-fold.css"));
```

### Media attributes

by adding media attributes, the stylesheet won't need to be fully loaded before the dom content loaded.

```html
<link
  rel="stylesheet"
  href="./only-small.css"
  media="only screen and (max-width: 768px)"
/>
```

### Less specificity

if the specificity is long and completed, browser will need to do more work when creating cssom.

```css
/* bad */
header nav div link.home {
}

/* good */
.home {
}
```
