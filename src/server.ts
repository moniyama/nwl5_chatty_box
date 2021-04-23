import express from "express";
// import "reflect-metadata";
import "./database"
import { routes } from "./routes"
import { createServer } from "http";
import { Server, Socket } from "socket.io";

const PORT = 3333
const app = express();
app.use(express.json())

const httpServer = createServer(app)
const io = new Server(httpServer);

io.on("connection", (socket: Socket) => {
  // ...
});

io.listen(3000);

app.use(routes)

httpServer.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
