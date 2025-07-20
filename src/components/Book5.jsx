import React from 'react'
import book5 from '../../public/images/book5.jpg'

function Book5() {
  return (
    <div className='bg-transparent p-15 object-center text-left ml-10 mt-10 mb-20 pb-10 rounded-md shadow-2xl shadow-black'>
        <img 
            src= {book5}
            alt="it ends with us" 
            className= ' border-3 '
            style={{
                
                borderRadius: '5px'
            }}
               
        />
        <h3 className='mt-5'><span className='font-bold'>Name: </span> It Ends With Us</h3>
        <p><span className='font-bold'>Description: </span>Lily Bloom falls for a charming neurosurgeon, Ryle Kincaid, but their relationship takes a dark turn when his violent past resurfaces. As Lily confronts the cycle of abuse she witnessed growing up, her first love, Atlas Corrigan, reappears forcing her to choose between repeating history or breaking it for good.</p>
        <p><span className='font-bold'>Ratings⭐: </span>4.1</p>
        <p><span className='font-bold '>Price:</span>KES 1300</p>
    </div>
  )
}

export default Book5