import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getFetch from "../helpers/getFetch";
import getPlayer from "../helpers/getPlayer";
import SingleTeamPage from "./SingleTeamPage";
import Loader from "./Loader";

import PlayerPage from "./PlayerPage";

const initialState = {
  name: "",
  logo: "",
  id: "",
  players: [],
};

function TeamPage() {
  const [team, setTeam] = useState(initialState);
  const [loading, setLoading] = useState(true);
  const { IdTeam, IdPlayer } = useParams();

  useEffect(() => {
    updateTeams();
  }, [IdTeam]);

  const updateTeams = () => {
    if (IdPlayer) {
      getPlayer(IdPlayer)
        .then((newTeam) => {
          setTeam(newTeam);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    } else {
      getFetch(IdTeam)
        .then((newTeam) => {
          setTeam(newTeam);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    }
  };

  //console.log(IdPlayer);

  /* 80 man city 84 liverpool 88 chelsea 96 juve 97 barca 100 psg*/

  return (
    <div className="py-3 team__page">
      {loading ? (
        <Loader />
      ) : IdPlayer ? (
        <PlayerPage />
      ) : (
        <SingleTeamPage team={team} />
      )}
    </div>
  );
}

export default TeamPage;
