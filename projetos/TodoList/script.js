var _tarefas = [];

onload = updTela();


function GetId() {
  var timestamp = new Date();
  var id = timestamp.getHours().toString() +
    timestamp.getMinutes().toString() +
    timestamp.getSeconds().toString() +
    timestamp.getMilliseconds().toString();
  return id;
}

function updTela() {
  var list = "<ul>";

  _tarefas.forEach(lista => { 
    list += "<li id=" + lista.id + ">" + lista.data.desc + "</li>";
    list += "<button class='btn' onclick=deleteList(this) id-data="+lista.id + ">Apagar</button>"});
    list += "</ul";
  document.getElementById("lista").innerHTML = list;
  document.getElementById("edtTarefa").value = "";
}

function addTodo() {
  var _edtTarefa = document.getElementById("edtTarefa").value;
  var _tarefa = {id: GetId(), data: {desc: _edtTarefa}};
  _tarefas.push(_tarefa);
  updTela();
}

function deleteList(element) {

  _tarefas = _tarefas.filter(task => task.id != element.getAttribute("id-data"));

  console.log(element.getAttribute("id-data"));
  updTela();
}

  // json.strinify converte um json em uma string
  // json.parse converte uma string em um json



  //document.getElementById("memoria").innerText = ("...")

  //localStorage.clear();//




