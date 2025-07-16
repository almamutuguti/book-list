import React from 'react'
import './index.css'
import Book1 from './components/Book1'
import Book2 from './components/Book2'
import Book3 from './components/Book3'
import Book4 from './components/Book4'

function App() {
  return (
    <div className='grid grid-cols-3'>
      <Book1/>
      <Book2/>
      <Book3/>
      <Book4/>
    </div>
  )
}

export default App
