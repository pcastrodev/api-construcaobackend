const Product = require('../models/Product');

module.exports = {
  // CREATE
  async create(req, res) {
    try {
      const { name, price, description } = req.body;

      const product = await Product.create({ name, price, description });

      return res.status(201).json(product);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  // READ ALL
  async getAll(req, res) {
    try {
      const products = await Product.find();
      return res.status(200).json(products);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  // READ BY ID
  async getById(req, res) {
    try {
      const product = await Product.findById(req.params.id);

      if (!product) {
        return res.status(404).json({ message: 'Produto não encontrado' });
      }

      return res.status(200).json(product);
    } catch (error) {
      return res.status(400).json({ message: 'ID inválido' });
    }
  },

  // UPDATE
  async update(req, res) {
    try {
      const { name, price, description } = req.body;

      const product = await Product.findByIdAndUpdate(
        req.params.id,
        { name, price, description },
        { new: true, runValidators: true }
      );

      if (!product) {
        return res.status(404).json({ message: 'Produto não encontrado' });
      }

      return res.status(200).json(product);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  // DELETE
  async remove(req, res) {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);

      if (!product) {
        return res.status(404).json({ message: 'Produto não encontrado' });
      }

      return res.status(200).json({ message: 'Produto removido com sucesso' });
    } catch (error) {
      return res.status(400).json({ message: 'ID inválido' });
    }
  }
};
