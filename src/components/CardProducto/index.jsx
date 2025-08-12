import { Link } from 'react-router-dom';
import './cardProducto.css';

const CardProducto = ({ producto, className = "" }) => {
  if (!producto) return null;

  return (
    <Link 
      to={`/productos/producto/${producto.id}`}
      className={`tarjeta-producto ${className}`}
    >
      <div className="contenedor-imagen-producto">
        <img 
          src={producto.thumbnail} 
          alt={producto.title}
          className="imagen-producto"
        />
      </div>
      <div className="informacion-producto">
        <h3 className="titulo-producto">{producto.title}</h3>
        <p className="categoria-producto">{producto.category}</p>
        <div className="contenedor-precio-producto">
          <p className="precio-producto">${producto.price}</p>
        </div>
        {producto.rating && (
          <div className="rating-producto">
            <span className="estrellas">⭐</span>
            <span className="numero-rating">{producto.rating}/5</span>
            {producto.stock && (
              <span className="stock-producto">
                {producto.stock > 0 ? `(${producto.stock} disponibles)` : '(Sin stock)'}
              </span>
            )}
          </div>
        )}
      </div>
    </Link>
  );
};

export default CardProducto;
