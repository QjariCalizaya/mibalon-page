// pages/api/productos.js
import connectDB from "../../lib/mongodb.js";
import Producto from "../../models/Product.js";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    const productos = await Producto.find();
    return res.status(200).json(productos);
  }

  if (req.method === "POST") {
    try {
      const nuevoProducto = new Producto(req.body);
      await nuevoProducto.save();
      return res.status(201).json(nuevoProducto);
    } catch (err) {
      return res.status(400).json({ error: "Error al crear producto", details: err.message });
    }
  }

  return res.status(405).json({ error: "Método no permitido" });
}
