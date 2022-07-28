import React from "react";
import { Link } from "react-router-dom";

const HomeSection = () => {
  return (
    <section className="home__section">
      <div id="home-section" className="container grid-container">
        <div className="card">
          <img
            src="https://raw.githubusercontent.com/diegoAlexandre17/jugadores-top-app/master/docs/static/media/city.9b27ed73ed076308de72.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Etihad Stadium</h5>

            <Link to="80" className="btn btn-primary">
              Ir...
            </Link>
          </div>
        </div>
        <div className="card">
          <img
            src="https://raw.githubusercontent.com/diegoAlexandre17/jugadores-top-app/master/docs/static/media/liverpool.83ed34d44ace5a4ccd7b.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Anfield</h5>

            <Link to="84" className="btn btn-primary">
              Ir...
            </Link>
          </div>
        </div>
        <div className="card">
          <img
            src="https://raw.githubusercontent.com/diegoAlexandre17/jugadores-top-app/master/docs/static/media/chelsea.7ba30e23ea9416cdc30a.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Stamford Bridge</h5>

            <Link to="88" className="btn btn-primary">
              Ir...
            </Link>
          </div>
        </div>
        <div className="card">
          <img
            src="https://raw.githubusercontent.com/diegoAlexandre17/jugadores-top-app/master/docs/static/media/psg.4150cf32d06fb2683dbd.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Parque de los Príncipes</h5>

            <Link to="100" className="btn btn-primary">
              Ir...
            </Link>
          </div>
        </div>
        <div className="card">
          <img
            src="https://raw.githubusercontent.com/diegoAlexandre17/jugadores-top-app/master/docs/static/media/real-madrid.3fea7a50cb3bfaa88ab1.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Santiago Bernabeu</h5>

            <Link to="76" className="btn btn-primary">
              Ir...
            </Link>
          </div>
        </div>
        <div className="card">
          <img
            src="https://raw.githubusercontent.com/diegoAlexandre17/jugadores-top-app/master/docs/static/media/barcelona.3e196c6dc4dbf9999079.jpg"
            className="card-img-top "
            alt="..."
          />
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
