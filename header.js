import {Fragment} from 'react';
import image from '../../assests/meals.jpg';
import classes from '../Layout/header.module.css';




const Header = () => {
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>
                    React meals
                </h1>
                <button>
                    Cart
                </button>
                <div className={classes['main-image']}>
                    <img src={image} alt='A tabel full of delicious food'></img>

                </div>
            </header>
        </Fragment>
    )
}
export default Header;
