import React from 'react'
import "./Service.css"
import Navbar from './Navbar'
import Footer from './Footer'
export default function Service(props) {
  return (
    <>
    <section className="page-section" id="services">
        <Navbar/>
         <title>{props.title}</title>
    <div className="container px-4 px-lg-5">
        <h2 className="text-center mt-0">This is our course</h2>
        <hr className="divider" />
        <div className="row gx-4 gx-lg-5">
            <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                    <div className="mb-2"><i className="bi-gem fs-1 text-primary"></i></div>
                    <h3 className="h4 mb-2">Domain Courses</h3>
                    <p className="text-muted mb-0">Our themes are updated regularly to keep them bug free!</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                    <div className="mb-2"><i className="bi-laptop fs-1 text-primary"></i></div>
                    <h3 className="h4 mb-2">Core Courses</h3>
                    <p className="text-muted mb-0">All dependencies are kept current to keep things fresh.</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                    <div className="mb-2"><i className="bi-globe fs-1 text-primary"></i></div>
                    <h3 className="h4 mb-2">Skill Courses</h3>
                    <p className="text-muted mb-0">You can use this design as is, or you can make changes!</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                    <div className="mb-2"><i className="bi-heart fs-1 text-primary"></i></div>
                    <h3 className="h4 mb-2">Certificate Courses</h3>
                    <p className="text-muted mb-0">Is it really open source if it's not made with love?</p>
                </div>
            </div>
        </div>
        <div className="row gx-4 gx-lg-5">
            <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                    <div className="mb-2"><i className="bi-gem fs-1 text-primary"></i></div>
                    <h3 className="h4 mb-2">Advanced Certificate Courses</h3>
                    <p className="text-muted mb-0">Our themes are updated regularly to keep them bug free!</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                    <div className="mb-2"><i className="bi-laptop fs-1 text-primary"></i></div>
                    <h3 className="h4 mb-2">Diploma courses</h3>
                    <p className="text-muted mb-0">All dependencies are kept current to keep things fresh.</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                    <div className="mb-2"><i className="bi-globe fs-1 text-primary"></i></div>
                    <h3 className="h4 mb-2">Assessment Criterion</h3>
                    <p className="text-muted mb-0">You can use this design as is, or you can make changes!</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                    <div className="mb-2"><i className="bi-heart fs-1 text-primary"></i></div>
                    <h3 className="h4 mb-2">Other Information</h3>
                    <p className="text-muted mb-0">Is it really open source if it's not made with love?</p>
                </div>
            </div>
        </div>
    </div>
  
</section>
  <Footer/>
  </>
  )
}
