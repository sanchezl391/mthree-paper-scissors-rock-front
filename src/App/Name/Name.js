import React from 'react';
import './Name.css';

function Name(props) {
    let jsx = (
        <div className='nameContainer'>
            <p>Please Enter Your Name:</p>
            <input onChange={props.handler} placeholder="Name" className='sm'/>
            <button onClick={props.submit} >Submit</button>
        </div>
    );
    return (jsx);
}

export default Name;