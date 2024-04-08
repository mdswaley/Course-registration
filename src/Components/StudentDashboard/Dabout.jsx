import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import './Dabout.css'
const Dabout = (props) => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [id, setid] = useState(null);
  const [gender, setgender] = useState(null);
  const [coursename, setcourse] = useState(null);
  const [password, setpassword] = useState(null);

  const [data, setdata] = useState([]);
  useEffect(() => {
    getList();
  }, []);
  function getList() {
    fetch("http://localhost:8080/api/get").then((result) => {
      result.json().then((resp) => {
        setdata(resp);
        setfirstname(resp[0].firstname);
        setlastname(resp[0].lastname);
        setemail(resp[0].email);
        setid(resp[0].id);
        setgender(resp[0].gender);
        setcourse(resp[0].coursename);
        setpassword(resp[0].password);
        console.log(resp);
      });
    });
  }
  return (
    <div style={{display:'flex'}}>
      <title>{props.title}</title>
      <Sidebar></Sidebar>
      
      
      <div className='container'>

    <div class="profile-container">
        <div class="profile-header">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlPFtcI6KH7WhuyjiiRrG56_Ct6XIzrKs_8YVQt-ishGtAqmkI0hUEePTi7RZlnQMM9so&usqp=CAU" alt="Profile Picture" height={'130px'} width={'150px'}/>
            <h1>{firstname} {lastname}</h1>
            <h5 style={{color:'black'}}>Email:-{email}</h5>
        </div>
        <div class="profile-body">
            <section>
                <h2>About Me</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </section>
            <section>
                <h2 className='mb-2'>Course</h2>
                <ul style={{cursor:'default'}}>
                    <li className='btn btn-warning'>HTML5</li>
                    <li className='btn btn-warning' >CSS3</li>
                    <li className='btn btn-warning'>JavaScript</li>
                    <li className='btn btn-warning'>React</li>
                </ul>
            </section>
        </div>
        <div class="profile-footer">
            <p>Contact: user@example.com</p>
          
        </div>
    </div>
      </div>
    </div>
  )
}

export default Dabout