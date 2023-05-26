

const NavbarHome = () => {
  return (
    <nav className="flex justify-around items-center py-3">
        <img className="w-16" src="/public/assets/images/Royal-logo.png"/>
        <div className=" flex gap-7">
            <button>Menu</button>
            <button>Events</button>
            <button>Gallery</button>
            <button>Contact</button>
        </div>
        <button className="bg-red-800 p-3  rounded-tl-2xl rounded-br-2xl rounded-bl-sm rounded-tr-sm hover:bg-red-600  text-white duration-300 shadow-2xl">Hacer Reserva</button>
    </nav>
  )
}

export default NavbarHome