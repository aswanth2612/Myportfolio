import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./App.css";

function Header(prop) {
  const navigate = useNavigate();

  if (!prop.show) {
    return <></>;
  } else {
    return (
      <nav className="navbar navbar-expand-lg" id="navbar">
        <div className="container ">
          <a className="navbar-brand col-8 " href="#">
            My Portfolio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav justify-content-evenly  col-12">
              <a className="nav-link " href="/">
                Home
              </a>
              <a
                className="nav-link "
                id="Skills"
                onClick={() => navigate("/Skills")}
              >
                Skills
              </a>

              <a
                className="nav-link"
                id="Projects"
                onClick={() => navigate("/Projects")}
              >
                Projects
              </a>
              <a
                className="nav-link"
                id="Contact"
                onClick={() => navigate("/Contact")}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
