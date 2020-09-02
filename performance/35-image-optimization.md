# Image optimization

## Image format

- if you want transparency, PNG
- if you want animations, GIF
- if you want really colorful images, JPG
- if you want simple icons logos or illustrations, SVG

## Reduce size

- PNG: [TinyPNG](https://tinypng.com/)
- JPG: [JPEG optimizer](http://jpeg-optimizer.com/)

## Simple rules

- pick illustrations over photos
- lower jpeg quality (30% - 60%)
- resize image based on the size it will be displayed
- use media query to display different sized images for different sized screens

```css
@media screen and (max-width: 768px) {
  body {
    /* the image will only be requested for this screen size */
    background: url("./small-background.jpg");
  }
}
```

- CDNs like [imgix](https://www.imgix.com/)
- remove image metadata http://www.verexif.com/en/
