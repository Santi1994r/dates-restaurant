import "../home/home.css";

const ChefsSpecialties = () => {
  return (
    <section className="flex flex-col sm:flex-row items-center justify-center">
      <div className=" sm:w-6/12 flex flex-col items-start p-5">
        <h4 className=" font-bold text-4xl sm:text-6xl fontDavid">
          Las especialidades del chef
        </h4>
        <p className=" sm:w-10/12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
        <div className=" w-full flex justify-between mt-10">
          <div className=" w-6/12 flex flex-col gap-5">
            <div className="flex">
              <img src="./images/check.svg" alt="" />
              <p className="px-2">Lorem ipsum dolor sit amet, consectetur </p>
            </div>
            <div className="flex">
              <img src="./images/check.svg" alt="" />
              <p className="px-2">Lorem ipsum dolor sit amet, consectetur </p>
            </div>
            <div className="flex">
              <img src="./images/check.svg" alt="" />
              <p className="px-2">Lorem ipsum dolor sit amet, consectetur </p>
            </div>
          </div>
          <div className=" w-6/12 flex flex-col gap-5">
            <div className="flex">
              <img src="./images/check.svg" alt="" />
              <p className="px-2">Lorem ipsum dolor sit amet, consectetur </p>
            </div>
            <div className="flex">
              <img src="./images/check.svg" alt="" />
              <p className="px-2">Lorem ipsum dolor sit amet, consectetur </p>
            </div>
            <div className="flex">
              <img src="./images/check.svg" alt="" />
              <p className="px-2">Lorem ipsum dolor sit amet, consectetur </p>
            </div>
          </div>
        </div>
        <div className=" mt-5 flex justify-center w-10/12">
          <button className=" bg-gray-900 hover:bg-gray-700 p-2 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm text-white mr-5 w-20 fontDavid">
            Menu
          </button>
          <button className=" p-2 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm bg-orange-600 hover:bg-orange-500 text-white fontDavid w-32">
            Hace tu reserva
          </button>
        </div>
      </div>
      <div className=" w-10/12 sm:w-5/12">
        <img className=" w-96 m-auto" src="./images/chef1.svg" alt="" />
      </div>
    </section>
  );
};

export default ChefsSpecialties;
