import React from 'react'
import NavBar from './components/NavBar'
import ProductList from './components/ProductList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductDisplay from './components/ProductDisplay'

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element ={<ProductList/>}/>
        <Route path="/product/:id" element={<ProductDisplay />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App