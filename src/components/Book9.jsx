import React from 'react'
import book9 from '../../public/images/book9.jpg'

function Book9() {
  return (
    <div className='bg-transparent p-15 object-center text-left ml-10 mt-10 mb-20 pb-10 rounded-md shadow-2xl shadow-black'>
        <img 
            src= {book9}
            alt="november 9" 
            className= ' border-3 '
            style={{
                
                borderRadius: '5px'
            }}
               
        />
        <h3 className='mt-5'><span className='font-bold'>Name: </span> November 9</h3>
        <p><span className='font-bold'>Description: </span>Two strangers agree to meet once a year on November 9—but secrets and heartbreak threaten to unravel their love story.</p>
        <p><span className='font-bold'>Ratings⭐: </span>4.6</p>
        <p><span className='font-bold '>Price:</span>KES 1600</p>
    </div>
  )
}

export default Book9