import React from 'react'
import Home from './components/home/Home'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import BabyShaggy from './components/babyshaggy/BabyShaggy'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Navigate to='/linhaseformas' replace/>} /> */}
        <Route path='/' element={<Home />} />
        {/* <Route path='/babyshaggy' element={<BabyShaggy />} /> */}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App