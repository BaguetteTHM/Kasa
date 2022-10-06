import React from 'react'
import Details from './pages/Details/Details'
import  Home  from './pages/Home/Home'
import Error from './pages/Error/Error'
import { Route,Routes } from 'react-router-dom'
import Logement from './pages/Logement/Logement'

export default function Router() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/propos'element={<Details/>}/>
        <Route path='/:id'element={<Logement/>}/>
        <Route path='*' element={<Error/>}/>
    </Routes>
  )
}
