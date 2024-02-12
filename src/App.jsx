import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import {Toaster} from 'react-hot-toast'

const App = () => {
  return (
  <>
    <Toaster position='top-right' toastOptions={{
      duration:1600,
      style:{
        background:'#E50914',
        opacity:0.7,
        color:'white',
        marginTop:'60px'
      }
    }}/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
  </>
  )
}

export default App