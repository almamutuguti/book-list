import React from 'react'
import book3 from '../../public/images/book3.jpg'

function Book3() {
  return (
     <div className='bg-transparent p-15 object-center text-left ml-10 mt-10 mb-20 pb-10 rounded-md shadow-2xl shadow-black '>
            <img 
                src= {book3}
                alt="king of wrath" 
                className= ' border-3 '
                style={{
                    
                    borderRadius: '5px'
                }}
                   
            />
            <h3 className='mt-5'><span className='font-bold'>Name: </span> King Of Wrath</h3>
            <p><span className='font-bold'>Description: </span>A cold-hearted CEO is forced into a marriage of convenience—but sparks fly when business turns personal in this sizzling enemies-to-lovers romance.</p>
            <p><span className='font-bold'>Ratings⭐: </span>4.1</p>
            <p><span className='font-bold '>Price:</span>KES 1130</p>
        </div>
  )
}

export default Book3