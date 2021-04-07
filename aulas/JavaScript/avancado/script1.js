// Window
// Window.console.log();

// Document
// Document é a própria página HTML. 

// DOM - Document Object Model
// document.body.innerHTML me retorna o conteudo html em uma String
// posso atribuir valor para essa propriedade
// document.body.innerHTML = "<h1>Novo Texto</h1>"+document.body.innerHTML

// Exemplo de estrutura do DOM
// document -> element:html -> element:body -> element:h1 -> Text:"meu texto"

// Para acessar os elementos mais profundos que body, head ou body deve-se usar o getElementById

// Para acessar e/ou modificar um texto de um elemento:
// innerHTML acessar uma tag html
// innerText acessar um texto que é exibido na tela
// textContent acessar um texto contido no elemento

// Para acesar um atributo:
// getAttribute para acessar ( pode ser usado para criar um novo atributo Ex: setAttribute("novoatt", "conteudo"))
// setAttribute para atribuir

Eventos


function fala (){
  console.log(this.sound);
}
let dog = {
  sound: "au au au",
  speak: fala
}
let cat = {
  sound: "miauuuuu",
  speak: fala
}
dog.speak();
cat.speak();
// uma forma de usar funçção blindada
let bindedFunction = fala.bind(dog);
bindedFunction();
// //=============================================
// // Função Tradicional
// function dobro(){ }
// // Função Anônima
// let x = function (){ }
// //Arrow Functions
// let x = () =>{ }
// ou
let dobro = x => (2 * x);
console.log(dobro(2));