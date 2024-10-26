const express = require("express");
const path = require("path");

const app = express();

const expressWs = require("express-ws")(app);

const PORT = 3000;

app.ws("/chat/:room", (ws, req) => {
  setInterval(() => {
    ws.send(Math.random());
  }, 500);
});

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/chat/:room", (req, res) => {
  res.sendFile(path.join(__dirname, "./chat.html"));
});
app.listen(PORT, () => {
  console.log("Server started......");
});
