import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  fabricante: {type:String},
  precio: { type: Number, required: true },
  imagen: { type: String },
  categoria: { type: String },
  stock: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
