const express = require("express");
const { createServer } = require("node:http");
const { join } = require("node:path");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = createServer(app);
const io = new Server(server);
app.use(cors());

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
    socket.emit("message", msg);
  });
});

server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
