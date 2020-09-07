# Third party libraries

```shell
npm install -g nsp
nsp check # audit package.json

npm install -g snyk
snyk auth # login
snyk test # audit node_modules directory
```

from NPM version 6 or higher, npm has added security as a built-in feature when downloading packages. You will get notified of security vulnerabilities in the packages you install now.
