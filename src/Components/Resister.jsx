import {  useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Swal from "sweetalert2";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Resister(props) {
   let email1="admin1@gamil.com"

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    async function login(event) {
      console.log(event)
      if(email===''||password===''){
        toast(' fill all the field', {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        return;
      }
        event.preventDefault();
        try {
          await axios.post("http://localhost:8080/login", {
            email: email,
            password: password,
            }).then((res) => 
            {
             console.log(res.data);
             if (res.data.message === "email not match") 
             
             {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'email not exist',
                
              })
             } 
             else if(res.data.message === "login successfully")
             { 
              toast("login succesfully")
             
              if(email=="admin1@gmail.com"||email=="admin2@gmail.com"){
                navigate('/Ahome')
              }
              else{
                navigate('/dhome');
              }
             } 
              else 
             { 
              toast(' password  incorrect', {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
               
             }
          }, fail => {
           console.error(fail); // Error!
  });
        }

 
         catch (err) {
          alert(err);
        }
      
      }

    return (

       <div>
        <title>{props.title}</title>
        <ToastContainer/>
          <form className='h-50 mt-2'>
      <section className="h-50 gradient-custom mt-5"style={{height:"300px",background:"linear-gradient(to right,bisque,pink,bisque,#FDE5D4)"}}>
        <Navbar/>
     
  <div className="container ">
    <div className="row d-flex justify-content-center align-items-center">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white">
          <div className="card-body text-center">
            <div className="mb-md-5  ">
              <h2 className="fw-bold mb-2 text-uppercase" style={{color:'white'}}>Login</h2>
              <p style={{fontSize:'20px'}} className="text-white-50 mb-5">Please enter your email and password!</p>
             <br/> <label className="form-label">Email</label>
              <div className="form-outline form-white mb-4">
                <input type="email" id="typeEmailX" className="form-control form-control-lg" name='email' placeholder='enter your email'  value={email} required
  onChange={(event) => {
    setEmail(event.target.value);
  }} />
              
              </div>
              <label className="form-label" >Password</label>
              <div className="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" className="form-control form-control-lg" name='password' placeholder='enter your password'  value={password} required
  onChange={(event) => {
    setPassword(event.target.value);
  }}
/>
                
              </div>

            <button className="btn btn-primary btn-lg" type='submit' onClick={login} style={{padding:'0 px 25px 0 25px'}}> Login </button>

              

            </div>

            <div>
              <p className="mb-0" style={{color:'white',fontSize:'20px'}}><b>Don't have an account? </b><Link className="nav-link" to="/RS">go to sign up</Link>
              </p>
              
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</form>
<Footer/>

     </div>
    );
  }
  
  export default Resister;

 