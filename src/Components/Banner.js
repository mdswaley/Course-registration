import React from 'react'
import './totalcss.css'
import { Link } from 'react-router-dom'
import course from '../video/course-video.mp4'
import Navbar from './Navbar'
import Footer from './Footer'
// import Navbar2 from './Navbar2'
const Banner = (props) => {
  return (
    <div>
      <title>{props.title}</title>
      <section className="section main-banner" data-section="section1">
        <Navbar/>
      <video  id="bg-video" autoPlay loop muted controls src={course} >
      </video>
      <div className="video-overlay header-text">
          <div className="container" style={{position:'relative',top:'400px'}}>
            <div className="row">
              <div className="col-lg-12">
                <div className="caption">
              <h6>Hello Students</h6>
              <h2>Welcome to subject registration</h2>
              <p>A student subject registration project is a software system typically used by educational institutions to manage the process of students registering for courses or subjects each semester or academic term</p>
              <div className="main-button-red">
                  <div className="scroll-to-section"><a href="#contact"><Link to="/log">Join Us Now!</Link></a></div>
              </div>
          </div>
              </div>
            </div>
          </div>
      </div>
  </section>
  <Footer/>
    </div>
  )
}

export default Banner
