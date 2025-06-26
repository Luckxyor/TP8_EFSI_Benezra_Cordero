import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {

  return (
    <nav className="barra-navegacion">
      <span className="logo-navegacion">ShoppingGranate</span>
      <Link to="/" className="enlace-navegacion">Inicio</Link>
      <Link to="/quienes-somos" className="enlace-navegacion">Quiénes somos</Link>
      <Link to="/contacto" className="enlace-navegacion">Contacto</Link>
    </nav>
  );
};

export default Navbar;