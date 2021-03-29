var nome =["Igor", "Jose","Maria"];
var notasA =[7.0, 6.5, 9.5];
var notasB =[8.0, 7.0, 8.5];

function media(n1, n2){
  return (n1 + n2) / 2
}
function status(media){
  if (media > 7){
    return "Aprovado"
  } else {
    return "Reprovado"
  }

}

for (var index in nome){

  var aluno = nome[index]
  var nota1 = notasA[index]
  var nota2 = notasB[index]
  var m     = media(nota1, nota2)

  console.log(aluno + 
            " | 1º Nota - " +nota1+
            " | 2º Nota - " +nota2+
            " | Média   - " +m+
            " | " + status(m));

}

var d = new Date()
console.log(d) // pegamos aqui data completa

