import React, { useEffect , useState } from "react";
import Sidebar from "../Sidebar";
import "./Home.css";


const Home = (props) => {
  const [fixedHeight, setFixedHeight] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) { // Adjust the threshold as needed
        setFixedHeight(false);
      } else {
        setFixedHeight(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <title>{props.title}</title>

      <Sidebar></Sidebar>

      <div className={`container-fluid ${fixedHeight ? 'fixed-height' : ''}`}>
        <div className="container-xxl py-5">
          <div className="container-fluid">
            <div className="row g-5">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="position-relative h-100">
                  <img
                    className="img-fluid position-absolute w-100 h-100"
                    src="https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1511848673/1511848671.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                <h6 className="section-title bg-white text-start text-primary pe-3">
                  subject registration
                </h6>
                <h1 className="mb-4">Welcome to Student Dashboard</h1>
                <p className="mb-4">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.
                </p>
                <p className="mb-4">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo magna dolore erat amet
                </p>
                <div className="row gy-2 gx-4 mb-4">
                  <div className="col-sm-6">
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-primary me-2"></i>
                      Skilled Instructors
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-primary me-2"></i>
                      Online classNamees
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-primary me-2"></i>
                      International Certificate
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-primary me-2"></i>
                      Skilled Instructors
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-primary me-2"></i>
                      Online classNamees
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-primary me-2"></i>
                      International Certificate
                    </p>
                  </div>
                </div>
                <a
                  className="btn btn-primary py-3 px-5 mt-2"
                  href=""
                  data-toggle="modal"
                  data-target="#exampleModalLong"
                >
                  Read More
                </a>
              </div>

              <div
                class="modal fade"
                id="exampleModalLong"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLongTitle"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLongTitle">
                        Modal title
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Suscipit doloribus cupiditate magni deserunt sapiente
                      veniam quidem est et voluptate omnis beatae neque, vitae
                      nihil fugiat voluptatem, obcaecati recusandae quod
                      similique. Nesciunt quo consectetur et praesentium
                      pariatur quidem eius sunt expedita, facilis rem
                      consequuntur. Doloremque, dolor! Pariatur esse
                      consequuntur quae modi!
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container-xxl py-5">
          <div class="container">
            <div class="row g-4">
              <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="service-item text-center pt-3">
                  <div class="p-4">
                    <i class="fa fa-3x fa-graduation-cap text-primary mb-4"></i>
                    <h5 class="mb-3">Skilled Instructors</h5>
                    <p>
                      Diam elitr kasd sed at elitr sed ipsum justo dolor sed
                      clita amet diam
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                <div class="service-item text-center pt-3">
                  <div class="p-4">
                    <i class="fa fa-3x fa-globe text-primary mb-4"></i>
                    <h5 class="mb-3">Online Classes</h5>
                    <p>
                      Diam elitr kasd sed at elitr sed ipsum justo dolor sed
                      clita amet diam
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                <div class="service-item text-center pt-3">
                  <div class="p-4">
                    <i class="fa fa-3x fa-home text-primary mb-4"></i>
                    <h5 class="mb-3">Home Projects</h5>
                    <p>
                      Diam elitr kasd sed at elitr sed ipsum justo dolor sed
                      clita amet diam
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                <div class="service-item text-center pt-3">
                  <div class="p-4">
                    <i class="fa fa-3x fa-book-open text-primary mb-4"></i>
                    <h5 class="mb-3">Book Library</h5>
                    <p>
                      Diam elitr kasd sed at elitr sed ipsum justo dolor sed
                      clita amet diam
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            overflow: "hidden",
            position: "relative",
            backgroundSize: "contain",
            marginLeft: "20px",
          }}
        >
          <svg
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              fill: "#2b8282",
              width: "146%",
              transform: "rotate(180deg) scaleX(-1)",
            }}
          >
            <path
              d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
              opacity=".25"
            />
            <path
              d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
              opacity=".5"
            />
            <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
          </svg>
        </div>
      </div>
    </div>
  );
};
export default Home;
