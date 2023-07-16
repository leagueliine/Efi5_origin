import { useState } from 'react'
import { Login } from './components/login/Login'
import { Register } from './components/cadastro/register'
import { WelcomeScreen } from './components/welcome/welcome'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
  <Routes>
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route path='/' element={<WelcomeScreen />} />
  </Routes>
    </>
  )
}

export default App
