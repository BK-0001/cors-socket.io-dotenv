import cors from "cors";
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { ENV, HOST, PORT } from "./env";

const app = express();
const server = createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

io.on("connect", (socket) => {
  console.log(`client with id: ${socket.id} `);

  socket.on("message", (message, roomId) => {
    socket.broadcast.to(roomId).emit("message", message);
  });

  socket.on("join-room", (roomId, ...args) => {
    socket.join(roomId);
  });

  socket.on("disconnect", () => {
    console.log(`${socket.id} is disconnected`);
  });
});

app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

server.listen(PORT, () => {
  console.log(`listening at http://${HOST}:${PORT} on ${ENV} mode`);
});
