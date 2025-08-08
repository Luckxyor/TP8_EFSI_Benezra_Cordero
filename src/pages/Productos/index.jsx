import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardProducto from '../../components/CardProducto';
import './productos.css';

const Productos = () => {
  const { idCategoria } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      let url = 'https://dummyjson.com/products';
      if (idCategoria) {
        url = `https://dummyjson.com/products/category/${idCategoria}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      setProductos(data.products || []);
    };
    fetchProductos();
  }, [idCategoria]);

  return (
    <div className="productos-container">
      <h1 className="productos-titulo">
        {idCategoria ? `Productos - ${idCategoria}` : 'Todos los Productos'}
      </h1>
      {productos.length === 0 ? (
        <p className="no-productos">No se encontraron productos.</p>
      ) : (
        <div className="productos-grid">
          {productos.map(producto => (
            <CardProducto 
              key={producto.id}
              producto={producto}
              className="producto-listado"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Productos;
