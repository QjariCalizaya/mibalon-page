// pages/productos.js
import { useEffect, useState } from "react";

export default function Productos() {
  const [productos, setProductos] = useState([]);

  // Cargar productos desde la API
  useEffect(() => {
    fetch("/api/productos")
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((err) => console.error("Error cargando productos:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lista de Productos</h1>

      {productos.length === 0 ? (
        <p>No hay productos disponibles</p>
      ) : (
        <ul>
          {productos.map((p) => (
            <li key={p._id}>
              <strong>{p.nombre}</strong> - ${p.precio}  
              <br />
              {p.descripcion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
