import "./navbar.css";
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Navbar = () => {
  const [categorias, setCategorias] = useState([])
  const [dropdownAbierto, setDropdownAbierto] = useState(false)

  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories')
      .then(res => setCategorias(res.data))
      .catch(() => setCategorias([]))
  }, [])

  const manejarDropdown = () => {
    setDropdownAbierto(!dropdownAbierto)
  }

  const cerrarDropdown = () => {
    setDropdownAbierto(false)
  }

  return (
    <nav className="barra-navegacion">
      <span className="logo-navegacion">ShoppingGranate</span>
      <ul>
        <li><Link to='/' className="enlace-navegacion">Home</Link></li>
        <li><Link to='/quienes-somos' className="enlace-navegacion">Quienes somos</Link></li>
        <li className="contenedor-dropdown">
          <button 
            className="boton-dropdown"
            onClick={manejarDropdown}
            onBlur={() => setTimeout(cerrarDropdown, 150)}
          >
            Productos
            <span className={`flecha-dropdown ${dropdownAbierto ? 'abierta' : ''}`}>▼</span>
          </button>
          <ul className={`menu-dropdown ${dropdownAbierto ? 'mostrar' : ''}`}>
            <li className="item-dropdown">
              <Link to='/productos' className="enlace-dropdown" onClick={cerrarDropdown}>
                Ver todos los productos
              </Link>
            </li>
            {categorias.map((categoria, index) => (
              <li key={`${categoria.slug || categoria}-${index}`} className="item-dropdown">
                <Link 
                  to={`/productos/categoria/${categoria.slug || categoria}`} 
                  className="enlace-dropdown"
                  onClick={cerrarDropdown}
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
