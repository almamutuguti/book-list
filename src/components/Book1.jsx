import React from 'react'
import book1 from '../../public/images/book1.jpg'

function Book1() {
  return (
    <div className='bg-transparent p-15 object-center text-left ml-10 mt-10 mb-20 pb-10 rounded-md shadow-2xl shadow-black '>
        <img 
            src= {book1}
            alt="twisted games" 
            className= ' border-3 '
            style={{
              borderRadius: '5px'
            }}
               
        />
        <h3 className='mt-5'><span className='font-bold'>Name: </span> Twisted Games</h3>
        <p><span className='font-bold'>Description: </span>A grumpy Sunshine romance between Ava and her overprotective brother's bestfriend
        ,Alex.Full of emotional trauma secrets and steamy tension</p>
        <p><span className='font-bold'>Ratings⭐: </span>4.1</p>
        <p><span className='font-bold '>Price:</span>KES 1300</p>
    </div>
  )
}

export default Book1