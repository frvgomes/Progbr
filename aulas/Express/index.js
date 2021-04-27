const express = require('express') ;
const app = express();
const path = require('path');
const port = 5000;

app.use("/meusite",express.static(path.join(__dirname, 'client')));

app.get("/", (req, res) =>{

  res.send("<h1>Hello Wolrd from GET</h1>")
})

app.listen(port, ()=>{
  console.log(`Server running on port:${port}`);
})


