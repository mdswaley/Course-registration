import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Swal from "sweetalert2";
import { login } from "./user-service";
import { dologin } from "./auto";
const Login1 = (props) => {
  const navigate1 = useNavigate();

  const [logindetail, setlogindetail] = useState({
    email: "",
    password: ""
  });
  const handleChange = (event, field) => {
    let avalue = event.target.value;
    setlogindetail({
      ...logindetail,
      [field]: avalue,
    });
  };
  const formsubmit = (event) => {
    event.preventDefault();
    console.log(logindetail);
    if (logindetail.email.trim() == "" || logindetail.password.trim() == "") {
      Swal.fire("fill all the feild");
      return;
    }
    //submit the data to the server
    login(logindetail)
      .then((data) => {
        console.log("user login");
        Swal.fire("login success");
        console.log(data);
        //save the to local storage
        dologin(data, () => {
          console.log("save to local storage");
          //redirect
        });
      })
      .catch((error) => {
        // console.log(error);
        Swal.fire("something went wrong");
      });
  };
  return (
    <div>
      <form className="h-50 mt-2" onSubmit={formsubmit}>
        <section
          className="h-50 gradient-custom mt-5"
          style={{
            height: "300px",
            background: "linear-gradient(to right,bisque,pink,bisque,#FDE5D4)",
          }}
        >
          <Navbar />
          <title>{props.title}</title>
          <div className="container ">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card bg-dark text-white">
                  <div className="card-body text-center">
                    <div className="mb-md-5  ">
                      <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                      <p
                        style={{ fontSize: "20px" }}
                        className="text-white-50 mb-5"
                      >
                        Please enter your login and password!
                      </p>
                      <br /> <label className="form-label">Email</label>
                      <div className="form-outline form-white mb-4">
                        <input
                          type="email"
                          id="typeEmailX"
                          className="form-control form-control-lg"
                          name="email"
                          placeholder="enter your email"
                          value={logindetail.email}
                          onChange={(e) => handleChange(e, "email")}
                        />
                      </div>
                      <label className="form-label">Password</label>
                      <div className="form-outline form-white mb-4">
                        <input
                          type="password"
                          id="typePasswordX"
                          className="form-control form-control-lg"
                          name="password"
                          placeholder="enter your password"
                          value={logindetail.password}
                          onChange={(e) => handleChange(e, "password")}
                        />
                      </div>
                      
                      <button
                        lassName="btn btn-outline-light btn-lg px-5"
                        type="submit"
                      >
                        {" "}
                        Login{" "}
                      </button>
                    </div>

                    <div>
                      <p
                        className="mb-0"
                        style={{ color: "white", fontSize: "20px" }}
                      >
                        <b>Don't have an account? </b>
                        <Link className="nav-link" to="/signup">
                          go to sign up
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
      <Footer />
    </div>
  );
};

export default Login1;
