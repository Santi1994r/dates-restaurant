import './home.css'

const Home = () => {
  return (
    <main className='flex justify-around'>
        <div className=' w-5/12 flex flex-col items-start justify-center'>
            <h1 className=' text-6xl mb-16 fontDavid font-bold'>Le ofrecemos una comida de calidad</h1>
            <p className=' w-80 mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div>
                <button className=' bg-gray-900 hover:bg-gray-700 p-2 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm text-white mr-5 w-20 fontDavid'>Menu</button>
                <button className=' p-2 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm bg-orange-600 hover:bg-orange-500 text-white fontDavid w-32'>Hace tu reserva</button>
            </div>
            <div>
                <img src="./images/" alt="" />
                <img src="./images/" alt="" />
                <img src="./images/" alt="" />
            </div>
        </div>

        <div className=' flex relative'>
            <img className=' absolute bottom-0 -left-56 ri' src="./images/plato-home.svg" alt="" />
            <img className=' w-auto h-5/6 rounded-tr-3xl rounded-bl-3xl rounded-br-3xl rounded-tl-3xl' src="./images/resto-home.svg" alt="" />
        </div>
    </main>
  )
}

export default Home