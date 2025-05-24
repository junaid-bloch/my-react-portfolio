// import React from 'react'
// import { Link } from 'react-router-dom'
// import './navbarstyles.css'

// const navbar = () => {
//   return (
//     <>     
//      <div className="layer-blur"></div>
//       <div className="container">
//         <header>
//           <Link to="/">
//           <h1 data-aos="fade-down" data-aos-duration="1500" className="logo">Junu</h1>
//           </Link>
//           <nav>
//             <ul>
//             <li><Link to="/Aboutme" data-aos="fade-down" data-aos-duration="1500">ABOUT ME</Link></li>
//             <li><Link to="/Skills" data-aos="fade-down" data-aos-duration="2000" >SKILLS</Link></li>
//             <li><Link to="/Projects" data-aos="fade-down" data-aos-duration="2500"  >PROJECTS</Link></li>
//             <li><Link to="/Achievements" data-aos="fade-down" data-aos-duration="3000"  >ACHIEVEMENTS</Link></li>
//           </ul>
//           </nav>
//           <button data-aos="fade-down" data-aos-duration="1500" className="btn-resume">RESUME</button>
//         </header>
//       </div>
//     </>
//   )
// }

// export default navbar
import React from 'react';
import { Link } from 'react-router-dom';
import './navbarstyles.css';
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
            href="/public/Resume.pdf"
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
