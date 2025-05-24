import React from 'react'
import Navbar from '../components/navbar.js'

const Projects = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-center my-4">Projects</h1>
        <p className="text-center">This is the projects page where you can find various projects.</p>
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Project 1</h5>
                <p className="card-text">Description of Project 1.</p>
                <a href="#" className="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Project 2</h5>
                <p className="card-text">Description of Project 2.</p>
                <a href="#" className="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Project 3</h5>
                <p className="card-text">Description of Project 3.</p>
                <a href="#" className="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Projects
