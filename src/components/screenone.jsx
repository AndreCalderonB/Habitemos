import React from "react";
import imageOne from "../assets/img/01.jpg";
import imageTwo from "../assets/img/04.jpg";
function Screenone() {
  return (
    <div className="screen border-white">
      <div className="row h-50">
        <div className="col-4 col-sm-100 p-1 flex flex-center border-white">
          <div className="container raleway">
            <h1>¿Por qué existe este juego?</h1>
          </div>
        </div>
        <div className="col-7 col-sm-100 p-1 flex flex-center border-white">
          <div className="container">
            <p className="raleway">
              La conversación es una herramienta poderosa de transformación
              social, La conversación de hoy pero no siempre sabemos utilizarla.
              Este juego busca crear espacios en los que re-aprendamos a
              intercambiar ideas, crecer colectivamente, fomentar la diversidad
              ideológica y generar vínculos significativos.
            </p>
          </div>
        </div>
      </div>
      <div className="row h-50 border-white">
        <div className="col-6  col-sm-100  p-1">
          <img src={imageOne} alt="" />
        </div>
        <div className="col-6  col-sm-100  p-1">
          <img src={imageTwo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Screenone;
