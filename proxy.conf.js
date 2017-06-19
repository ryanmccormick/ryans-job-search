/*
* Angular Development Server Proxy
* */

// Add your indeed publisher URL to your environment
// to avoid checking into your repository
var indeedPublisherId = process.env.INDEED_PUB || null;
var debugLocalProxyValues = false;

if(!indeedPublisherId) { throw new Error("You need a valid publisherId!!"); }

var proxySettings = {
  "/ads/apisearch": {
    target: "http://api.indeed.com",
    pathRewrite: function(path, req) {
      const pathSetup = [
        'publisher=' + indeedPublisherId,
        'v=2',
        'format=json',
        'useragent=' + req.headers['user-agent'],
        'userip=' + req.ip,
        'highlight=false'
      ];

      if(debugLocalProxyValues) {
        const sampleSearchParams = ['q=engineer','l=55415'];
        const sampleQuery = sampleSearchParams.concat(pathSetup);
        console.log(sampleQuery.join('\n'));
        path = path + '?' + sampleQuery.join('&');
      } else {
        path = path + '&' + pathSetup.join('&');
      }

      return path;
    }

  }
};

module.exports = proxySettings;
