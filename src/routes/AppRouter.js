import { Routes, Route, HashRouter } from "react-router-dom";

import Home from "../components/Home";

import TeamPage from "../components/TeamPage";
import Navbar from "../components/Navbar";

import PlayerPage from "../components/PlayerPage";

const AppRouter = () => {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:IdTeam" element={<TeamPage />}>
            <Route path=":IdPlayer" element={<PlayerPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
};

export default AppRouter;
