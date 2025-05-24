// import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './router/homepage.js';
import Aboutme from './router/aboutme.js';
import Projects from './router/projects.js';
import Achievements from './router/achievements.js';
import Contactform from './router/contactform.js';
import Skills from './router/skills.js';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/contactform" element={<Contactform />} />
      </Routes>
    </>
  );
}

export default App;
