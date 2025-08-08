import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CardProducto from '../../components/CardProducto';
import './home.css';

const Home = () => {
  const [productosDestacados, setProductosDestacados] = useState([]);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=6')
      .then(res => res.json())
      .then(data => setProductosDestacados(data.products))
      .catch(() => setProductosDestacados([]));

    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then(data => setCategorias(data.slice(0, 4)))
      .catch(() => setCategorias([]));
  }, []);

  return (
    <div className="contenedor-inicio">
      <div className="seccion-hero">
        <div className="contenido-hero">
          <h1 className="titulo-hero">Bienvenido a Shopping Granate</h1>
          <p className="subtitulo-hero">
            Descubre los mejores productos con la calidad que buscas
          </p>
          <Link to="/productos" className="boton-hero">
            Ver Productos
          </Link>
        </div>
        <div className="imagen-hero">
          <img 
            src="/src/assets/Logo-Tienda-Granate.webp" 
            alt="Shopping Granate" 
            className="logo-hero"
          />
        </div>
      </div>

      <div className="seccion-categorias">
        <h2 className="titulo-seccion">Categorías Destacadas</h2>
        <div className="grilla-categorias">
          {categorias.map((categoria, index) => (
            <Link 
              key={`${categoria.slug || categoria}-${index}`}
              to={`/productos/categoria/${categoria.slug || categoria}`}
              className="tarjeta-categoria"
            >
              <div className="icono-categoria">📦</div>
              <h3 className="nombre-categoria">{categoria.name || categoria}</h3>
              <p className="descripcion-categoria">Ver productos</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="seccion-productos">
        <h2 className="titulo-seccion">Productos Destacados</h2>
        <div className="grilla-productos">
          {productosDestacados.map(producto => (
            <CardProducto 
              key={producto.id}
              producto={producto}
              className="producto-destacado"
            />
          ))}
        </div>
        <div className="contenedor-ver-mas">
          <Link to="/productos" className="boton-ver-mas">
            Ver Más Productos
          </Link>
        </div>
      </div>

      <div className="seccion-informacion">
        <div className="grilla-informacion">
          <div className="tarjeta-informacion">
            <div className="icono-informacion">🚚</div>
            <h3>Envío Gratis</h3>
            <p>En compras mayores a $100</p>
          </div>
          <div className="tarjeta-informacion">
            <div className="icono-informacion">🔒</div>
            <h3>Compra Segura</h3>
            <p>Protegemos tus datos</p>
          </div>
          <div className="tarjeta-informacion">
            <div className="icono-informacion">🔄</div>
            <h3>Devolución Fácil</h3>
            <p>30 días para devolver</p>
          </div>
          <div className="tarjeta-informacion">
            <div className="icono-informacion">📞</div>
            <h3>Soporte 24/7</h3>
            <p>Siempre estamos aquí</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;