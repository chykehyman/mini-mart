const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/marketplace/blocks", {
      target: "https://api.up42.com",
      changeOrigin: true,
    })
  );
};
