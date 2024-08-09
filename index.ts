import cors from "cors";
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

io.on("connect", (socket) => {
  console.log(`client with id: ${socket.id} `);

  socket.on("message", (...args) => {
    socket.broadcast.emit("message", ...args);
  });

  socket.on("disconnect", () => {
    console.log(`${socket.id} is disconnected`);
  });
});

app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

server.listen(8000, () => {
  console.log(`listening at http://localhost:8000`);
});
