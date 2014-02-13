module.exports = function(dir) {
    var tamper = require('tamper'),
    path = require('path'),
    fs = require('fs'),
    rootDir = dir;
    return tamper(function(req, res) {
        if (req.url != "/" && !req.url.match(/\.html$/)) {
            return;
        }
        return function(body) {
            var matches,
                file,
                include;

            matches = body.match(/<!-- #include file=\".+\" -->/g);
            if (!matches) {
                return body;
            }

            for (include in matches) {
                include = matches[include];
                file = path.join(rootDir, path.dirname(req.originalUrl), include.match(/<!-- #include file=\"(.+)\" -->/)[1]);


                if (fs.existsSync(file)) {
                    var content = fs.readFileSync(file, 'utf8');
                    body = body.replace(include, content);
                }else{
                    console.log('SSI Error: ' + file + ' does not exist');
                }
            }
            return body;
        }
    });
}