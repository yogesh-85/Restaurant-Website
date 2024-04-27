import {Fragment} from 'react';
import HeaderCartButton from '../Layout/HeaderCartButton'
import image from '../../assests/meals.jpg';
import classes from '../Layout/header.module.css';

const Header = (props) => {
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>
                    React meals
                </h1>
                <HeaderCartButton onClick={props.onShowCart}/>
              </header>
                <div className={classes['main-image']}>
                    <img src={image} alt='A tabel full of delicious food'></img>

                </div>
        </Fragment>
    )
}
export default Header;
