import classes from '../MealItem/MealItemform.module.css'
import Input from '../../UI/input'


const MealItemform = (props)=> {
    return(
        <form ClassName={classes.form}>
            <Input label="Amount" input={{
                id:'amount',
                type:'number',
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'1',
            }}/>
            <button ClassName={classes.formbutton}>+Add</button>
        </form>
    )

}
export default MealItemform;
