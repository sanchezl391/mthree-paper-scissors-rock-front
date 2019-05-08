import React from 'react';
// import './Display.css';

function Display(props){
    return <div className='displayContainer'>
        <p className='md'>{props.mssg}</p>
    </div>;
}

export default Display;