# Access control

principle of least amount of privilege

- always give the least amount of access

## Cross origin resource sharing (cors)

buy adding [cors](https://www.npmjs.com/package/cors), everyone can access. it's not good.

use cors to give the least amount of access to make the app work.

add a whitelist of trusted domains to cors.

for example

```javascript
const whitelist = ["http://example1.com", "http://example2.com"];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
```
