import express from "express";
// import "reflect-metadata";
import "./database"

const app = express();

const PORT = 3333

app.get("/", (req, res) => {
  return res.json({
    message: "Olá NWL5"
  })
})

app.post("/", (req, res) => {
  return res.json({
    message: "Usuário salvo com sucesso!"
  })
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
