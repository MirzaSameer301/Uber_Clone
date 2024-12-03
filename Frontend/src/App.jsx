import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/captain-login' element={<CaptainLogin/>} />
      <Route path='/captain-signup' element={<CaptainSignup/>}/>
      <Route path='/hjhlogin' element={<Login/>} />
    </Routes>
  )
}

export default App