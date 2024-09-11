import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HeadingNavbar } from './HeadingNavbar'
import { Footer } from './Footer'
import MainBookList from './MainBookList'
import { AddtoBook } from './AddtoBook'
import { UpdateBook } from './UpdateBook'

function App() {
  return (

    <Router>
        <HeadingNavbar />

      <Routes>
        <Route path="/" element={<MainBookList />} />
        <Route path="/addbook" element={<AddtoBook />} />
        <Route path="/updatebook/:id" element={<UpdateBook />} />
      </Routes>

        <Footer />
    </Router>


)
}
export default App;