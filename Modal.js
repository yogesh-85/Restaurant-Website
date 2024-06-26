import {Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from '../UI/Modal.module.css'


const Backdrop = (props) => {
    return (
    <div className={classes.backdrop} onClick={props.onClose}></div>
)
}
const ModelOverlay = (props) => {
    return (
        <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
        </div> 
    )
}
const portalElement = document.getElementById('overlays')
const Modal = props => {
    return(
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
            {ReactDOM.createPortal(<ModelOverlay>{props.children}</ModelOverlay>,portalElement)}
             

        </Fragment>

    )


}
export default Modal
