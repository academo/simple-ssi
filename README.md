Simple server side includes middleware for connect
===

This is a simple module to handle server side includes in static files. It could work with non-static files but It haven't tested yet.

Getting started
--

Install module
```
npm install simple-ssi
```
Include de module in your server file

```
var ssi = require('simple-ssi');
```

add it as a connect middleware before static, you need to pass the absolute path to static files

```
var app = connect()
    .use(ssi('test/files'))
    .use(connect.logger('dev'))
    .use(connect.static('test/files'));
```

Current working server side inlcudes
---
**Include file**
```
<!--#include file="" -->
```
Used to include a file with a relative path.