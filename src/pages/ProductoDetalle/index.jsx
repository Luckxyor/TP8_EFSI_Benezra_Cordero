import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './productoDetalle.css';

const ProductoDetalle = () => {
  const { idProducto } = useParams();
  const navigate = useNavigate();
  const [producto, setProducto] = useState(null);
  const [imagenActual, setImagenActual] = useState(0);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${idProducto}`);
        const data = await response.json();
        setProducto(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    if (idProducto) {
      fetchProducto();
    }
  }, [idProducto]);

  if (!producto) {
    return (
      <div className="contenedor-detalle">
        <div className="cargando">Cargando producto...</div>
      </div>
    );
  }

  return (
    <div className="contenedor-detalle">
      <div className="navegacion">
        <button onClick={() => navigate(-1)} className="boton-volver">
          ← Volver
        </button>
        <div className="ruta">
          <Link to="/">Inicio</Link> / <Link to="/productos">Productos</Link> / {producto.title}
        </div>
      </div>

      <div className="producto-detalle">
        <div className="imagenes">
          <div className="imagen-principal">
            <img 
              src={producto.images?.[imagenActual] || producto.thumbnail} 
              alt={producto.title}
            />
          </div>
          {producto.images && producto.images.length > 1 && (
            <div className="miniaturas">
              {producto.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Vista ${index + 1}`}
                  className={index === imagenActual ? 'activa' : ''}
                  onClick={() => setImagenActual(index)}
                />
              ))}
            </div>
          )}
        </div>

        <div className="info">
          <h1>{producto.title}</h1>
          
          <div className="categoria">
            <Link to={`/productos/categoria/${producto.category}`}>
              Categoría: {producto.category}
            </Link>
          </div>

          <div className="rating">
            <span className="estrellas">⭐ {producto.rating}/5</span>
            {producto.brand && <span className="marca">Marca: {producto.brand}</span>}
          </div>

          <div className="precios">
            <div className="precio-actual">${producto.price}</div>
          </div>

          <div className="descripcion">
            <h3>Descripción</h3>
            <p>{producto.description}</p>
          </div>

          <div className="detalles">
            <h3>Detalles del producto</h3>
            <div className="lista-detalles">
              <div><strong>SKU:</strong> {producto.sku}</div>
              <div><strong>Peso:</strong> {producto.weight} kg</div>
              <div><strong>Stock:</strong> {producto.stock} unidades</div>
              {producto.warrantyInformation && (
                <div><strong>Garantía:</strong> {producto.warrantyInformation}</div>
              )}
              {producto.shippingInformation && (
                <div><strong>Envío:</strong> {producto.shippingInformation}</div>
              )}
            </div>
          </div>

          <div className="comprar">
            {producto.stock > 0 ? (
              <>
                <div className="stock-disponible">✓ En stock ({producto.stock} disponibles)</div>
                <div className="botones">
                  <button className="btn-agregar">Agregar al carrito</button>
                  <button className="btn-comprar">Comprar ahora</button>
                </div>
              </>
            ) : (
              <div className="sin-stock">✗ Producto agotado</div>
            )}
          </div>

          <div className="beneficios">
            <div className="beneficio">🚚 Envío gratis en compras +$100</div>
            <div className="beneficio">🔄 30 días para devoluciones</div>
            <div className="beneficio">🔒 Compra 100% segura</div>
          </div>
        </div>
      </div>

      {producto.reviews && producto.reviews.length > 0 && (
        <div className="reviews">
          <h3>Opiniones de clientes</h3>
          {producto.reviews.slice(0, 3).map((review, index) => (
            <div key={index} className="review">
              <div className="review-header">
                <strong>{review.reviewerName}</strong>
                <span className="review-rating">⭐ {review.rating}/5</span>
                <span className="review-date">{new Date(review.date).toLocaleDateString()}</span>
              </div>
              <p>{review.comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductoDetalle;
