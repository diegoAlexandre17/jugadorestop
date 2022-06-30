import React from "react";
import { Link } from "react-router-dom";

const PlayerCard = ({ player }) => {
  return (
    <div className="card">
      <div className="card-body animate__animated animate__fadeIn">
        <h5 className="card-title">{player.player_name}</h5>
        <p className="card-text">{player.player_type}.</p>
        <p className="card-text">{player.player_number}.</p>

        <Link to={`${player.player_key}`} className="btn btn-primary">
          Más...
        </Link>
      </div>
    </div>
  );
};

export default PlayerCard;
