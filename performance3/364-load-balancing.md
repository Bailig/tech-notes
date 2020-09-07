# Load balance

1. client send request
1. nginx receive the request
1. nginx balance the load between servers depends on whichever server is the least busy
1. the server respond to nginx
1. nginx might cache files
1. nginx respond to the client
