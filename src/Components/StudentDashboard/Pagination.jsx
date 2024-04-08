import React from 'react'
import { useGlobalContext } from './context'
import { Button } from 'antd';

const Pagination = () => {
    const{page,nbpages,getPrevPage,getNextPage}=useGlobalContext();
  return (
    <div>
      <div>
        <div className="pagination mt-3 " style={{marginLeft:'600px'}}>
            <button onClick={()=>getPrevPage()} className='btn btn-warning'>PREV</button>
            <p className='mx-2 mt-2'> {page+1} of 52 </p>
            <button onClick={()=>getNextPage()} color='warning'className='btn btn-primary '>NEXT</button>
            
        </div>
      </div>
    </div>
  )
}

export default Pagination
