const net = require("net");
const server = net.createServer((socket) => {
  socket.on("data", (data) => {
    socket.write(data + "1");
  });
});
server.listen(8888);
