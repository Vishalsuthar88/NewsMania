import React from 'react'
import loading from '../Infinity@1x-1.0s-200px-200px.gif'

const Spinner=()=> {
    return (
      <div >
        <img className='mx-auto d-block my-3' style={{height: '50px',width:'50px'}} src={loading} alt="loading" />
      </div>
    )
  
}

export default Spinner
  