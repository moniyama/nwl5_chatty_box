import express from "express";
// import "reflect-metadata";
import "./database"
import { routes } from "./routes"
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import path from "path"

const app = express();
app.use(express.json())

app.use(express.static(path.join(__dirname, '..', 'public'))) // https://expressjs.com/en/starter/static-files.html
app.set("views", path.join(__dirname, '..', 'public')) // http://expressjs.com/en/5x/api.html#app.set
app.engine('html', require('ejs').renderFile)  // http://expressjs.com/en/5x/api.html#app.engine
app.set("view engine", "html")

app.get("/pages/client", (req, res) => {
  return res.render('html/client.html')
})
app.get("/pages/admin", (req, res) => {
  return res.render('html/admin.html')
})

const httpServer = createServer(app)
const io = new Server(httpServer);

io.on("connection", (socket: Socket) => { });

app.use(routes)

export { httpServer, io }