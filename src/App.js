import { Route, Routes } from 'react-router-dom'
import Details from './pages/Details/Details'
import  Home  from './pages/Home/Home'
import Error from './pages/Error/Error'
import Logement from './pages/Logement/Logement'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import "./App.css"


export default function App() {
  return (
    <>
    <div className='contentWrapper'>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/propos'element={<Details/>}/>
      <Route path='/:id'element={<Logement/>}/>
      <Route path='*' element={<Error/>}/>

    </Routes>
    <Footer/>
    </div>
    </>
  )
}

