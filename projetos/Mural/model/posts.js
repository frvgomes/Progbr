module.exports = {
  posts: [
    {
      id: "23265656",
      title: "Titulo - Teste Mural",
      descri: "Descrição - teste mural com nodemon"
    },
  ],
  getAll(){
    return this.posts;
  },
  newPost(title, descri){
    this.posts.push({id:newId(), title, descri});
  },
  deletePost(id){
    var array = require("./posts").posts;
    for (let i=0; i < array.length; i++){
      if (array[i].id == id){
        array.splice(i,1)
      }
    }
  }
}

function newId(){
  return Date.now();
}