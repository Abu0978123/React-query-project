// import { useState } from 'react'
// import './App.css'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import Products from './products/Products'
// import Home from './Home'
// import Product from './products/Product'

import { Link } from "react-router-dom"

function App() {
  return (
  <div>
        <h1>Home Page</h1>
        <Link className='underline' to={'/products'}>
            Products
        </Link>
    </div>
  )
}

export default App
