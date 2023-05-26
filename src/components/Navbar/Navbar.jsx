
const Navbar = () => {
  return (
    <nav className=" bg-black flex justify-between items-center px-10">
        <img className=' w-20' src="/public/assets/images/Royal-logo.png" alt="logo-royal" />
        <div>
            <a className=" text-white p" href="">Hacer Reserva</a>
            <a className=" text-white" href="">Login</a>
        </div>
    </nav>
  )
}

export default Navbar