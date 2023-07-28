
import './App.css'
import ChefsSpecialties from './components/ChefsSpecialties/ChefsSpecialties'
import Home from './components/Home/Home'
import NavbarHome from './components/Navbar-Home/NavbarHome'
import Navbar from './components/Navbar/Navbar'
import Newsletter from './components/Newsletter/Newsletter'
import Login from './components/Sections/Login/Login'
import SpecialSection from './components/Sections/Specials/SpecialSection'

function App() {

  return (
    <>
      <NavbarHome />
      <Navbar />
      <Home />
      <Login />
      <SpecialSection />
      <ChefsSpecialties />
      <Newsletter />
    </>
  )
}

export default App
