import React from 'react';
import Navbar from '../components/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faMedal, faAward } from '@fortawesome/free-solid-svg-icons';

const Achievements = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-center my-4">Achievements</h1>
        <p className="text-center">This is the achievements page where you can find various achievements.</p>
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <FontAwesomeIcon icon={faTrophy} size="3x" className="text-warning mb-3" />
                <h5 className="card-title">Achievement 1</h5>
                <p className="card-text">Description of Achievement 1.</p>
                <a href="https://example.com/achievement1" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <FontAwesomeIcon icon={faMedal} size="3x" className="text-info mb-3" />
                <h5 className="card-title">Achievement 2</h5>
                <p className="card-text">Description of Achievement 2.</p>
                <a href="https://example.com/achievement2" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <FontAwesomeIcon icon={faAward} size="3x" className="text-success mb-3" />
                <h5 className="card-title">Achievement 3</h5>
                <p className="card-text">Description of Achievement 3.</p>
                <a href="https://example.com/achievement3" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievements;
