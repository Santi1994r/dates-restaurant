

const Form = () => {
  return (
    <div className="flex flex-col bg-white h-4/6 w-10 m-12 gap-12">
        <h2 className="text-3xl">Register</h2>
        <form className="flex flex-col justify-center items-center">
            <label className="">Name</label>
            <input className=" border-2 rounded-md" type="text" />
            <label >Last name</label>
            <input className=" border-2 rounded-md" type="text" />
            <label >Email</label>
            <input className=" border-2 rounded-md" type="text" />
            <label >Password</label>
            <input className=" border-2 rounded-md" type="text" />
            
            <button className=" bg-red-800 p-2 text-white rounded-lg w-4/6" type='submit'>Register</button>
        </form>
    </div>
  )
}

export default Form