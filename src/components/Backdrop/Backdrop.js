import './Backdrop.css';

function Backdrop(props) {

    function removeBackdrop() {
        props.toggleModal();
    }

    return (
        <div
            className='backdrop-body'
            onClick={removeBackdrop}>
        </div>
    );
}

export default Backdrop;
