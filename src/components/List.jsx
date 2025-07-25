import React, { Component } from 'react'


function List({books, onDelete}) {
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:mx-auto sm:mx-auto md:mx-auto gap-6 mt-10'>
      {books.map(({id, component}) => (
        <div key={id} className='relative'>
          {component}
          <button
          onClick={() => onDelete(id)}
          className='absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded'>
            Delete
          </button>
        </div>
      ))}

    </div>
    
  )
}

export default List