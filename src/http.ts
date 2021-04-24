import express from "express";
// import "reflect-metadata";
import "./database"
import { routes } from "./routes"
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import path from "path"

const app = express();

// https://expressjs.com/en/starter/static-files.html
app.use(express.static(path.join(__dirname, '..', 'public')))

// //http://expressjs.com/en/5x/api.html#app.set
app.set("views", path.join(__dirname, '..', 'public'))

// //http://expressjs.com/en/5x/api.html#app.engine
app.engine('html', require('ejs').renderFile)

app.set("view engine", "html")

app.get("/pages/client", (req, res) => {
  return res.render('html/client.html')
})

const httpServer = createServer(app)
const io = new Server(httpServer);

io.on("connection", (socket: Socket) => {
  // ...
  console.log('entrouu')
});

app.use(express.json())

app.use(routes)

export { httpServer, io }