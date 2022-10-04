import { Route, Routes } from 'react-router-dom'
import Details from './pages/Details/Details'
import  Home  from './pages/Home/Home'
import Error from './pages/Error/Error'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import "./App.css"
import IdValidator from './pages/Logement/IdValidator'


export default function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/propos'element={<Details/>}/>
      <Route path='/:id'element={<IdValidator/>}/>
      <Route path='*' element={<Error/>}/>

    </Routes>
    <Footer/>
    </>
  )
}

