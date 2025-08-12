import './quienesSomos.css';

const QuienesSomos = () => {
  return (
    <div className="contenedor-quienes-somos">
      <div className="hero-quienes-somos">
        <div className="header-quienes-somos">
          <h1>Quiénes Somos</h1>
          <p>La historia detrás de Shopping Granate</p>
        </div>
      </div>

      <div className="seccion-ceos">
        <div className="contenedor-ceos">
          <h2>Nuestros CEOs</h2>
          <div className="tarjetas-ceos">
            <div className="tarjeta-ceo">
              <div className="imagen-ceo">
                <div className="placeholder-imagen">LB</div>
              </div>
              <div className="info-ceo">
                <h3>Lucas Benezra</h3>
                <p className="cargo">Co-CEO & Fundador</p>
                <p className="descripcion">
                  Visionario emprendedor con pasión por la innovación en el comercio electrónico. 
                  Lucas lidera la estrategia tecnológica y el desarrollo de producto de Shopping Granate.
                </p>
              </div>
            </div>

            <div className="tarjeta-ceo">
              <div className="imagen-ceo">
                <div className="placeholder-imagen">UC</div>
              </div>
              <div className="info-ceo">
                <h3>Uriel Cordero de Felice</h3>
                <p className="cargo">Co-CEO & Fundador</p>
                <p className="descripcion">
                  Fanático de CA Lanús y estratega de negocios. La pasión de Uriel por los colores 
                  granate y blanco de su querido club inspiró la identidad visual de Shopping Granate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="seccion-historia">
        <div className="contenedor-historia">
          <h2>Nuestra Historia</h2>
          <div className="contenido-historia">
            <div className="bloque-historia">
              <h3>El Origen</h3>
              <p>
                Todo comenzó con una idea simple pero poderosa. Uriel Cordero de Felice, hincha 
                apasionado de Club Atlético Lanús, soñaba con crear algo que reflejara los colores 
                que tanto ama: el granate y el blanco.
              </p>
            </div>
            
            <div className="bloque-historia">
              <h3>La Inspiración</h3>
              <p>
                La pasión por el granate de CA Lanús se convirtió en la esencia de nuestra marca. 
                Junto a Lucas Benezra, decidieron que esos colores tan significativos debían 
                trascender el fútbol y convertirse en la identidad de algo más grande.
              </p>
            </div>

            <div className="bloque-historia">
              <h3>Shopping Granate Nace</h3>
              <p>
                Así nació Shopping Granate: una plataforma de comercio electrónico que lleva 
                los colores de la pasión futbolística a una experiencia de compra única. 
                Cada producto, cada detalle, refleja la dedicación y el amor por la excelencia.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="seccion-mision">
        <div className="contenedor-mision">
          <div className="bloques-mision">
            <div className="bloque">
              <h3>Nuestra Misión</h3>
              <p>
                Brindar una experiencia de compra excepcional, combinando tecnología de vanguardia 
                con la pasión y dedicación que caracterizan a los hinchas de fútbol argentino.
              </p>
            </div>

            <div className="bloque">
              <h3>Nuestra Visión</h3>
              <p>
                Ser la plataforma de e-commerce líder en Argentina, reconocida por su identidad 
                única y su compromiso con la calidad, llevando los colores granate a cada hogar.
              </p>
            </div>

            <div className="bloque">
              <h3>Nuestros Valores</h3>
              <ul>
                <li>🏆 Pasión por la excelencia</li>
                <li>💎 Calidad en cada producto</li>
                <li>🤝 Compromiso con nuestros clientes</li>
                <li>⚽ Amor por la tradición argentina</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="seccion-equipo">
        <div className="contenedor-equipo">
          <h2>Nuestro Equipo</h2>
          <p className="descripcion-equipo">
            En Shopping Granate, somos un equipo apasionado que combina la experiencia tecnológica 
            con el amor por la tradición argentina. Cada miembro del equipo aporta su granito de arena 
            para hacer de nuestra plataforma la mejor experiencia de compra online.
          </p>
          
          <div className="estadisticas">
            <div className="estadistica">
              <h4>2</h4>
              <p>Fundadores</p>
            </div>
            <div className="estadistica">
              <h4>2025</h4>
              <p>Año de fundación</p>
            </div>
            <div className="estadistica">
              <h4>100%</h4>
              <p>Pasión granate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuienesSomos;