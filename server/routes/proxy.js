var req = require('request');
var express = require('express');
var router = express.Router();
var stream = process.stdout;

var proxy_url = 'http://api.indeed.com/ads';

var indeedPublisherId = process.env.INDEED_PUB || null;
var debugLocalProxyValues = false;

if(!indeedPublisherId) { throw new Error("You need a valid publisherId!!"); }

router.route('/');

router.all('/*', proxyRequest);

function proxyRequest(request, response) {
  var config = proxy_url + request.url;

  var pathSetup = [
    'publisher=' + indeedPublisherId,
    'v=2',
    'format=json',
    'useragent=' + encodeURI(request.headers['user-agent']),
    'userip=' + request.ip,
    'highlight=false'
  ];

  config += '&' + pathSetup.join('&');

  var requestLog = [
    '\n',
    request.url,
    ':',
    proxy_url
  ];

  stream.write(requestLog.join(' '));
  request.pipe(req(config)).pipe(response);
}

module.exports = router;
