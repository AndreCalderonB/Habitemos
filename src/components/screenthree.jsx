import React from "react";

function Screenthree() {
  return (
    <div className="screen border-white">
      <div className="row h-100">
        <div className="col-7 border-white">
          <div className="row h-50 border-white"></div>
          <div className="row h-50 border-white"></div>
        </div>
        <div className="col-4 border-white">
          <div className="row h-25 border-white">
            <div className="col-12 flex flex-center p-1">
              <h1>Sobre el Proyecto</h1>
            </div>
          </div>
          <div className="row h-75 border-white">
            <div className="col-12 flex flex-center p-1">
              <div className="container">
                <p>
                  Habitemos fue elaborado por Daniela Zorrilla como proyecto de
                  titulación de la licenciatura de Comunicación visual en
                  CENTRO.
                </p>
                <p>
                  Si te interesa saber más o tienes alguna duda, idea o
                  sugerencia por favor comunicate a: dzorrillav@centro.edu.mx
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Screenthree;
