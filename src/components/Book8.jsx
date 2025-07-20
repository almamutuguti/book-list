import React from 'react'
import book8 from '../../public/images/book8.jpg'

function Book8() {
  return (
    <div className='bg-transparent p-15 object-center text-left ml-10 mt-10 mb-20 pb-10 rounded-md shadow-2xl shadow-black'>
        <img 
            src= {book8}
            alt="Verity" 
            className= ' border-3 '
            style={{
                
                borderRadius: '5px'
            }}
               
        />
        <h3 className='mt-5'><span className='font-bold'>Name: </span> Verity</h3>
        <p><span className='font-bold'>Description: </span>A struggling writer is hired to finish a famous author's books—only to uncover a disturbing manuscript that blurs the line between truth and fiction.</p>
        <p><span className='font-bold'>Ratings⭐: </span>4.3</p>
        <p><span className='font-bold '>Price:</span>KES 1500</p>
    </div>
  )
}

export default Book8