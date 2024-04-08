import React from 'react'
import Navbar from './Navbar'

import Footer from './Footer'
import Navbar2 from './Navbar2'

export default function About(props) {
  return (
    <div>
    <section class="page-section bg-primary" id="about">
        <Navbar/>
        <title>{props.title}</title>
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-8 text-center">
                        <h2 class="text-white mt-0">We've got what you need!</h2>
                        <hr class="divider divider-light" />
                        <p class="text-white-75 mb-4">Student subject registration is a process that allows students to enroll in courses or subjects offered by educational institutions. This process is a critical component of academic life and ensures that students have access to the courses they need to complete their degrees and pursue their educational goals. Here are some key aspects of student subject registration</p>
                        <a class="btn btn-light btn-xl" href="#services">Get Started! </a>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        </div>
  )
}

