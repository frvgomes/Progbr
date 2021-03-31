
let imagem = document.getElementById("ok");
imagem.addEventListener("click", function(){
  imagem.setAttribute("src","./round_thumb_down_black_18dp.png");
})
//==============================================================================
let lista = document.getElementById("lista");
let num = parseInt(lista.dataset.num);
let conteudo = "";
for (let i = 1; i <= num; i++){
  conteudo += "<li>" + i + "</li>";
}
lista.innerHTML = conteudo;
//==============================================================================
let video = document.getElementById("video1");

function retroceder(){

}
function avancar(){
  
}
function play(){
  alert("chamou o play");
  
}
function stop(){
  video.pause();
  video.currentTime=0;
  
}
function diminuir_vel(){
  
}function aumentar_vel(){
  
}