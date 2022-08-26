import { useParams } from "react-router-dom";
import SingleTeamPage from "./SingleTeamPage";
import Loader from "./Loader";
import PlayerPage from "./PlayerPage";
import { useUpdateTeams } from "../hooks/useUpdateTeams";

function TeamPage() {
  const { IdTeam, IdPlayer } = useParams();

  const { loading, team } = useUpdateTeams(IdTeam, IdPlayer);

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
