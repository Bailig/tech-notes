# Nginx

```nginx
worker_processes: 1;

events {
  worker_connections 1024;
}

http {
  <!-- group of servers -->
  upstream app1 {
    server web1: 3000;
    server web2: 3000;
    server web3: 3000;
  }

  <!-- load balance -->
  server {
    listen: 80;
    location / {
      proxy_pass http://app1
    }
  }

  <!-- cache  -->
  location ~* \.(css|js|gif|jpg|png)$ {
    expiries 168h
  }
}
```

to test the load balancing

```shell
npm install -g loadtest
loadtest -t 5 -c 100 --rps 100 http://localhost:80
```

- -t timelimit
- -c concurrency: client count
- --rps requests per second
