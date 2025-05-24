import React from 'react'
import Navbar from '../components/navbar.js'

const Skills = () => {
  return (
    <>
    <Navbar />
    <div className="container">
      <h1 className="text-center my-4">Skills</h1>
      <p className="text-center">This is the skills page where you can find various skills.</p>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Skill 1</h5>
              <p className="card-text">Description of Skill 1.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Skill 2</h5>
              <p className="card-text">Description of Skill 2.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Skill 3</h5>
              <p className="card-text">Description of Skill 3.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Skills
