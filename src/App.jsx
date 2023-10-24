import React from 'react'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import LuckyTable from './pages/LuckyTable'
import Result from './pages/Result'
import "./App.css"

const App = () => {
  return (
    <div className='min-h-screen  text-white bg-black'>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/lucky-table' element={<LuckyTable/>} />
        <Route path='/result' element={<Result/>} />
      </Routes>

    </div>
  )
}

export default App
