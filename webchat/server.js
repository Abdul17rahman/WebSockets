const express = require("express");
const path = require("path");
const http = require("http");
const { Server } = require("socket.io");

const app = express();

const server = http.createServer(app);

const io = new Server(server);

app.use(express.static(path.join(__dirname, "public")));

// On- listens for the event
// emit - sends an event
io.on("connection", (socket) => {
  console.log("User connected");
  socket.emit("welcome", "Agent connected");
  socket.on("sendMsg", (msg) => {
    socket.broadcast.emit("receiveMsg", msg);
  });
});

server.listen(3000, () => {
  console.log("Server started");
});
