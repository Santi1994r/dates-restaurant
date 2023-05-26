

const FoodCard = (props) => {
    const { title, img , description } = props;
    console.log(props);
  return (
    <div className="bg-slate-100 border-2 border-white relative rounded-tl-2xl rounded-br-2xl w-64 h-72 rounded-bl-sm">
        <img className="absolute -top-28 inset-x-5 " src={img} alt="" />
        <div className=" absolute inset-y-28">
        <h3 className="font-bold text-center">{title}</h3>
        <p className="text-center">{description}</p>
        </div>
        
    </div>
  )
}

export default FoodCard