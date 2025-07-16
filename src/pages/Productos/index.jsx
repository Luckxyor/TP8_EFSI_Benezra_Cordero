import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
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
      {productos.length === 0 ? (
        <p>No se encontraron productos.</p>
      ) : (
        <ul className="productos-list">
          {productos.map(producto => (
            <li key={producto.id} className="producto-item">
              <Link to={`/productos/producto/${producto.id}`}>
                <img src={producto.thumbnail} alt={producto.title} className="producto-imagen" />
                <h3 className="producto-titulo">{producto.title}</h3>
                <p className="producto-precio">${producto.price}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Productos;
