import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import Navbar from './Navbar'
import { service } from './user-service'
import Swal from 'sweetalert2'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer'

const Signup1 = (props) => {

    const[data,setdata]=useState({
        firstname:'',
        lastname:'',
        email:'',
        gender:'',
        password:'',
       
    })
    const[error,setError]=useState({
        errors:{},
        isError:false
    })
    useEffect(()=>{
        console.log(data)

    },[data])
const handleChange=(event,property)=>{
   setdata({...data,[property]:event.target.value})
}
const submitform=(event)=>{
   event.preventDefault();
    if(!data.firstname||!data.lastname||!data.email||!data.password||!data.password){
        toast.error("plz fill all the field")
        event.preventDefault();
        return;
    }
    
   
    
   //call the api
   //event.preventDefault();
   service(data).then((resp)=>{
    console.log(resp);
    
    Swal.fire(
        'Good job!',
        `${resp.firstname} Register successfully`,
        'success'
      )
      setdata({
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        gender:''
      })
      

   }).catch((error)=>{
    console.log(error);
    //handel
    setError({
        errors:error,
        isError:true
    })
   })
}

 
  return (
    <div>
      <title>{props.title}</title>
      
      <section className="login" style={{background:"#BFACB5"}}>
        <Navbar/>

<div className="px-4 py-5 px-md-5 text-center text-lg-start">
  <div className="container mt-5">
    {/* {JSON.stringify(data)} */}
    <div className="row gx-lg-5 align-items-center">
      <div className="col-lg-6 mb-5 mb-lg-0">
        <h1 className="my-5 di splay-3 fw-bold ls-tight">
          The student <br />
          <span className="text-primary">Register here...</span>
        </h1>
        <p >
        Creating an effective signup page is a crucial part of building a student subject registration system or any application that requires user registration.
        </p>
      </div>

      <div className="col-lg-6 mb-5 mb-lg-0">
        <div className="card">
          <div className="card-body py-5 px-md-5">
            <form onSubmit={submitform} >
              {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                  <label className="form-label" >First name</label>
                    <input type="text" id="form3Example1" className="form-control" name='firstname'  placeholder='enter first name'  onChange={(e)=>handleChange(e,'firstname')} value={data.firstname} />
                    
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                  <label className="form-label" >Last name</label>
                    <input type="text" id="form3Example2" className="form-control" name='lastname'   placeholder='enter last name' onChange={(e)=>handleChange(e,'lastname')}value={data.lastname} />
                  
                  </div>
                </div>
              </div>
              <div className="form-outline mb-4">
              <label className="form-label">Email address</label>
                <input type="email" id="form3Example3" className="form-control" name='email'    placeholder='enter email' onChange={(e)=>handleChange(e,'email')} value={data.email}/>
               
              </div>
              <label className="form-label">Select your Gender</label>
              <div class="form-check">
              
  <input class="form-check-input" type="radio" name="gender" id="flexRadioDefault1" value="Male"  onChange={(e)=>handleChange(e,'gender')}  />
  <label class="form-check-label" for="flexRadioDefault1">
   Male
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="gender" id="flexRadioDefault2" value="Female"  onChange={(e)=>handleChange(e,'gender')} />
  <label class="form-check-label" for="flexRadioDefault2">
   Female
  </label>
</div>
              <div className="form-outline mb-4">
              <label className="form-label" >Password</label>
                <input type="password" id="form3Example4" className="form-control" name='password'   placeholder='enter password' onChange={(e)=>handleChange(e,'password')} value={data.password} />
                
              </div>
             <h6 style={{color:"red"}}></h6>

           
              <button type="submit" className="btn btn-primary btn-block mb-4">
                Sign up
              </button>

          
              <div className="text-center">
             <span> <b>Already have account?</b></span>  <span><Link className="nav-link" to="/log">click here to login</Link> </span>
               
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<ToastContainer/>
</section>
<Footer/>
    </div>

  )
}


export default Signup1;

