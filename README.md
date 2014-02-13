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

If you need server variables support you must define them
```
var ssi = require('simple-ssi', {
    'HTTP_HOST': 'mydomain.com',
    'DATE_LOCAL': '11:11'
});
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
**Server varaibles**
```
<!--#echo var="VAR" -->
```
To include a variable name into the file, variables names are defined when SSI is initialized. Setting variables is not supported.