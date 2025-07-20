import React from 'react'
import book12 from '../../public/images/book12.jpg'

function Book12() {
  return (
    <div className='bg-transparent p-15 object-center text-left ml-10 mt-10 mb-20 pb-10 rounded-md shadow-2xl shadow-black'>
        <img 
            src= {book12}
            alt="haunting adeline" 
            className= ' border-3 '
            style={{
                
                borderRadius: '5px'
            }}
               
        />
        <h3 className='mt-5'><span className='font-bold'>Name: </span> Twisted Games</h3>
        <p><span className='font-bold'>Description: </span>A young author inherits a haunted mansion—and becomes the obsession of a morally gray vigilante stalker whose dark secrets rival the house's own.</p>
        <p><span className='font-bold'>Ratings⭐: </span>4.4</p>
        <p><span className='font-bold '>Price:</span>KES 1800</p>
    </div>
  )
}

export default Book12