import React from 'react'
import { useGlobalContext } from './context'

const Search = () => {
    const{query,searchCourse}=useGlobalContext();
    
  return (
    <div style={{marginLeft:'450px'}}>
    <h3 className='mb-2 text-center'>Different course are there</h3>
    <form onSubmit={(e)=>e.preventDefault()}>
        <div>
            <input type='text' placeholder='search here' className='form-control' value={query} onChange={(e)=>searchCourse(e.target.value)}></input>
        </div>
    </form>
    </div>
  )
}

export default Search
