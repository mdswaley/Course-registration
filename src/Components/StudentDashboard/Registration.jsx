import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import { useGlobalContext } from './context'
import './Registration.css'
import Search from './Search'
import Pagination from './Pagination'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Registration = (props) => {
  const [checked, setChecked] = useState(false);
  
  const handleChange = (e) => {
   
    setChecked(e.target.checked);
    // e.preventDefault();

    if (e.target.checked) {
      toast('selected', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
          // e.preventDefault();
     
    }
  };



 const{hits,nbpages,isloading}=useGlobalContext();
  if(isloading){
    return(
      <>
      <h1>loading....</h1>
      </>
    );
    
  }
  return (
    <div style={{display:'flex'}}>
      <title>{props.title}</title>
      <Sidebar/>
      <div style={{fontSize:'20px'}} >
        <Search/>
        <Pagination/>
        {/* <h1>api fech</h1> */}
        {hits.map((curPost)=>{
          const{title,author,objectID,url,num_comments}=curPost;
          return<>
          <div className="card mt-3" style={{marginLeft:'400px'}}>
            
            <h4>Subject name:-{title}</h4>
            <h5>course code:-{objectID}</h5>
            <p>faculty name:- {author}</p>
            <div className="card-button">
              <a href={url} target='_blank'  style={{color:'red'}}>Read more</a> 
             

            <input class="form-check-input" type="checkbox" checked={checked}  style={{color:'black'}} id="flex" onChange={handleChange} />
            </div>
          </div>
          <ToastContainer/>
          </>
        })}
       
      </div>
    </div>
  )
}

export default Registration
