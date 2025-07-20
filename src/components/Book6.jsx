import React from 'react'
import book6 from '../../public/images/book6.jpg'

function Book6() {
  return (
    <div className='bg-transparent p-15 object-center text-left ml-10 mt-10 mb-20 pb-10 rounded-md shadow-2xl shadow-black'>
        <img 
            src= {book6}
            alt="its starts with us" 
            className= ' border-3 '
            style={{
                
                borderRadius: '5px'
            }}
               
        />
        <h3 className='mt-5'><span className='font-bold'>Name: </span> It Starts With Us</h3>
        <p><span className='font-bold'>Description: </span>Lily reunites with her first love, Atlas, and tries to build a future with him—while navigating co-parenting with her abusive ex-husband.</p>
        <p><span className='font-bold'>Ratings⭐: </span>4.5</p>
        <p><span className='font-bold '>Price:</span>KES 1235</p>
    </div>
  )
}

export default Book6