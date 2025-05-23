import React from 'react'
import Navbar from '../components/navbar.js'

const Homepage = () => {
    return (
        <>
        <Navbar/>
            <main>
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
                        <a href="www.google.com" class="btn-contactme">Contact me &gt;</a>
                    </div>
                </div>
            </main>
            <spline-viewer data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0" data-aos-duration="3500" class="robot-3d" url="https://prod.spline.design/ZEL-McrZjDececPP/scene.splinecode"></spline-viewer>
        </>
    )
}

export default Homepage
