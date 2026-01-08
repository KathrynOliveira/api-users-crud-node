# 👤 CRUD API USUÁRIOS – Node.js & Express

API RESTful para gerenciamento de usuários, desenvolvida com Node.js e Express, seguindo boas práticas de organização, padronização de rotas e separação de responsabilidades.

## 📌 Funcionalidades

- ➕ Criar usuário
- 📄 Listar usuários
- 🔍 Buscar usuário por ID
- ✏️ Atualizar usuário
- 🗑️ Remover usuário
- ✅ Conexão com Banco de Dados
- 🌐 API REST com JSON

## 🚀 Tecnologias Utilizadas

- 🟢 Node.js
- ⚡ Express
- 🧠 JavaScript
- 🗄️ Banco de dados MongoDB
- 📦 dotenv
- 🧪 Nodemon (ambiente de desenvolvimento)

## ⚙️ Como Rodar o Projeto

1. Clone o repositório:
     ```bash
   git clone https://github.com/KathrynOliveira/api-users-crud-node.git

2. Acesse a pasta do projeto
     ```bash
     cd api-users-crud-node
3. Instale as dependências
    ```bash
    npm install

## 🔗 Endpoints
- ### Criar usuário - POST /users
  
 ```bash

{
  "name": "João Silva",
  "email": "joao@email.com",
  "password": 123456
}

```

- ### Listar usuários - GET /users
- ### Buscar usuário por ID - GET /users/:id
- ### Atualizar usuário - PUT /users/:id
  
  ```bash
  {
    "name": "João Atualizado",
    "email": "joao@email.com"
  }
  
  ```

- ### Remover usuário - DELETE /users/:id
  

## 👨‍💻 Desenvolvidor por

- [Kathryn Oliveira](https://github.com/KathrynOliveira)



