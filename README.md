# API de Produtos – Construção de Back-end (ADS)

API RESTful desenvolvida em Node.js + Express para gerenciar a entidade **Produto**, 
como parte da disciplina de Construção de Back-end do curso de ADS.

## Tecnologias utilizadas

- Node.js
- Express
- MongoDB Atlas + Mongoose
- JWT (jsonwebtoken)
- bcrypt
- Jest + Supertest (testes)
- Swagger / OpenAPI (documentação)
- ESLint + Prettier

## Arquitetura do projeto

```txt
src/
  app.js
  server.js
  config/
    database.js
  models/
    Product.js
    User.js
  controllers/
    productController.js
    authController.js
  routes/
    productRoutes.js
    authRoutes.js
    index.js
tests/
  auth.test.js
  product.test.js
```

## Pré-requisitos
- Node.js 18+
- NPM instalado
- Conta no MongoDB Atlas
- Arquivo .env configurado

## Configuração do Ambiente
1. Clone o repositório:
- git clone https://github.com/pcastrodev/api-construcaobackend.git
- cd api-construcaobackend
2. Instale as dependências
- npm install
3. Crie o arquivo .env na raiz do projeto:
- PORT=3000
- MONGO_URI=coloque_sua_string_do_mongodb_atlas_aqui
- JWT_SECRET=umsegredoforteaqui123
- JWT_EXPIRES_IN=1h
4. Execute o projeto
- Modo desenvolvimento:
  - npm run dev
- Modo produção:
  - npm start
  
## Scripts disponíveis
- npm run dev     # inicia com nodemon
- npm start       # inicia em modo produção
- npm run lint    # análise de código com ESLint
- npm run format  # formata com Prettier
- npm test        # executa testes automatizados

## Endpoints da API
### Autenticação
- POST /api/auth/register
Registra um novo usuário.

Body (JSON)
{
  "name": "Seu Nome",
  "email": "email@example.com",
  "password": "senha123"
}

Respostas
  - 201 Created – Usuário criado com sucesso
  - 400 Bad Request – Dados ausentes/invalidos
  - 409 Conflict – Email já cadastrado

- POST /api/auth/login
Realiza o login e retorna um token JWT.

Body (JSON)
{
  "email": "email@example.com",
  "password": "senha123"
}

Respostas
  - 200 OK – Autenticado
  - 400 Bad Request
  - 401 Unauthorized

### Para acessar rotas protegidas
Enviar o header:
- Authorization: Bearer <seu_token_jwt>

## Produtos – CRUD Completo
- GET /api/products
Lista todos os produtos.
  - 200 OK

- GET /api/products/:id
Retorna um produto pelo ID.
  - 200 OK
  - 404 Not Found

- POST /api/products (protegido)
Cria um novo produto.

Body (JSON):
{
  "name": "Teclado Mecânico",
  "price": 299.9,
  "stock": 20
}

Respostas:
  - 201 Created
  - 400 Bad Request
  - 401 Unauthorized

- PUT /api/products/:id (protegido)
Atualiza um produto existente.
  - 200 OK
  - 400 Bad Request
  - 401 Unauthorized
  - 404 Not Found

- DELETE /api/products/:id (protegido)
Deleta um produto.
  - 204 No Content
  - 404 Not Found
  - 401 Unauthorized

## Documentação Swagger / OpenAPI
### A documentação completa está disponível em:
- http://localhost:3000/api-docs

## Testes Automatizados
### Para executar todos os testes:
- npm test

## Testes incluem:
- Registro e login de usuário
- CRUD da entidade Produto
- Validações e autenticação JWT

## Integrantes & Divisão de Tarefas
### Pedro Castro (@pcastrodev)

✔ Setup inicial

✔ ESLint + Prettier

✔ Configuração MongoDB Atlas e Mongoose

✔ Autenticação JWT

✔ Middleware requireAuth

✔ Swagger/OpenAPI

✔ README & documentação geral

### Gabriel Gomes (@GabrielGomesAL)

✔ CRUD completo da entidade Produto
✔ Validações de domínio
✔ Testes automatizados
✔ Documentação do CRUD no Swagger
✔ Revisão final do projeto

### Todas as tarefas, PRs e Issues podem ser consultadas no GitHub Projects do repositório.
