import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './productoDetalle.css';

const ProductoDetalle = () => {
  const { idProducto } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const fetchProducto = async () => {
      const response = await fetch("https://dummyjson.com/products/" + idProducto);
      const data = await response.json();
      setProducto(data);
    };
    if (idProducto) {
      fetchProducto();
    }
  }, [idProducto]);

  if (!producto) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <div className="producto-detalle-container">
      <h2 className="producto-detalle-titulo">{producto.title}</h2>
      <p className="producto-detalle-categoria">Categoría: {producto.category}</p>
      <p className="producto-detalle-precio">Precio: ${producto.price}</p>
      <p className="producto-detalle-descripcion">{producto.description}</p>
      {producto.images && producto.images.length > 0 && (
        <div className="producto-detalle-imagenes">
          {producto.images.map((img, index) => (
            <img key={index} src={img} alt={producto.title + " imagen " + (index + 1)} className="producto-detalle-imagen" />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductoDetalle;
