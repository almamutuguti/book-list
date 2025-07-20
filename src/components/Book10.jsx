import React from 'react'
import book10 from '../../public/images/book10.jpg'

function Book10() {
  return (
    <div className='bg-transparent p-15 object-center text-left ml-10 mt-10 mb-20 pb-10 rounded-md shadow-2xl shadow-black'>
        <img 
            src= {book10}
            alt="amor cruel" 
            className= ' border-3 '
            style={{
                
                borderRadius: '5px'
            }}
               
        />
        <h3 className='mt-5'><span className='font-bold'>Name: </span> Amor Cruel</h3>
        <p><span className='font-bold'>Description: </span>Tate, a nursing student, moves in with her brother and meets Miles, a brooding pilot with emotional baggage. They start a physical-only relationship under two rules: don't ask about the past, don't expect a future. But as feelings grow, Tate must decide whether love is worth the pain Miles is hiding.</p>
        <p><span className='font-bold'>Ratings: </span>⭐4.6</p>
        <p><span className='font-bold '>Price:</span>KES 1900</p>
    </div>
  )
}

export default Book10