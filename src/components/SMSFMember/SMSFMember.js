import React from 'react';


const member = ( props ) => {

    return (
        <div>
            <article onClick={props.clicked}>
                <p>
                    {props.member.id} -
                    {props.member.username} -
                    {props.member.email}
                </p>
            </article>
        </div>
    );
};

export default member;