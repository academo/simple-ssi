//general requires

var connect = require('connect'),
    http = require('http');
    ssi = require('../index'),
    request = require('supertest');


//server settings
var app = connect()
    .use(ssi('test/files'))
    .use(connect.logger('dev'))
    .use(connect.static('test/files'));


describe('relative server side includes', function () {
    it('server works', function (done) {
        request(app)
        .get('/')
        .expect(200, done);
    });
    it('It returns html', function(done){
        request(app)
        .get('/')
        .expect(function(res){
            if(res.text.indexOf('includedfile') == -1){
                return 'Relative file was not included';
            }
        })
        .end(done);
    });
});

describe('server side variables', function () {
    it('HTTP_HOST', function(done){
        request(app)
        .get('/')
        .expect(function(res){
             if(res.text.indexOf('http://127.0.0.1:') == -1){
                return 'Host variable not present';
            }
        })
        .end(done);
    });
});