// models/Producto.js
import mongoose from "mongoose";

const ProductoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
    default: 0,
  },
  descripcion: {
    type: String,
    default: "",
  },
});

// Evita recrear el modelo en hot-reloads de Next.js
export default mongoose.models.Producto || mongoose.model("Producto", ProductoSchema);
