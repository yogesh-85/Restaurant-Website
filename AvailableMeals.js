import Card from '../UI/Card'
import Mealtem from '../Meals/MealItem/MealItem'
 
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sambar',
      description: 'Finest veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Dosa',
      description: 'A Indian specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Biryani',
      description: 'Hyderbadi, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

const AvailableMeals = () => {
    const  mealsList = DUMMY_MEALS.map((meal) => <Mealtem key ={meal.id} name={meal.name} description={meal.description} price={meal.price}></Mealtem>);
    
    return(
        <Card>
            <ul>{mealsList}</ul>
        </Card>
    );
};
export default AvailableMeals;