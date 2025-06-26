import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './layouts/MainLayout';
import Home from './pages/Home';
import QuienesSomos from './pages/QuienesSomos';
import Productos from './pages/Productos';
import Contacto from './pages/Contacto';
import ProductoDetalle from './pages/ProductoDetalle';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/:idCategoria" element={<Productos />} />
          <Route path="/productos/:idProducto" element={<ProductoDetalle />} />
          <Route path="/contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;