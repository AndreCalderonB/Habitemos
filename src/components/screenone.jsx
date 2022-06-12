import React from "react";

function Screenone() {
  return (
    <div className="screen border-white">
      <div className="row h-50">
        <div className="col-4 flex flex-center border-white">
          <h1>¿Por qué existe este juego?</h1>
        </div>
        <div className="col-7 flex flex-center p-1 border-white">
          <p>
            La conversación es una herramienta poderosa de transformación
            social, La conversación de hoy pero no siempre sabemos utilizarla.
            Este juego busca crear espacios en los que re-aprendamos a
            intercambiar ideas, crecer colectivamente, fomentar la diversidad
            ideológica y generar vínculos significativos.
          </p>
        </div>
      </div>
      <div className="row h-50 border-white">
        <div className="col-6 p-1">
          <div className="bg-gray"></div>
        </div>
        <div className="col-6 p-1">
          <div className="bg-gray"></div>
        </div>
      </div>
    </div>
  );
}

export default Screenone;
