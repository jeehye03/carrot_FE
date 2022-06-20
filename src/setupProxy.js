const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {

  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://54.180.121.151',
      changeOrigin: true,
    })
  );
  
  // app.use(
  //   '/user',
  //   createProxyMiddleware({
  //     target: 'http://54.180.121.151',
  //     changeOrigin: true,
  //   })
  // );
  
};