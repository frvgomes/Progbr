//garantir que primeiro a pagina esteja carregada
document.addEventListener('DOMContentLoaded',()=>{
  let squares = document.querySelectorAll(".square");
  let botao = document.getElementById("btn");
  squares.forEach((square)=>{
    square.addEventListener('click', handleClick);
  })
  botao.addEventListener('click', btnRecomecar);
})

function handleClick(event){
   if (handleMove(event.target.id)) {
    setTimeout(() => {
      mostraTelaVitoria(playerTime);
    }, 10); 
    setTimeout(() => {
      btnRecomecar();
    }, 10);    
  }
  updateSquare(event.target.id);
}

function updateSquare(position){
  let square = document.getElementById(position.toString());
  let symbol = board[position];
  square.innerHTML = `<div class='${symbol}'></div>`
}

function btnRecomecar() {
  iniciaVariaveis();
  squares = document.querySelectorAll(".square");
  squares.forEach((square) => {

      let position = square.id;
      let symbol = board[position];

      if (symbol == '') {
          square.innerHTML = `<div class=''></div>`;
      }
  });
}

function mostraTelaVitoria(posWin) {
  document.getElementById('modal').style.display = "block";
  addEmojiWinner(posWin);
  setTimeout(() => {
    document.getElementById('modal').style.display = "none";
  }, 2000); 
  

}

function addEmojiWinner(posWin) {
    let win = document.getElementById("winner");
    let symbol = board[posWin];
    if (symbol == 'o') {
        win.innerHTML = `<img class="circulo" src="./bola.png" alt="">`;
    } else if (symbol == 'x') {
        win.innerHTML = `<img class="xis" src="./xis.png" alt="">`;
    }
}