# Caching

## HTTP cache

1. client send a GET request
1. server respond with some data with the header with following
   ```
   Cache-Control: max-age=120
   ETag: "qdq32rqd3"
   ```
1. `Cache-Control: max-age=120` means cache for 120 millisecond
1. `ETag: "qdq32rqd3"` is a hash that indicates whether or not the requested content is changed
1. when next time the client make the same request, server will compare the hash in ETag
   - if content is the same, server will return 304 to tell the client to use the cache
   - if the content is updated, server will return 200 with a new ETag for the updated content
