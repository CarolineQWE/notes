const http = require("http");
const fs = require("fs");
const axios = require("axios");
http
  .createServer((req, res) => {
    getTitles(res);
  })
  .listen(8000, "127.0.0.1");

function getTitles(res) {
  fs.readFile("./titles.json", (err, data) => {
    if (err) {
      handleError(err, res);
    }
    getTemplate(data, res);
  });
}

function getTemplate(data, res) {
  const titles = JSON.parse(data.toString());
  fs.readFile("./template.html", (err, data) => {
    if (err) {
      handleError(err, res);
    }
    const tmpl = data.toString();
    const html = tmpl.replace("%", titles.join("</li><li>"));
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  });
}

function handleError(err, res) {
  console.error(err);
  res.end("Server Error");
}

var obj;
async function getdata() {
  await axios
    .get(
      `http://172.23.20.137:9000/api/flexible-platform/web/ylt/salary/getGrscjysdInfo?xctjId=${"918498014232973313"}&qyId=${"918074385301114880"}`
    )
    .then((res) => {
      obj = 1;
      console.log(res.data, "res");
    })
    .catch((e) => {
      console.error(e);
    });

  console.log(obj, "obj");
}

getdata();
