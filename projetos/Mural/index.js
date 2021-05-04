const PORT = 3000;
const express = require('express');
const posts = require('./model/posts');

const app = express();

app.get("/all", (req, res) => {
  res.json(posts.getAll());
})

app.post("/new", express.json(), (req, res) => {
  let title = req.body.title;
  let descri = req.body.descri;
  posts.newPost(title, descri);

  res.send("Registro salvo com sucesso.")
})

app.delete("/delete", express.json(), (req, res) => {
  posts.deletePost(req.body.id);
  res.send("Registro Deletado ");
}) 

app.listen(PORT, () => {
  console.log("Server running on port ", PORT);
})
