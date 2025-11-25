const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'O nome do produto é obrigatório'],
      trim: true,
      minlength: [3, 'O nome deve ter no mínimo 3 caracteres'],
      maxlength: [100, 'O nome pode ter no máximo 100 caracteres']
    },

    price: {
      type: Number,
      required: [true, 'O preço é obrigatório'],
      min: [0, 'O preço não pode ser negativo']
    },

    description: {
      type: String,
      required: [true, 'A descrição é obrigatória'],
      minlength: [5, 'A descrição deve ter no mínimo 5 caracteres'],
      maxlength: [500, 'A descrição pode ter no máximo 500 caracteres']
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', ProductSchema);
