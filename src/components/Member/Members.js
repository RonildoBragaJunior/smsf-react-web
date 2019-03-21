import React from 'react';
import Member from '../../components/Member/Member';

const memberList = ( props ) => {

    const members = props.members;

    let members_list = members.map((member, index) => <Member key={index} member={member} />)

    return (
        <div>
            <p>This is a list of smsf members</p>
            {members_list}
        </div>
    );
};

export default memberList;