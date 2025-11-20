const express = require('express');
const cors = require('cors');
const routes = require('./routes');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json()); 

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

app.use('/api', routes);

module.exports = app;
