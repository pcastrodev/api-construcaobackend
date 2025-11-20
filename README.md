🚀 API de Autenticação - Construção de Backend (ADS)
Este repositório contém a API desenvolvida na disciplina de Construção de Backend do curso de Análise e Desenvolvimento de Sistemas.

📋 Sobre o Projeto
A API aplica, na prática:

Node.js + Express

MongoDB Atlas + Mongoose

Autenticação com JWT (JSON Web Tokens)

Middlewares de segurança

Documentação com Swagger (OpenAPI)

Boas práticas de organização de código

📁 Estrutura do Projeto
src/
├── config/
│ └── database.js
├── controllers/
│ └── authController.js
├── middlewares/
│ └── requireAuth.js
├── models/
│ └── User.js
├── routes/
│ ├── authRoutes.js
│ └── index.js
├── app.js
└── server.js

⚙️ Pré-requisitos
Node.js 18+

NPM instalado

Conta no MongoDB Atlas

Arquivo .env configurado

🔐 Variáveis de Ambiente
Crie um arquivo .env na raiz do projeto:

PORT=3000
MONGO_URI=sua_string_de_conexao_mongodb_atlas
JWT_SECRET=um_segredo_forte_e_complexo
JWT_EXPIRES_IN=1h

📦 Instalação
Clone o projeto:
git clone https://github.com/SEU-USUARIO/SEU-REPO.git

Entre no diretório:
cd SEU-REPO

Instale as dependências:
npm install

▶️ Executando a API
Modo desenvolvimento:
npm run dev

Servidor rodará em:
http://localhost:3000

🌐 Endpoints da API
🔹 Health Check
GET /api/health

Resposta:
{
"status": "OK",
"timestamp": "2024-01-01T00:00:00.000Z"
}

🔹 Registro de Usuário
POST /api/auth/register

Body:
{
"name": "Pedro Castro",
"email": "pedro@example.com",
"password": "123456"
}

🔹 Login
POST /api/auth/login

Body:
{
"email": "pedro@example.com",
"password": "123456"
}

Resposta:
{
"user": {
"id": "123",
"name": "Pedro Castro",
"email": "pedro@example.com"
},
"token": "jwt_token_aqui"
}

🔹 Rota Protegida (Usuário logado)
GET /api/auth/me

Headers:
Authorization: Bearer SEU_TOKEN_AQUI

📚 Documentação Swagger
A documentação interativa da API está disponível em:
http://localhost:3000/api-docs

🧾 Scripts NPM
npm run dev - Inicia o servidor em modo desenvolvimento

npm start - Inicia o servidor em produção

npm run lint - Executa análise estática do código

npm run format - Formata o código automaticamente

👥 Autores
Pedro Castro – @pcastrodev

Gabriel Gomes – @GabrielGomesAL