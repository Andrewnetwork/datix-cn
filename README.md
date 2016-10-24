# INSTALLING

* be sure to fork it
* clone your fork
* cd into your clone
* run 'npm install'
   * 148 Mb install
* run 'npm run start-dev'

# NOTES

* click on menu item IP -> node-RED flow to navigate to nodes console

# INFO

proxying to another server

```javascript

 const _opencv_targetUrl = 'http://' +
   _opencv_config.apiHost + ':' +
   _opencv_config.apiPort;

 const _opencv_proxy = httpProxy.createProxyServer({
   target: targetUrl
 });

 /**
  * Proxy to API server
  */
 app.use('/plugin/opencv', (req, res) => {
   _opencv_proxy.web(req, res, {target: targetUrl});
 });

 /**
  * added the error handling to avoid
  * https://github.com/nodejitsu/node-http-proxy/issues/527
  */
 _opencv_proxy.on('error', (error, req, res) => {
   let json;
   if (error.code !== 'ECONNRESET') {
     console.error('proxy error', error);
   }
   if (!res.headersSent) {
     res.writeHead(500, {'content-type': 'application/json'});
   }

   json = {error: 'proxy_error', reason: error.message};
   res.end(JSON.stringify(json));
 });
```
