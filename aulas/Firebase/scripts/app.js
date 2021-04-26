const TURMA = "turmaA"

var firebaseConfig = {
  apiKey: "AIzaSyBYzsaUd2jBUfk7NJmCHZYHoNrbMR5-wtc",
  authDomain: "colegio-20bc5.firebaseapp.com",
  projectId: "colegio-20bc5",
  storageBucket: "colegio-20bc5.appspot.com",
  messagingSenderId: "242582882811",
  appId: "1:242582882811:web:673e3aabc1ad738f26235e",
  measurementId: "G-V4K3M493PQ"
};
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
let auth = firebase.auth();

function criarUsuario() {
  let newUserEmail = "novo@teste.com";
  let newUserPassword = "123456";

  auth.createUserWithEmailAndPassword(newUserEmail, newUserPassword)
    .then(user => {
      console.log(user);
    }).catch(error => {
      console.log(error);
    })
}

function login() {
  let userEmail = "novo@teste.com";
  let userPassword = "123456";


  auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(() => {
      auth.signInWithEmailAndPassword(userEmail, userPassword)
        .then(loggedUser => {
          console.log(auth.currentUser);
        }).catch(error => {
          console.log(error);
        })
    }).catch(error => {
      console.log(error);
    })
}
//login();

auth.onAuthStateChanged(user => {
  if (user) {
    console.log(user.email);
  } else {
    console.log("Não há usuarios logados;")
  }
})
function logout() {
  auth.signOut()
    .then(obj => {
      console.log(obj);
    }).catch(error => {
      console.log(error);
    })
}
setTimeout(logout, 2000);

// db.collection("turmaA").get().then((snapshot)=>{
//   snapshot.forEach((doc) => {
//     let aluno = doc.data();
//     console.log(aluno);
//   });
// });

// //Automaticamente fica verificando qualquer alterção no storage
//   db.collection("turmaA").onSnapshot((snapshot)=>{
//     snapshot.forEach((doc) => {
//       let aluno = doc.data();
//       console.log(aluno);
//     })
//   })

//Apagar campo
// db.collection(TURMA).doc("AlunoNovo").update({
//   cidades: firebase.firestore.FieldValue.delete()
//  }).then(()=>{
//     console.log("Documento atualizado com sucesso.");
//   }).catch(err => {
//     console.log(err);
//   })

//Apagar documento
// db.collection(TURMA).doc("AlunoNovo").delete().then(()=>{
//     console.log("Documento apagado com sucesso.");
//   }).catch(err => {
//     console.log(err);
//   })

// let docRef = db.collection("turmaA").doc("C8otELSUO0XSXaoSoFt1");
// docRef.get().then((doc) =>{
//   console.log(doc.data().nome);
// });

// db.collection("turmaA").where("nome", "<=", "Ped").get().then(snapshot =>{
//   snapshot.forEach((doc) =>{
//     let aluno = doc.data();
//     console.log(aluno.nome);
//   })
// })

// db.collection(TURMA).add({
//   nome:"Mauro",
//   sobrenome:"Junior",
//   notas:{nota1:6, nota2:7},
// }).then((doc)=>{
//   console.log("Documento inserido com sucesso.", doc);
// }).catch(err => {
//   console.log(err);
// })

// db.collection(TURMA).doc("AlunoNovo").set({
//   nome:"Mariana",
//   sobrenome:"Aquino",
//   notas:{nota1:9, nota2:7},
// }).then(()=>{
//     console.log("Documento inserido com sucesso.");
//   }).catch(err => {
//     console.log(err);
//   })
// db.collection(TURMA).doc("AlunoNovo").set({
//   sobrenome:"Aquino2",
// }, {merge: true} ).then(()=>{
//     console.log("Documento inserido com sucesso.");
//   }).catch(err => {
//     console.log(err);
//   })

// db.collection(TURMA).doc("AlunoNovo").update({
//   sobrenome:"Aquino",
// }).then(()=>{
//     console.log("Documento atualizado com sucesso.");
//   }).catch(err => {
//     console.log(err);
//   })

// db.collection(TURMA).doc("AlunoNovo").update({
//   "notas.nota1":10, //também pode criar novos campos assim
// }).then(()=>{
//     console.log("Documento atualizado com sucesso.");
//   }).catch(err => {
//     console.log(err);
//   })

// // adicionando valores em um array
//   db.collection(TURMA).doc("AlunoNovo").update({
//     cidades: firebase.firestore.FieldValue.arrayUnion("Belo Horizonte")
//    }).then(()=>{
//       console.log("Documento atualizado com sucesso.");
//     }).catch(err => {
//       console.log(err);
//     })

// // removendo valores em um array
// db.collection(TURMA).doc("AlunoNovo").update({
//   cidades: firebase.firestore.FieldValue.arrayRemove("Belo Horizonte")
//  }).then(()=>{
//     console.log("Documento atualizado com sucesso.");
//   }).catch(err => {
//     console.log(err);
//   })

// // incrementando valores
// db.collection(TURMA).doc("AlunoNovo").update({
//   "notas.nota2": firebase.firestore.FieldValue.increment(2)
//  }).then(()=>{
//     console.log("Documento atualizado com sucesso.");
//   }).catch(err => {
//     console.log(err);
//   })