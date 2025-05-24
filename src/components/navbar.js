
import React from 'react';
import { Link } from 'react-router-dom';
import './navbarstyles.css';
import resume from '../Resume.pdf';
import { FaHome } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <div className="layer-blur"></div>
      <div className="container">
        <header>
          <Link to="/">
            <h1 className="logo" >
<FaHome />
            </h1>
          </Link>
          <nav>
            <ul>
              <li>
                <Link to="/Aboutme" >
                  ABOUT ME
                </Link>
              </li>
              <li>
                <Link to="/Skills">
                  SKILLS
                </Link>
              </li>
              <li>
                <Link to="/Projects" >
                  PROJECTS
                </Link>
              </li>
              <li>
                <Link to="/Achievements" >
                  ACHIEVEMENTS
                </Link>
              </li>
            <li>
                <Link to="/Contactform" >
                  CONTACT ME
                </Link>
              </li>
            </ul>
          </nav>
          <a
            href={resume}
            download = "Resume.pdf"
            className="btn-resume align-center"
          >
            HIRE ME
          </a>
        </header>
      </div>
    </>
  );
}

export default Navbar;
