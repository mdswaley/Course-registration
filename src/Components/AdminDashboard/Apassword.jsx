import React, { useState } from "react";
import Dashboard from "./Dashboard";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebaseconfig";
import Swal from "sweetalert2";
const Apassword = () => {
  const[value,setvalue]=useState({
    email:""
  });
  const handelsubmit=async(e)=>{
    
    const email=value.email;
    console.log(email)
    value.email=""
    e.preventDefault();
    sendPasswordResetEmail(auth,email).then(data=>{
      
Swal.fire('check your email')
    }).catch(err=>{alert(err.code)})
    e.preventDefault();

  }
  return (
    <div style={{ display: "flex" }}>
     <Dashboard/>
      <div>
        <div
          class="container mt-5"
          style={{ marginLeft: "500px", width: "1000px", fontSize: "10px" }}
        >
          <div class="row">
            <div class="col-md-4 col-md-offset-4">
              <div class="panel panel-default">
                <div class="panel-body">
                  <div class="text-center">
                    <h3>
                      <i class="fa fa-lock fa-4x"></i>
                    </h3>
                    <h3 class="text-center">update Password?</h3>
                    <p>You can reset your password here.</p>
                    <div class="panel-body">
                      <form
                        id="register-form"
                        role="form"
                        autocomplete="off"
                        class="form"
                      >
                        <div class="form-group">
                          <div class="input-group">
                            <span class="input-group-addon">
                              <i class="glyphicon glyphicon-envelope color-blue"></i>
                            </span>
                            <input
                              id="email"
                              name="email"
                              placeholder="email address"
                              class="form-control"
                              type="email"
                              onChange={(e) =>
                                setvalue((prev) => ({
                                  ...prev,
                                  email: e.target.value,
                                }))
                              }
                              required
                            />
                          </div>
                        </div>
                        <div class="form-group">
                          <button
                            class="btn btn-lg btn-primary btn-block mt-3"
                            value="Reset Password"
                            type="submit"
                            onClick={(e) => {
                              handelsubmit(e);
                            }}
                          >
                            Reset password
                          </button>
                        </div>

                        <input
                          type="hidden"
                          class="hide"
                          name="token"
                          id="token"
                          value=""
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apassword;
