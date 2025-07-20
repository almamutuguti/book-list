import React from 'react'
import book11 from '../../public/images/book11.jpg'

function Book11() {
  return (
    <div className='bg-transparent p-15 object-center text-left ml-10 mt-10 mb-20 pb-10 rounded-md shadow-2xl shadow-black'>
        <img 
            src= {book11}
            alt="twisted games" 
            className= ' border-3 '
            style={{
                
                borderRadius: '5px'
            }}
               
        />
        <h3 className='mt-5'><span className='font-bold'>Name: </span> Binding 13</h3>
        <p><span className='font-bold'>Description: </span>A shy girl with a traumatic past and a rugby star with hidden pain form a fragile bond at an elite Irish school—where love, healing, and heartbreak collide.</p>
        <p><span className='font-bold'>Ratings⭐: </span>4.4</p>
        <p><span className='font-bold '>Price:</span>KES 1500</p>
    </div>
  )
}

export default Book11