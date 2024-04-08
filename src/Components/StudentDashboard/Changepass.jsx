import React from "react";
import Sidebar from "../Sidebar";

const Changepass = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
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
                              required
                            />
                          </div>
                        </div>
                        <div class="form-group">
                          <button
                            class="btn btn-lg btn-primary btn-block mt-3"
                            value="Reset Password"
                            type="submit"
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

export default Changepass;
