import React from 'react'
import book7 from '../../public/images/book7.jpg'

function Book7() {
  return (
    <div className='bg-transparent p-15 object-center text-left ml-10 mt-10 mb-20 pb-10  rounded-md shadow-2xl shadow-black'>
        <img 
            src= {book7}
            alt="ugly love" 
            className= ' border-3 '
            style={{
                
                borderRadius: '5px'
            }}
               
        />
        <h3 className='mt-5'><span className='font-bold'>Name: </span>Ugly Love</h3>
        <p><span className='font-bold'>Description: </span>A guarded pilot and a nursing student agree to a no-strings fling—but buried trauma and growing feelings make love anything but simple.</p>
        <p><span className='font-bold'>Ratings⭐: </span>4.6</p>
        <p><span className='font-bold '>Price:</span>KES 1300</p>
    </div>
  )
}

export default Book7