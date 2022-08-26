import { useState, useEffect } from "react";
import getFetch from "../helpers/getFetch";
import getPlayer from "../helpers/getPlayer";

const initialState = {
  name: "",
  logo: "",
  id: "",
  players: [],
};

export const useUpdateTeams = (IdTeam, IdPlayer) => {
  const [team, setTeam] = useState(initialState);
  const [loading, setLoading] = useState(true);

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

  return { loading, team };
};
