import React, { useState } from 'react'
import './index.css'
import List from './components/List'
import AddBook from './components/AddBook'

import Book1 from './components/Book1'
import Book2 from './components/Book2'
import Book3 from './components/Book3'
import Book4 from './components/Book4'
import Book5 from './components/Book5'
import Book6 from './components/Book6'
import Book7 from './components/Book7'
import Book8 from './components/Book8'
import Book9 from './components/Book9'
import Book10 from './components/Book10'
import Book11 from './components/Book11'
import Book12 from './components/Book12'
import Book13 from './components/Book13'




function App() {
  const initialBooks = [
    { id: 1, component: <Book1 /> },
    { id: 2, component: <Book2 /> },
    { id: 3, component: <Book3 /> },
    { id: 4, component: <Book4 /> },
    { id: 5, component: <Book5 /> },
    { id: 6, component: <Book6 /> },
    { id: 7, component: <Book7 /> },
    { id: 8, component: <Book8 /> },
    { id: 9, component: <Book9 /> },
    { id: 10, component: <Book10 /> },
    { id: 11, component: <Book11 /> },
    { id: 12, component: <Book12 /> },
    { id: 13, component: <Book13 /> }
  ];

  const [books, setBooks] = useState(initialBooks);

  const addBook = (data) => {
    const NewBook = () => (
      <div className='bg-transparent p-15 object-center text-left ml-10 mt-10 mb-20 pb-10 rounded-md shadow-2xl shadow-black '>
        <img
          src={URL.createObjectURL(data.image)}
          alt={data.name}
          className=' border-3 '
          style={{
            borderRadius: '5px'
          }}

        />
        <h3 className='mt-5'><span className='font-bold'>Name: </span> {data.name}</h3>
        <p><span className='font-bold'>Description: </span>{data.description}</p>
        <p><span className='font-bold'>Ratings: </span>⭐{data.ratings}<sub>5</sub></p>
        <p><span className='font-bold '>Price:</span>KES {data.price}</p>
      </div>
    );

    setBooks([...books, { id: Date.now(), component: <NewBook />}]);
  };

  const deleteBook = (idToDelete) => {
    setBooks(books.filter(book => book.id !== idToDelete));
  };
  

  return (
    <div className='p-6'>
      <AddBook onAdd={addBook}/>
      <List books={books} onDelete={deleteBook}/>
    </div>
  )
}

export default App
