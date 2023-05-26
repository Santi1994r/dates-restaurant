import './App.css'
import Home from './components/Home/Home'
import NavbarHome from './components/Navbar-Home/NavbarHome'
import Navbar from './components/Navbar/Navbar'
import Login from './components/Sections/Login/Login'
import SpecialSection from './components/Sections/Specials/SpecialSection'

function App() {
  return (
    <>
    <NavbarHome/>
    <Navbar/>
    <Home />
     <Login/>
    <SpecialSection/>
    </>
  )
}

export default App
