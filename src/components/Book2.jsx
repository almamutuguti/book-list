import React from 'react'
import book2 from '../../public/images/book2.jpg'

function Book2() {
  return (
    <div className='bg-transparent p-15 object-center text-left ml-10 mt-10 mb-20 pb-10 rounded-md shadow-2xl shadow-black'>
            <img 
                src= {book2}
                alt="twisted lies" 
                className= ' border-3 '
                style={{
                    
                    borderRadius: '5px'
                }}
                   
            />
            <h3 className='mt-5'><span className='font-bold'>Name: </span> Twisted Lies</h3>
            <p><span className='font-bold'>Description: </span>A brooding billionaire with a dark past and an online influencer haunted by secrets forge a fake relationship that quickly blurs into something dangerously real.</p>
            <p><span className='font-bold'>Ratings⭐: </span>4.3</p>
            <p><span className='font-bold '>Price:</span>KES 700</p>
        </div>
  )
}

export default Book2