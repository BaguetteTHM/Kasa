import { Link, Route, Routes,NavLink } from 'react-router-dom'
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
    {/* <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/propos">A propos</NavLink></li>
      </ul>
    </nav> */}
    <div className='contentWrapper'>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/propos'element={<Details/>}/>
      <Route path='/:id'element={<Logement/>}/>
      <Route path='*' element={<Error/>}/>

    </Routes>
    {/* <div>Mon Footer</div> */}
    <Footer/>
    </div>
    </>
  )
}

