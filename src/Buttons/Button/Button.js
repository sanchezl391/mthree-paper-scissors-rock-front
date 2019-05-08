import React from 'react';
import './Button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Button(props) {
    let icon;
    if(props.type === 'paper')
        icon = <FontAwesomeIcon icon='hand-paper' className='hand'/>;
    if(props.type === 'rock')
        icon = <FontAwesomeIcon icon='hand-rock' className='rock'/>;
    if(props.type === 'scissors')
        icon = <FontAwesomeIcon icon='hand-scissors' className='scissors'/>;

    return (
        <div 
            className="lg buttonContainer"
            onClick={()=>alert(props.type)}>
            { icon }
        </div>
    );
}

export default Button;