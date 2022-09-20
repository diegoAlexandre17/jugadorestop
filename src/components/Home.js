import React from "react";

import HomeSection from "./HomeSection";

const Home = () => {
  return (
    <>
      <header className="header__video">
        <article className=" header__article">
          <h1>
            Visualiza los jugadores de las plantillas TOP y sus estadísticas.
          </h1>
          <h2>Descubre todo sobre tus jugadores favoritos.</h2>
        </article>
      </header>
      <HomeSection />
    </>
  );
};

export default Home;
