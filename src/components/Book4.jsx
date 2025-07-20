import React from 'react'
import book4 from '../../public/images/book4.jpg'

function Book4() {
  return (
    <div className='bg-transparent p-15 object-center text-left ml-10 mt-10 mb-20 pb-10 rounded-md shadow-2xl shadow-black '>
        <img 
            src= {book4}
            alt="twisted games" 
            className= ' border-3 '
            style={{
                
                borderRadius: '5px'
            }}
               
        />
        <h3 className='mt-5'><span className='font-bold'>Name: </span> Twisted Hate</h3>
        <p><span className='font-bold'>Description: </span>A fiery law student and a cocky doctor clash in a steamy enemies-to-lovers romance. Jules Ambrose and Josh Chen can't stand each other—until one explosive night leads to a no-strings-attached arrangement that spirals into something deeper.</p>
        <p><span className='font-bold'>Ratings⭐: </span>4.3</p>
        <p><span className='font-bold '>Price:</span>KES 1300</p>
    </div>
  )
}

export default Book4