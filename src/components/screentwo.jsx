import React from "react";
import Diagrama from "./diagrama";
function Screentwo() {
  return (
    <div className="screen border-white">
      <div className="row h-100">
        <div className="col-7 col-sm-100">
          <div className="row h-25 border-white">
            <div className="col-12 p-1 flex flex-center raleway">
              <h1>La conversación de hoy</h1>
            </div>
          </div>
          <div className="row h-75 border-white">
            <div className="col-12 p-1 flex flex-center-top">
              <div className="container">
                <p className="raleway">
                  Hemos normalizado muchas dinámicas violentas dentro de
                  nuestras conversaciones cotidianas y esto nos ha llevado a
                  dejar a un lado lo enriquecedor que es el verdadero
                  intercambio de ideas y el pensamiento colectivo. ¿Qué le pasa
                  a la conversación cuando nuestro objetivo principal es tener
                  la razón? ¿Por qué nos sentimos atacadxs cuando alguien
                  critica nuestras opiniones? ¿Por qué valoramos más unas
                  opiniones que otras y cómo asignamos ese valor? ¿Cuáles son
                  nuestros hábitos al hablar/ escuchar? ¿Por qué muchas veces
                  terminamos abandonando la conversación?
                </p>
                <p className="raleway">
                  En la investigación que cimienta este juego, analizamos de
                  dónde vienen estas dinámicas y qué podemos hacer para
                  transformarlas.
                </p>

                <div className="row">
                  <div className="col-3"></div>
                  <div className="col-9">
                    <p>Si te interesa, descarga el ensayo de la investigación</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 col-sm-100">
          <div className="row h-75 border-white flex flex-center">
            <div className="col-12 p-1">
              <Diagrama />
            </div>
          </div>
          <div className="row h-25  border-white">
            <div className="col-12 p-1 flex flex-center">
              <p className="raleway">
                Nos encontramos en un ciclo de comunicación que no nos permite
                pensar en nuevas posibilidades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Screentwo;
