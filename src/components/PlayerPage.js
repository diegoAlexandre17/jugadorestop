import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import getPlayer from "../helpers/getPlayer";
import Loader from "./Loader";

const PlayerPage = () => {
  const [player, setPlayer] = useState("");
  const { IdPlayer } = useParams();
  const navigate = useNavigate();

  const handleReturn = () => {
    if (navigate.length < 2) {
      navigate("/");
    } else {
      navigate(-1);
    }
  };

  let mounted = true;
  //Si esta montado el componente hace la peticion, si no, no.

  useEffect(() => {
    getPlayer(IdPlayer)
      .then((newPlayer) => {
        if (mounted) {
          setPlayer(newPlayer);
        }
      })
      .catch((error) => console.log(error));

    return () => {
      mounted = false;
    };
  }, []);

  //console.log(IdPlayer);

  return (
    <div className="player__page">
      {player === "" ? (
        <Loader />
      ) : (
        <div className="row g-0 p-4 animate__animated animate__fadeIn">
          <section className=" col-md-4 p-3">
            <img
              className="card-img-top img-thumbnail img_player"
              src={player.img}
              alt={player.player_image}
              onError={() =>
                (document.querySelector("img").src =
                  "https://www.latercera.com/resizer/9Yo9YIAEMo7t9hQTNUgPa9mgE-8=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/Z2NK6DYAPBHO3BVPUE25LQ22ZA.jpg")
              }
            />
          </section>
          <section className="col-md-8 p-3">
            <article className="info d-flex flex-wrap border rounded justify-content-center">
              <p className="d-flex flex-column p-3">
                <b>Nombre:</b>
                {player.name}
              </p>
              <p className="d-flex flex-column p-3">
                <b>Edad:</b>
                {player.age}
              </p>
              <p className="d-flex flex-column p-3">
                <b>Posición:</b>
                {player.type}
              </p>
              <p className="d-flex flex-column p-3">
                <b>Número:</b>
                {player.number}
              </p>
              <p className="d-flex flex-column p-3">
                <b>Equipo:</b>
                {player.team_name}
              </p>
            </article>

            <article className="info my-2 d-flex flex-wrap border rounded justify-content-center">
              <p className="d-flex flex-column p-3">
                <b>Goles:</b>
                {player.goals}
              </p>
              <p className="d-flex flex-column p-3">
                <b>Asistencias:</b>
                {player.assists}
              </p>
              <p className="d-flex flex-column p-3">
                <b>Partidos jugados:</b>
                {player.match_played}
              </p>
              <p className="d-flex flex-column p-3">
                <b>Minutos jugados:</b>
                {player.minutes}
              </p>
              <p className="d-flex flex-column p-3">
                <b>Tarjetas Amarillas:</b>

                {player.yellow_cards}
              </p>
              <p className="d-flex flex-column p-3">
                <b>Tarjetas Rojas:</b>
                {player.red_cards}
              </p>
            </article>
            <button onClick={handleReturn} className="w-100 btn btn-dark">
              Return
            </button>
          </section>
        </div>
      )}
    </div>
  );
};

export default PlayerPage;
