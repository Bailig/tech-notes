# SSR React

a simple example in node

```javascript
import express from "express";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import App from "./App"; // the react app

const SOME_DATA = {};

const app = express();

app.use(express.static("/public"));

const ReactApp = createElement(App);

app.get("/", (_, res) => {
  res.render("index", {
    content: renderToString(ReactApp({ data: SOME_DATA })),
  });
});
```

- use `ReactDOMServer.renderToString()` or `ReactDOMServer.renderToNodeStream()` on server to render the initial html
- use `ReactDOM.hydrate()` on client to preserve the server side rendered content and attach the event listeners
