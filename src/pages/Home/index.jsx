import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CardProducto from '../../components/CardProducto';
import './home.css';

const Home = () => {
  const [productosDestacados, setProductosDestacados] = useState([]);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    // Cargar productos destacados (primeros 6)
    fetch('https://dummyjson.com/products?limit=6')
      .then(res => res.json())
      .then(data => setProductosDestacados(data.products))
      .catch(() => setProductosDestacados([]));

    // Cargar categorías principales (primeras 4)
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then(data => setCategorias(data.slice(0, 4)))
      .catch(() => setCategorias([]));
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Bienvenido a Shopping Granate</h1>
          <p className="hero-subtitle">
            Descubre los mejores productos con la calidad que buscas
          </p>
          <Link to="/productos" className="hero-button">
            Ver Productos
          </Link>
        </div>
        <div className="hero-image">
          <img 
            src="/src/assets/Logo-Tienda-Granate.webp" 
            alt="Shopping Granate" 
            className="logo-hero"
          />
        </div>
      </section>

      {/* Categorías Destacadas */}
      <section className="categorias-section">
        <h2 className="section-title">Categorías Destacadas</h2>
        <div className="categorias-grid">
          {categorias.map((categoria, index) => (
            <Link 
              key={`${categoria.slug || categoria}-${index}`}
              to={`/productos/categoria/${categoria.slug || categoria}`}
              className="categoria-card"
            >
              <div className="categoria-icon">📦</div>
              <h3 className="categoria-nombre">{categoria.name || categoria}</h3>
              <p className="categoria-description">Ver productos</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="productos-section">
        <h2 className="section-title">Productos Destacados</h2>
        <div className="productos-grid">
          {productosDestacados.map(producto => (
            <CardProducto 
              key={producto.id}
              producto={producto}
              className="producto-destacado"
            />
          ))}
        </div>
        <div className="ver-mas-container">
          <Link to="/productos" className="ver-mas-button">
            Ver Más Productos
          </Link>
        </div>
      </section>

      {/* Sección de Información */}
      <section className="info-section">
        <div className="info-grid">
          <div className="info-card">
            <div className="info-icon">🚚</div>
            <h3>Envío Gratis</h3>
            <p>En compras mayores a $100</p>
          </div>
          <div className="info-card">
            <div className="info-icon">🔒</div>
            <h3>Compra Segura</h3>
            <p>Protegemos tus datos</p>
          </div>
          <div className="info-card">
            <div className="info-icon">🔄</div>
            <h3>Devolución Fácil</h3>
            <p>30 días para devolver</p>
          </div>
          <div className="info-card">
            <div className="info-icon">📞</div>
            <h3>Soporte 24/7</h3>
            <p>Siempre estamos aquí</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;