import "./navbar.css";
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Navbar=()=>{
  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories')
      .then(res => setCategorias(res.data))
      .catch(() => setCategorias([]))
  }, [])

  return (
    <nav className="barra-navegacion">
      <span className="logo-navegacion">ShoppingGranate</span>
      <ul>
        <li><Link to='/' className="enlace-navegacion">Home</Link></li>
        <li><Link to='/quienes-somos' className="enlace-navegacion">Quienes somos</Link></li>
        <li className="dropdown-container">
          <span className="dropdown-toggle">
            Productos
            <span className="dropdown-arrow">▼</span>
          </span>
          <ul className="dropdown-menu">
            <li className="dropdown-item">
              <Link to='/productos' className="dropdown-link">Ver todos</Link>
            </li>
            {categorias.map((categoria, index) => (
              <li key={`${categoria.slug || categoria}-${index}`} className="dropdown-item">
                <Link 
                  to={`/productos/categoria/${categoria.slug || categoria}`} 
                  className="dropdown-link"
                >
                  {categoria.name || categoria}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li><Link to='/contacto' className="enlace-navegacion">Contacto</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar;
