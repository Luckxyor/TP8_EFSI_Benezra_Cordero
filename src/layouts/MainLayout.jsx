import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Layout = () => {
  return (
    <>
      <Navbar/>
      <main style={{ marginTop: '60px', minHeight: 'calc(100vh - 120px)' }}>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};

export default Layout;