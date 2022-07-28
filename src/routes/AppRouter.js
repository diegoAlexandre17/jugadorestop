import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../components/Home";

import TeamPage from "../components/TeamPage";
import Navbar from "../components/Navbar";

import PlayerPage from "../components/PlayerPage";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/jugadores-top-app" element={<Home />} />
          <Route path="/:IdTeam" element={<TeamPage />}>
            <Route path=":IdPlayer" element={<PlayerPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
