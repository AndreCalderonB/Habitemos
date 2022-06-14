import React from "react";
import imageThree from "../assets/img/06.jpg";
import imageFour from "../assets/img/08.1.jpg";
import imageFive from "../assets/img/09.1.jpg";
import imageSix from "../assets/img/ultima.jpg";
function Screenthree() {
  return (
    <div className="screen border-white">
      <div className="row h-100">
        <div className="col-7 col-sm-100 border-white">
          <div className="row h-50 border-white">
            <div className="col-7 col-sm-100 p-01 flex flex-center">
              <div className="imgContainer imgThree"></div>
            </div>
            <div className="col-4 col-sm-100 p-01 flex flex-center">
              <div className="imgContainer imgFour"></div>
            </div>
          </div>
          <div className="row h-50 border-white">
            <div className="col-4 col-sm-100 p-01 flex flex-center">
              <div className="imgContainer imgFive"></div>
            </div>
            <div className="col-7 col-sm-100 p-01 flex flex-center">
              <div className="imgContainer imgSix"></div>
            </div>
          </div>
        </div>
        <div className="col-4 col-sm-100 border-white">
          <div className="row h-25 border-white">
            <div className="col-12 flex flex-center p-1">
              <h1 className="raleway">Sobre el Proyecto</h1>
            </div>
          </div>
          <div className="row h-75 border-white">
            <div className="col-12 flex flex-center-top p-1">
              <div className="container">
                <p className="raleway">
                  Habitemos fue elaborado por Daniela Zorrilla como proyecto de
                  titulación de la licenciatura de Comunicación visual en
                  CENTRO.
                </p>
                <p className="raleway">
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
