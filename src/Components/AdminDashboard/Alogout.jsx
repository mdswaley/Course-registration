import React from 'react'
import Dashboard from './Dashboard'
import './logout.css'
import { Link } from 'react-router-dom'
const Alogout = () => {
  return (
    <div style={{display:'flex'}}>
      <Dashboard/>
      <div>
     

   <div class="logout-container" style={{position:'relative',left:'600px'}}>
        <h1>Logout</h1>
        <p>Are you sure you want to log out?</p>
       <Link to='/ahome'> <button id="logout-button" className='btn btn-info mx-1 mt-2'>Cancel</button></Link>
       <Link to='/log'> <button  id="logout-button" className='btn btn-danger mx-1 mt-2'>Logout</button></Link>
     
       
    </div>
</div>

    </div>
  )
}

export default Alogout
