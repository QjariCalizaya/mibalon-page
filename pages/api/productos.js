// pages/api/productos.js

import connectDB from '@/lib/mongodb';
import Product from '@/models/Product';

export default async function handler(req, res) {
  await connectDB();

  if (req.method === 'POST') {
    try {
      const nuevoProducto = await Product.create(req.body);
      return res.status(201).json(nuevoProducto);
    } catch (error) {
      return res.status(400).json({ error: 'Error al crear el producto' });
    }
  }

  if (req.method === 'GET') {
    try {
      const productos = await Product.find();
      return res.status(200).json(productos);
    } catch (error) {
      return res.status(500).json({ error: 'Error al obtener productos' });
    }
  }

  return res.status(405).json({ error: 'Método no permitido' });
}
