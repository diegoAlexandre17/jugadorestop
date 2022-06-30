import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* <nav className="px-3 navbar navbar-expand-sm navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          Home
        </Link>

        <div className="w-100  d-flex justify-content-around">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link" to="/real-madrid">
              Real Madrid
            </NavLink>

            <NavLink className="nav-item nav-link" to="/barcelona">
              Barcelona
            </NavLink>
            <NavLink className="nav-item nav-link" to="/chelsea">
              Chelsea
            </NavLink>
            <NavLink className="nav-item nav-link" to="/liverpool">
              Liverpool
            </NavLink>
            <NavLink className="nav-item nav-link" to="/man-city">
              Manchester City
            </NavLink>
            <NavLink className="nav-item nav-link" to="/psg">
              PSG
            </NavLink>
          </div>
        </div>
      </nav> */}
      <nav className="px-3 navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav w-100  d-flex justify-content-center">
              <li className="nav-item">
                <NavLink className="nav-item nav-link" to="/76">
                  Real Madrid
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-item nav-link" to="/97">
                  Barcelona
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-item nav-link" to="/88">
                  Chelsea
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-item nav-link" to="/84">
                  Liverpool
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-item nav-link" to="/80">
                  Manchester City
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-item nav-link" to="/100">
                  PSG
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
