import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import "./App.css"
import Router from './Router'


export default function App() {
  return (
    <>
    <div className='pageWrapper'>
      <Header/>
      <div className='contentWrapper'>
        <Router/>
      </div>
      <Footer/>
    </div>
    </>
  )
}

