import React from 'react'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Logout = () => {
  function main(){
    toast('logout succesfully', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  return (
    <div style={{display:'flex'}}>
      <Sidebar/>
     <div>
      <div className="container mt-5">
        <div className="row ">
          <div className="col-md-6 shadow-lg mt-2" style={{width:'300px',height:"150px",position:'relative',left:'500px'}}>
            <h4 className='text-center mt-4'>Are you want to logout?</h4><br></br>
            <div style={{marginLeft:"10px"}}>
          <Link to='/dhome'> <button className='btn btn-primary mx-4' >Cancel</button></Link> 
          <Link to='/log'> <button className='btn btn-danger mx-4'onClick={main} >logout</button></Link>
           <ToastContainer/>
           </div>
          </div>
        </div>
      </div>
     </div>
     {/* <ToastContainer /> */}
    </div>
  )
}

export default Logout
