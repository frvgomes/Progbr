var _qtdAdu = document.getElementById("edtAdult");
var _qtdCri = document.getElementById("edtCrian");
var _qtdDur = document.getElementById("edtDurac");
var _result = document.getElementById("resultado");

function calcular(){
 _result.innerHTML = "<p>  Calculando...</p>";
 
 let _totalCarne = ((_qtdCri.value * 0.5) + parseInt(_qtdAdu.value)) * carnepp(_qtdDur.value);
 let _totalCerva = (cervapp(_qtdDur.value) * _qtdAdu.value);
 let _totalRefri = (refripp(_qtdDur.value) * _qtdAdu.value );
  
 _result.innerHTML =  `<p> ${_totalCarne / 1000} kg de Carne</p>`;
 _result.innerHTML += `<p> ${_totalCerva} latas de breja</p>`;
 _result.innerHTML += `<p> ${_totalRefri} Refrigerantes</p>`;
}

function carnepp(durac){
  if (durac >= 6){
    return 500;
  } else {
    return 300;
  }
}
function cervapp(durac){
  if (durac >= 6){
    return 24;
  } else {
    return 12;
  }
}function refripp(durac){
  if (durac >= 6){
    return 2;
  } else {
    return  1;
  }
}