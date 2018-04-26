module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      "/auth": { target: "http://localhost:8000" }
    }
  }
};
