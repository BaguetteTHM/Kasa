import { Link, Route, Routes,NavLink } from 'react-router-dom'
import Details from './pages/Details/Details'
import  Home  from './pages/Home/Home'


export default function App() {
  return (
    <>
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/propos">A propos</NavLink></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/propos'element={<Details/>}/>

    </Routes>
    <div>Mon Footer</div>
    </>
  )
}

