const app = require('./app');
const connectDatabase = require('./config/database');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

connectDatabase();

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
