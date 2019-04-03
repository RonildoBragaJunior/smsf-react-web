import React from 'react';


const member = ( props ) => {

    return (
        <tr onClick={props.clicked}>
            <th scope="row">{props.member.id}</th>
            <td>{props.member.first_name}</td>
            <td>{props.member.last_name}</td>
            <td>{props.member.email}</td>
            <td>{props.member.mobile_number}</td>
            <td>{props.member.tax_file_number}</td>
        </tr>
    );
};

export default member;