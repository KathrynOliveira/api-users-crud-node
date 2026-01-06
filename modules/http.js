const http = require("http");

const port = 8080; // cria a porta para o servidor

//Cria servidor
// recebe dois parâmetros (request e response)
const server = http.createServer((req, res) => {
  if (req.url == "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Home page</h1>");
  }

  if (req.url == "/users") {
    const users = [
      {
        name: "John Doe",
        email: "john@doe.com",
      },
      {
        name: "Jane Doe",
        email: "jane@doe.com",
      },
    ];

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

// Deixa servidor online
server.listen(port, () => console.log(`Rodando na porta ${port}`));
