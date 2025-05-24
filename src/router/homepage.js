import React from 'react'
import Navbar from '../components/navbar.js'
import '../App.css'
import { Link } from 'react-router-dom'

const Homepage = () => {
    return (
        <div id="root">
            <Navbar />
            <main>
                <div className="layer-blur"></div>
                <div className="container">
                    <div class="content">
                        <div data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="300"
                            data-aos-offset="0" data-aos-duration="1500" class="tag-box">
                            <div class="tag">WELCOME TO MY PORTFOLIO</div>
                        </div>

                        <h1 data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="300"
                            data-aos-offset="0" data-aos-duration="2000" >I'm Junaid Bloch<br />Developer</h1>
                        <p data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="300"
                            data-aos-offset="0" data-aos-duration="2500" class="description">
                            In a world where you can be anything, be kind
                        </p>
                        <div data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="300"
                            data-aos-offset="0" data-aos-duration="3000" class="buttons">
                            <Link to="/Contactform" ><button className="btn-contactme">Contact me &gt;</button></Link>
                        </div>
                    </div>
                    </div>
                    <spline-viewer data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0" data-aos-duration="3500" class="robot-3d" url="https://prod.spline.design/ZEL-McrZjDececPP/scene.splinecode"></spline-viewer> 
            </main>      
        </div>
    )
}

export default Homepage
