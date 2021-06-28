import Backdrop from '../Backdrop/Backdrop';

function Modal(props) {
    return (
        <div>
            {props.children}
            <Backdrop toggleModal={props.toggleModal} />
        </div>
    );
}

export default Modal;
