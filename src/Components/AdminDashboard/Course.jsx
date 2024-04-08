import Swal from "sweetalert2";
import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import Dashboard from "./Dashboard";
function Course() {
  const [coursename, setcoursename] = useState("");
  const [author, setauthor] = useState("");
  const [coursedetail, setcoursedetail] = useState("");
  const [id, setid] = useState(null);
  const [gender, setgender] = useState(null);
  const [credit, setcredit] = useState(" ");

  const [data, setdata] = useState([]);
  useEffect(() => {
    getList();
  }, []);
  function getList() {
    fetch("http://localhost:8080/course/get").then((result) => {
      result.json().then((resp) => {
        setdata(resp);
        setcoursename(resp[0].coursename);
        setauthor(resp[0].author);
        setcoursedetail(resp[0].coursedetail);
        setid(resp[0].id);
        setcredit(resp[0].credit);
        console.log(resp);
      });
    });
  }

  function save() {
    // console.log(coursename,author,coursedetail);
    Swal.fire("Good job!", `${coursename}  save succesfully`, "success");
    let data = { coursename, author, coursedetail, gender, coursename ,credit};
    fetch("http://localhost:8080/course/save", {
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
    fetch(`http://localhost:8080/course/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
        Swal.fire("Good job!", `${id}  deleted succesfully`, "success");
        getList();
      });
    });
  }
  function selectuser(id) {

    console.log(data[id]);
    setcoursename(data[id - 1].coursename);
    setauthor(data[id - 1].author);
    setcoursedetail(data[id - 1].coursedetail);
    setid(data[id - 1].id);
    setgender(data[id - 1].gender);
    setcredit(data[id - 1].credit);
  }
  function updateuser() {
    Swal.fire("Good job!",`${id} update  succesfully`, "success");
    let item = { coursename, author, coursedetail, id, gender, coursename ,credit};
    fetch(`http://localhost:8080/course/${id}`, {
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
  return (
    <div style={{ display: "flex" }}>
      <Dashboard />

      <div className="col-md-12">
        <div className="Student" style={{ fontFamily: "Times New Roman" }}>
          <h1
            style={{ textDecoration: "underline" }}
            className="text-center"
          ></h1>
          <table
            border="1"
            className="table table-hover"
            style={{  fontWeight: "600" }}
          >
            <tr className="" style={{ color: "black" }}>
              <td>id</td>
              <td>course name</td>
              <td>course author</td>
              <td>coursedetail</td>
              <td>Course credit</td>
              <td colSpan={2}>Action</td>
            </tr>
            {data.map((item, i) => (
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.coursename}</td>
                <td>{item.author}</td>
                <td>{item.coursedetail}</td>
                <td>{item.credit}</td>
                {/* <td>{item.credit}</td> */}
             
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
                        src="https://atlas-content-cdn.pixelsquid.com/stock-images/textbooks-book-Va7kewA-600.jpg"
                        alt=""
                        height={"150px"}
                        width={"30px"}
                        style={{ marginLeft: "120px" }}
                      />
                    </center>
                    Update the course
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
                          <th scope="row">Enter course name</th>
                          <td>
                            <input
                              type="text"
                              value={coursename}
                              onChange={(e) => setcoursename(e.target.value)}
                              className="form-control mt-1"
                            />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Enter faculity</th>
                          <td>
                            <input
                              type="text"
                              value={author}
                              onChange={(e) => setauthor(e.target.value)}
                              className="form-control mt-1"
                            />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">credit</th>
                          <td><input
                              type="text"
                              value={credit}
                              onChange={(e) => setcredit(e.target.value)}
                              className="form-control mt-1"
                            /></td>
                          
                        </tr>
                        <tr>
                          <th scope="row">Enter the coursedetail</th>
                          <td>
                            {" "}
                            <input
                              type="coursedetail"
                              value={coursedetail}
                              onChange={(e) => setcoursedetail(e.target.value)}
                              className="form-control mt-1"
                            />
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
              className="btn btn-warning"
              data-toggle="modal"
              data-target="#exampleModal1"
            >
              Add the course
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
                        src="https://atlas-content-cdn.pixelsquid.com/stock-images/textbooks-book-Va7kewA-600.jpg"
                        alt=""
                        height={"150px"}
                        width={"30px"}
                        style={{ marginLeft: "120px" }}
                      />
                    </center>
                    Add new course
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
                          <th scope="row"> Enter course name</th>
                          <td>
                            {" "}
                            <input
                              type="text"
                              onChange={(e) => {
                                setcoursename(e.target.value);
                              }}
                              className="form-control mt-1"
                              name="coursename"
                              placeholder="type coursename here"
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Enter author name</th>
                          <td>
                            <input
                              type="text"
                              onChange={(e) => {
                                setauthor(e.target.value);
                              }}
                              className="form-control mt-1"
                              name="author"
                              placeholder="type author here"
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Enter description</th>
                          <td>
                            {" "}
                            <input
                              type="text"
                              onChange={(e) => {
                                setcoursedetail(e.target.value);
                              }}
                              className="form-control mt-1"
                              name="coursedetail"
                              placeholder="type coursedetail here"
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Enter the credit</th>
                          <td>
                            {" "}
                            <input
                              type="text"
                              onChange={(e) => {
                                setcredit(e.target.value);
                              }}
                              className="form-control mt-1"
                              name="credit"
                              placeholder="type credit here"
                            ></input>
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
                  <button className='btn btn-warning'color="warning" type="submit" onClick={save}>
                    save here
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Course;
