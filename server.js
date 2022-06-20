const http = require("http");
http
  .createServer((req, res) => {
    getTitles(res);
  })
  .listen(8000, "127.0.0.1");
