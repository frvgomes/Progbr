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