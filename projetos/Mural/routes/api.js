
const express = require('express');
const router = express.Router();
const cors = require('cors');
const posts = require('../model/posts');
const options = {
  origin: "http://programadorbr.com"
}
router.use(cors(options));

router.get("/all", (req, res) => {res.json(posts.getAll());
})

router.post("/new", express.json(), (req, res) => {
  let title = req.body.title;
  let descri = req.body.descri;
  posts.newPost(title, descri);

  res.send("Registro salvo com sucesso.")
})

router.delete("/delete", express.json(), (req, res) => {
  posts.deletePost(req.body.id);
  res.send("Registro Deletado ");
}) 

module.exports = router;