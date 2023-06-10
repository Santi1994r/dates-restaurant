import '../home/home.css'

const Newsletter = () => {
  return (
    <section className=' mt-20'>
      <div className=" sm:w-10/12 h-96 m-auto bg-[url(./images/newsletter.svg)] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center rounded-2xl">
        <h5 className="text-white font-bold text-3xl sm:text-5xl text-center fontDavid w-9/12">
          Obtenga su código promocional Suscribiéndose a nuestro Newsletter
        </h5>
        <div className='w-11/12 sm:w-6/12 mt-10 relative flex flex-col items-center gap-4'>
            <input className=' w-full h-16 rounded-xl p-5' type="email" placeholder='Ingresa tu email' />
            <button className=' bg-orange-700 p-3 rounded-xl sm:absolute sm:right-3 sm:top-2 text-white font-semibold'>Suscríbete</button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
