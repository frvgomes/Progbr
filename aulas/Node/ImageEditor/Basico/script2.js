let fs = require('fs'); // modulo para manutenção de arquivos

fs.writeFile('teste.txt', 'olá mundo', function(error){
  if(error) {throw error};
    console.log("Arquivo criado com sucesso.");
})