import FoodCard from "../../FoodCard/FoodCard"


const SpecialSection = () => {
    const specialDishes = [
        {
            img: '/public/assets/images/dish-1.png',
            title: 'Ruiz Plate',
            description: 'lorem ipsum dolor, sit consectur do eismudod temedor'
        },
        {
            img: '/public/assets/images/dish-2.png',
            title: 'Sauce Fish',
            description: 'lorem ipsum dolor, sit consectur do eismudod temedor'
        },
        {
            img: '/public/assets/images/dish-3.png',
            title: 'BBQ Saint Special',
            description: 'lorem ipsum dolor, sit consectur do eismudod temedor'
        },
        {
            img: '/public/assets/images/dish-4.png',
            title: 'Chicken Risk',
            description: 'lorem ipsum dolor, sit consectur do eismudod temedor'
        }
    ]
  return (
    <section className="flex justify-evenly my-96">
        {
            specialDishes.map( dish => 
                <FoodCard key={dish.title} title={dish.title} img={dish.img} description={dish.description}/>
            )
        }
    </section>
  )
}

export default SpecialSection