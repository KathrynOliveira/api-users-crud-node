const fs = require("fs");
const path = require("path");

//Criar uma pasta
// fs.mkdir(path.join(__dirname, "/test"), (error) => {
//   if (error) {
//     return console.log("Error:", error);
//   }

//   console.log("Pasta criada com sucesso");
// });

// Criar arquivo
//Recebe 4 paramentros + o callback
// caminho    //pasta  // arquivo   // conteudo dentro do arquivo //funcao callback de error
// writeFile subtitui todo conteudo do arquivo
fs.writeFile(
  path.join(__dirname, "/test", "test.txt"),
  "Hello node!",
  (error) => {
    if (error) {
      console.log("Error:", error);
    }

    console.log("Arquivo criado com sucesso!");
  }
);

// Adicionar conteudo a um arquivo
fs.appendFile(
  path.join(__dirname, "/test", "test.txt"),
  "Hello world!",
  (error) => {
    if (error) {
      return console.log("Error:", error);
    }

    console.log("Arquivo modificado com sucesso!");
  }
);

// Ler arquivo
fs.readFile(
  path.join(__dirname, "/test", "test.txt"),
  "utf-8",
  (error, data) => {
    if (error) {
      return console.log("Error:", error);
    }

    console.log(data);
  }
);
