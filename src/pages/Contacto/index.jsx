import './contacto.css';

const Contacto = () => {
  const manejarEnvio = (e) => {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
  };

  return (
    <div className="pagina-contacto">
      <div className="encabezado-contacto">
        <div className="titulo-contacto">
          <h1>Contáctanos</h1>
          <p>Estamos aquí para ayudarte. Envíanos tu consulta y te responderemos a la brevedad.</p>
        </div>
      </div>

      <div className="contenido-contacto">
        <div className="formulario-contacto">
          <h2>Envíanos un Mensaje</h2>
          <form onSubmit={manejarEnvio}>
            <div className="campo-formulario">
              <label htmlFor="nombre">Nombre Completo *</label>
              <input 
                type="text" 
                id="nombre" 
                name="nombre" 
                required 
                placeholder="Tu nombre completo"
              />
            </div>

            <div className="campo-formulario">
              <label htmlFor="email">Email *</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                placeholder="tu@email.com"
              />
            </div>

            <div className="campo-formulario">
              <label htmlFor="telefono">Teléfono</label>
              <input 
                type="tel" 
                id="telefono" 
                name="telefono" 
                placeholder="+54 11 1234-5678"
              />
            </div>

            <div className="campo-formulario">
              <label htmlFor="asunto">Asunto *</label>
              <select id="asunto" name="asunto" required>
                <option value="">Selecciona un asunto</option>
                <option value="consulta-producto">Consulta sobre producto</option>
                <option value="problema-pedido">Problema con mi pedido</option>
                <option value="devoluciones">Devoluciones y cambios</option>
                <option value="sugerencias">Sugerencias</option>
                <option value="otros">Otros</option>
              </select>
            </div>

            <div className="campo-formulario">
              <label htmlFor="mensaje">Mensaje *</label>
              <textarea 
                id="mensaje" 
                name="mensaje" 
                rows="6" 
                required 
                placeholder="Escribe tu mensaje aquí..."
              ></textarea>
            </div>

            <button type="submit" className="boton-enviar-contacto">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;