import React from 'react'
import book13 from '../../public/images/book13.jpg'

function Book13() {
  return (
    <div className='bg-transparent p-15 object-center text-left ml-10 mt-10 mb-20 pb-10 rounded-md shadow-2xl shadow-black'>
        <img 
            src= {book13}
            alt="a court of silver flames" 
            className= ' border-3 '
            style={{
                
                borderRadius: '5px'
            }}
               
        />
        <h3 className='mt-5'><span className='font-bold'>Name: </span> A Court Of Silver Flames</h3>
        <p><span className='font-bold'>Description: </span>Nesta Archeron, haunted by trauma and guilt, is forced into warrior training with Cassian—a brooding Fae general. As she battles inner demons and external threats, she discovers strength, sisterhood, and a fiery romance that could heal or destroy her.</p>
        <p><span className='font-bold'>Ratings⭐: </span>4.8</p>
        <p><span className='font-bold '>Price:</span>KES 1600</p>
    </div>
  )
}

export default Book13