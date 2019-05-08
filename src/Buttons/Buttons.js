import React from 'react';
import Button from './Button/Button';
import './Buttons.css';

function Buttons(props) {
    return (
        <div className='buttonsContainer'>
            <Button 
                type='rock'/>
            <Button 
                type='paper'/>
            <Button 
                type='scissors'/>
        </div>
    );
}

export default Buttons;