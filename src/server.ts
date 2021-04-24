import express from "express";
// import "reflect-metadata";
import "./database"
import { routes } from "./routes"
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import path from "path"

const PORT = 3333
const app = express();

// https://expressjs.com/en/starter/static-files.html
app.use(express.static(path.join(__dirname, '..', 'public')))

// //http://expressjs.com/en/5x/api.html#app.set
app.set("views", path.join(__dirname, '..', 'public'))

// //http://expressjs.com/en/5x/api.html#app.engine
app.engine('html', require('ejs').renderFile)

app.set("view engine", "html")

app.get("/pages/client", (req, res) => {
  console.log('entrou')
  return res.render('html/client.html')
})

const httpServer = createServer(app)
const io = new Server(httpServer);

io.on("connection", (socket: Socket) => {
  // ...
});

app.use(express.json())

app.use(routes)

httpServer.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
