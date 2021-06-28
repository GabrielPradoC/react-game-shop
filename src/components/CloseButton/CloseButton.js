import './CloseButton.css';

function CloseButton(props){

    function clickHandler(){
        props.clickHandler();
    }

    const additionalClasses = props.className ? props.className : '';

    return (
        <input className={'close-button '+additionalClasses} 
        type='button' 
        value='X' 
        onClick={clickHandler}
        data-testid='close-btn'/>
    )
}

export default CloseButton;