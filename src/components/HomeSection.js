import React from "react";
import { Link } from "react-router-dom";

import city from "../img/city.jpg";
import liverpool from "../img/liverpool.jpg";
import chelsea from "../img/chelsea.jpg";
import psg from "../img/psg.jpg";
import realMadrid from "../img/real-madrid.jpg";
import barcelona from "../img/barcelona.jpg";

const HomeSection = () => {
  return (
    <section className="home__section">
      <div id="home-section" className="container grid-container">
        <div className="card">
          <img src={city} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Etihad Stadium</h5>

            <Link to="80" className="btn btn-primary">
              Ir...
            </Link>
          </div>
        </div>
        <div className="card">
          <img src={liverpool} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Anfield</h5>

            <Link to="84" className="btn btn-primary">
              Ir...
            </Link>
          </div>
        </div>
        <div className="card">
          <img src={chelsea} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Stamford Bridge</h5>

            <Link to="88" className="btn btn-primary">
              Ir...
            </Link>
          </div>
        </div>
        <div className="card">
          <img src={psg} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Parque de los Príncipes</h5>

            <Link to="100" className="btn btn-primary">
              Ir...
            </Link>
          </div>
        </div>
        <div className="card">
          <img src={realMadrid} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Santiago Bernabeu</h5>

            <Link to="76" className="btn btn-primary">
              Ir...
            </Link>
          </div>
        </div>
        <div className="card">
          <img src={barcelona} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Camp Nou</h5>

            <Link to="97" className="btn btn-primary">
              Ir...
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
