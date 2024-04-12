import React from "react";
import Dashboard from "./Dashboard";

const AProfile = ({user}) => {
  const { firstname, lastname, email } = user;
  return (
    <div style={{ display: "flex" }}>
      <Dashboard />
      <div className="mt-4" style={{ marginLeft: "30%" }}>
        <div className="card">
          <div className="card-header">
            <h3 style={{ textTransform: "capitalize" }}>
              {" "}
              information of the Admin
            </h3>
          </div>
          <div className="card-body">
          
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">1</th>
                 
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Name</th>
                  <td>{firstname}{lastname}</td>
                 
                </tr>
                <tr>
                  <th scope="row">Email</th>
                  <td>{email}</td>
                  
                </tr>
                {/* <tr>
                  <th scope="row">Password</th>
                  <td colspan="2">1234</td>
                 
                </tr> */}
              </tbody>
            </table>
          </div>
          <div className="card-footer"></div>
        </div>
      </div>
    </div>
  );
};

export default AProfile;
