const mongoose = require('mongoose');

async function connectDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Conectado ao MongoDB Atlas");
  } catch (error) {
    console.log("Erro ao conectar no MongoDB:", error);
    process.exit(1);
  }
}

module.exports = connectDatabase;
