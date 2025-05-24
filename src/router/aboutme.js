import Navbar from '../components/navbar.js'
import React, { useEffect } from 'react';
import './Aboutme.css'; // Make sure to create this CSS file
import myImage from '../junaid.jpeg'; // Replace with the path to your image

const Aboutme = () => {
  useEffect(() => {
    // You can add any JavaScript animations or libraries here
  }, []);

  return (
    <>
      <Navbar />
      <div className="about-me-container">
        <div className="about-me-content">
          <div className="about-me-image">
            <img src={myImage} alt="Me" className="animated-image" />
          </div>
          <div className="about-me-text">
            <h1 className="animated-heading">About Me</h1>
            <p className="animated-paragraph">
              Hello! I'm Junaid Bloch, a passionate Web Developer with a keen interest in Python Development and working with LLMs.
              I love creating beautiful and functional web applications that make a difference.
            </p>
            <p className="animated-paragraph">
              With a background in Information Technology, I bring a unique perspective to every project I work on.
              My goal is to deliver high-quality, user-friendly solutions that exceed expectations.
            </p>
            <p className="animated-paragraph">
              When I'm not coding, you can find me exploring new stuff and trying different domains. I believe in continuous learning
              and am always looking for new challenges and opportunities to grow.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutme
