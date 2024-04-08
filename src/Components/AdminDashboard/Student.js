import Swal from "sweetalert2";
import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import Dashboard from "./Dashboard";
import SearchBox from "./SearchBox";
// import History from "./History";

function Student() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [id, setid] = useState(null);
  const [gender, setgender] = useState(null);
  const [coursename, setcourse] = useState(null);
  const [password, setpassword] = useState(" ");
  const [data, setdata] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState("All");


  useEffect(() => {
    getList();
  }, []);
  function getList() {
    fetch("http://localhost:8080/api/get").then((result) => {
      result.json().then((resp) => {
        const sortedData = resp.sort((a, b) =>
          a.firstname.localeCompare(b.firstname)
        );
        setdata(sortedData);
        // setdata(resp);
        // setfirstname(resp[0].firstname);
        // setlastname(resp[0].lastname);
        // setemail(resp[0].email);
        // setid(resp[0].id);
        // setgender(resp[0].gender);
        // setcourse(resp[0].coursename);
        // setpassword(resp[0].password);
        console.log(resp);
      });
    });
  }

  function save() {
    // console.log(firstname,lastname,email);
    Swal.fire("Good job!", `${firstname}  save succesfully`, "success");
    let data = { firstname, lastname, email, gender, coursename, password };
    fetch("http://localhost:8080/portal/save", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      console.log(result);
      getList();
    });
    document.getElementsByTagName("input")[0].value = null;
    document.getElementsByTagName("input")[1].value = null;
    document.getElementsByTagName("input")[2].value = null;
  }

  
  function deleteuser(id) {
    const firstNameToDelete = data.find(student => student.id === id).firstname;
    fetch(`http://localhost:8080/portal/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          // If the deletion is successful (status code 200-299),
          // update any necessary state and show success message
          // Set the last deleted student ID
          Swal.fire("Success!", `${firstNameToDelete} deleted successfully`, "success");
          getList(); // Refresh the student list
        } else {
          // If there's an error with the deletion, handle it accordingly
          throw new Error("Error deleting student: " + response.statusText);
        }
      })
      .catch((error) => {
        console.error(error); // Log any errors to the console
        // You can display an error message to the user if needed
        Swal.fire("Error!", "Failed to delete student", "error");
      });
  }

  function selectuser(id) {

    console.log(data[id]);
    setfirstname(data[id - 1].firstname);
    setlastname(data[id - 1].lastname);
    setemail(data[id - 1].email);
    setid(data[id - 1].id);
    setgender(data[id - 1].gender);
    setcourse(data[id - 1].coursename);
    setpassword(data[id - 1].password);
  }


  function updateuser() {
    Swal.fire("Good job!",`${id} update  succesfully`, "success");
    let item = { firstname, lastname, email, id, gender, coursename ,password};
    fetch(`http://localhost:9190/portal/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
        getList();
      });
    });
  }

  const filteredData = data.filter((item) => {
    const searchTermLowerCase = searchTerm.toLowerCase();
    
    if (searchTermLowerCase === "all") {
      return true; // Show all data
    }
  
    return (
      (item.firstname && item.firstname.toLowerCase().includes(searchTermLowerCase)) ||
      (item.lastname && item.lastname.toLowerCase().includes(searchTermLowerCase)) ||
      (item.email && item.email.toLowerCase().includes(searchTermLowerCase)) ||
      (item.gender && item.gender.toLowerCase().includes(searchTermLowerCase)) ||
      (item.coursename && item.coursename.toLowerCase().includes(searchTermLowerCase))
    );
  });
  

  return (
    <div style={{ display: "flex" }}>
      <Dashboard />
      <div className="col-md-10 text-center">
        <div className="Student" style={{ fontFamily: "Times New Roman" }}>
          {/* <h1
            style={{ textDecoration: "none" }}
            className="text-center"
          ></h1> */}

          {/*  */}
           <SearchBox setSearchTerm={setSearchTerm}/>
          {/*  */}
          <table
            border="1"
            className="table table-hover"
            style={{ fontWeight: "600", marginTop:"100px"}}
          >
            <tr className="" style={{ color: "black" }}>
              <td>SI No</td>
              <td>first name</td>
              <td>last name</td>
              <td>email</td>
              <td>Gender</td>
              <td>Course</td>

              <td colSpan={2}>Action</td>
            </tr>
            {filteredData.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>{item.coursename}</td>
                {/* <td>{item.password}</td> */}

                <td>
                  <button
                    className="btn btn-danger"
                    style={{ color: "black" }}
                    onClick={() => deleteuser(item.id)}
                  >
                    delete
                  </button>
                  <Button
                    color="info"
                    className="mx-1"
                    onClick={() => {
                      selectuser(item.id);
                    }}
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Update
                  </Button>
                </td>
              </tr>
            ))}
          </table>

          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    <center>
                      <img
                        src="https://w7.pngwing.com/pngs/17/243/png-transparent-computer-icons-arshad-ayub-graduate-business-school-students-miscellaneous-logo-monochrome.png"
                        alt=""
                        height={"100px"}
                        width={"30px"}
                        style={{ marginLeft: "120px" }}
                      />
                    </center>
                    Update the student
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div>
                    <table className="table">
                      <tbody>
                        <tr>
                          <th scope="row">Enter First Name</th>
                          <td>
                            <input
                              type="text"
                              value={firstname}
                              onChange={(e) => setfirstname(e.target.value)}
                              className="form-control mt-1"
                            />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Enter Last Name</th>
                          <td>
                            <input
                              type="text"
                              value={lastname}
                              onChange={(e) => setlastname(e.target.value)}
                              className="form-control mt-1"
                            />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">password</th>
                          <td>
                            <input
                              type="text"
                              value={password}
                              // onChange={(e) => setpassword(e.target.value)}
                              className="form-control mt-1"
                            />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Enter the email</th>
                          <td>
                            {" "}
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setemail(e.target.value)}
                              className="form-control mt-1"
                            />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Gender</th>
                          <td>Male or female</td>
                        </tr>
                        <tr>
                          <th scope="row">Subject</th>
                          <td>
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              onChange={(e) => setcourse(e.target.value)}
                            >
                              <option selected>Select the course</option>
                              <option value="ST DOMAIN">ST DOMAIN</option>
                              <option value="MACHINE LEARNING">
                                MACHINE LEANING
                              </option>
                              <option value="CLOUD DOMAIN">CLUOD DOMAIN</option>
                              <option value="AR AND VR">AR AND VR</option>
                            </select>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <Button color="primary" onClick={updateuser}>
                    update{" "}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <center>
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModal1"
            >
              Add the Student
            </button>
          </center>

          <div
            className="modal fade"
            id="exampleModal1"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    <center>
                      <img
                        src="https://w7.pngwing.com/pngs/17/243/png-transparent-computer-icons-arshad-ayub-graduate-business-school-students-miscellaneous-logo-monochrome.png"
                        alt=""
                        height={"100px"}
                        width={"30px"}
                        style={{ marginLeft: "120px" }}
                      />
                    </center>
                    Add new Student
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div id="profile-details">
                    <table className="table">
                      <tbody>
                        <tr>
                          <th scope="row"> Enter First Name</th>
                          <td>
                            {" "}
                            <input
                              type="text"
                              onChange={(e) => {
                                setfirstname(e.target.value);
                              }}
                              className="form-control mt-1"
                              name="firstname"
                              placeholder="type firstname here"
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Enter Last Name</th>
                          <td>
                            <input
                              type="text"
                              onChange={(e) => {
                                setlastname(e.target.value);
                              }}
                              className="form-control mt-1"
                              name="lastname"
                              placeholder="type lastname here"
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Enter the email</th>
                          <td>
                            {" "}
                            <input
                              type="email"
                              onChange={(e) => {
                                setemail(e.target.value);
                              }}
                              className="form-control mt-1"
                              name="email"
                              placeholder="type email here"
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Enter the password</th>
                          <td>
                            {" "}
                            <input
                              type="password"
                              onChange={(e) => {
                                setpassword(e.target.value);
                              }}
                              className="form-control mt-1"
                              name="password"
                              placeholder="type password here"
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Gender</th>
                          <td colSpan={-2}>
                            {" "}
                            <input
                              type="radio"
                              value={"male"}
                              name="main"
                              onChange={(e) => setgender(e.target.value)}
                              className="form-check-input"
                            />
                            Male{" "}
                            <input
                              type="radio"
                              name="main"
                              value={"female"}
                              onChange={(e) => setgender(e.target.value)}
                              className="form-check-input"
                            />
                            Female
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Select the course</th>
                          <td>
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              onChange={(e) => setcourse(e.target.value)}
                            >
                              <option selected>Select the course</option>
                              <option value="ST DOMAIN">ST DOMAIN</option>
                              <option value="MACHINE LEARNING">
                                MACHINE LEANING
                              </option>
                              <option value="CLOUD DOMAIN">CLUOD DOMAIN</option>
                              <option value="AR AND VR">AR AND VR</option>
                            </select>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <Button color="warning" type="submit" onClick={save}>
                    save here
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Student;
