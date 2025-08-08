import { Link } from 'react-router-dom';
import './cardProducto.css';

const CardProducto = ({ producto, className = "" }) => {
  if (!producto) return null;

  return (
    <Link 
      to={`/productos/producto/${producto.id}`}
      className={`producto-card ${className}`}
    >
      <div className="producto-image-container">
        <img 
          src={producto.thumbnail} 
          alt={producto.title}
          className="producto-image"
        />
        {producto.discountPercentage && producto.discountPercentage > 0 && (
          <div className="producto-descuento">
            -{Math.round(producto.discountPercentage)}%
          </div>
        )}
      </div>
      <div className="producto-info">
        <h3 className="producto-titulo">{producto.title}</h3>
        <p className="producto-categoria">{producto.category}</p>
        <div className="producto-precio-container">
          <p className="producto-precio">${producto.price}</p>
          {producto.discountPercentage && producto.discountPercentage > 0 && (
            <p className="producto-precio-original">
              ${Math.round(producto.price / (1 - producto.discountPercentage / 100))}
            </p>
          )}
        </div>
        {producto.rating && (
          <div className="producto-rating">
            <span className="estrellas">⭐</span>
            <span className="rating-numero">{producto.rating}/5</span>
            {producto.stock && (
              <span className="producto-stock">
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
