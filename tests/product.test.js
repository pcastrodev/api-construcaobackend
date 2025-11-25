const request = require("supertest");
const app = require("../src/app");
const mongoose = require("mongoose");
const Product = require("../src/models/Product");

let token;

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);

  await request(app).post("/api/auth/register").send({
    name: "Test User",
    email: "test@test.com",
    password: "123456"
  });

  const res = await request(app).post("/api/auth/login").send({
    email: "test@test.com",
    password: "123456"
  });

  token = res.body.token;
});

// Após os testes, limpar collection
afterAll(async () => {
  await Product.deleteMany({});
  await mongoose.connection.close();
});

// Teste de criação de produto
test("Deve criar um produto com sucesso", async () => {
  const res = await request(app)
    .post("/api/product")
    .set("Authorization", `Bearer ${token}`)
    .send({
      name: "Mouse Gamer",
      price: 150,
      description: "RGB e 6 botões"
    });

  expect(res.status).toBe(201);
  expect(res.body.name).toBe("Mouse Gamer");
});


test("Não deve criar produto com nome vazio", async () => {
  const res = await request(app)
    .post("/api/product")
    .set("Authorization", `Bearer ${token}`)
    .send({
      name: "",
      price: 99,
      description: "Teste"
    });

  expect(res.status).toBe(400);
});

// Teste de listagem
test("Deve listar produtos", async () => {
  const res = await request(app)
    .get("/api/product");

  expect(res.status).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
});


