 import classes from '../UI/input.js'

 const Input = props => {
    return(
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input}></input>
        </div>
    )

 }
 export default Input
