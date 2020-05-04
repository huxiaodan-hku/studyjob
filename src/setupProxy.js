const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(createProxyMiddleware('/api', {
    target: 'http://127.0.0.1:8080',
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      "^/api": "/api"
    }
  })),
  app.use(createProxyMiddleware('/oauth2', {
    target: 'http://127.0.0.1:8080',
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      "^/oauth2": "/oauth2"
    }
  }))
}
