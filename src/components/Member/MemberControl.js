import React from 'react';



const memberControl = ( props ) => (
    <div>
        <div>{props.label}</div>
        <button>Less</button>
        <button onClick={props.added}>More</button>
    </div>
);

export default memberControl;