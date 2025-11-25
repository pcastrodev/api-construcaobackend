const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'O nome do produto é obrigatório'],
      trim: true,
      minlength: [3, 'O nome deve ter no mínimo 3 caracteres']
    },
    price: {
      type: Number,
      required: [true, 'O preço é obrigatório'],
      min: [0, 'O preço não pode ser negativo']
    },
    description: {
      type: String,
      default: ''
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', ProductSchema);
