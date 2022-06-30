import React, { useState } from "react";

import PlayerCard from "./PlayerCard";

const SingleTeamPage = ({ team }) => {
  return (
    <>
      <section>
        <h1 className="team__name">{team.name}</h1>
        <div>hola</div>
        <img
          className="animate__animated animate__fadeInLeft"
          src={team.logo}
          alt={team.name}
        />
      </section>
      <section className="container d-flex flex-wrap">
        {team.players.map((player) => (
          <PlayerCard key={player.player_key} player={player} />
        ))}
      </section>
    </>
  );
};

export default SingleTeamPage;
