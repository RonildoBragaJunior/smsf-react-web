import React, {Component} from 'react';

const inputElement = props => {
    const myInputStyle={boxSizing:'border-box',
        display:'block',width:'90%',margin:'4px auto',
        textAlign:'center',outline:'none'};
    const myCheckboxStyle={boxSizing:'border-box',
        display:'inline-block',margin:'6px auto',
        textAlign:'center',outline:'none'};

    let myInputElement = null;
    switch (props.myElementTypeProps) {
        case ('input'):
            myInputElement = <input
                {...props.myElementConfigProps}
                value={props.myValueProps}
                onChange={props.myInputChangedMethodProps}
                style={myInputStyle}
            />;
            break;
        case ('checkbox'):
            myInputElement = <input
                {...props.myElementConfigProps}
                onChange={props.myInputChangedMethodProps}
                style={myCheckboxStyle}
            />;
            break;
        case ('textarea'):
            myInputElement = <textarea
                {...props.myElementConfigProps}
                value={props.myValueProps}
                onChange={props.myInputChangedMethodProps}
                style={myInputStyle}
            />;
            break;
        case ('select'):
            myInputElement = (
                <select
                    value={props.myValueProps}
                    onChange={props.myInputChangedMethodProps}
                >
                    {props.myElementConfigProps.myOptions.map(
                        myCurrentOption => (
                            <option
                                key={myCurrentOption.myOptionValue}
                                value={myCurrentOption.myOptionValue}
                            >
                                {myCurrentOption.myDisplayValue}
                            </option>
                        )
                    )}
                </select>
            );
            break;
        default: myInputElement = "Error";
    }

    return (
        <div>
            <hr style={props.mySpacerStyleProps} />
            <label>{props.myElementTypeProps}</label>
            <br />
            {myInputElement}
        </div>
    );
};

export default inputElement;