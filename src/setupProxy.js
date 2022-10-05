const { createProxyMiddleware } = require('http-proxy-middleware');
 
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api1', {
      target: 'http://lb-user-service-1badeb93928a0302.elb.us-west-2.amazonaws.com:8082', // API endpoint 1
      changeOrigin: true,
      pathRewrite: {
        "^/api1": "",
      },
      headers: {
        Connection: "keep-alive"  
      }
    })
  );
  app.use(
    createProxyMiddleware('/api2', {
      target: 'http://tweet-service-network-469fca38d0a51032.elb.us-west-2.amazonaws.com:8083', // API endpoint 2
      changeOrigin: true,
      pathRewrite: {
        "^/api2": "",
      },
      headers: {
        Connection: "keep-alive"
      }
    })
  );
}