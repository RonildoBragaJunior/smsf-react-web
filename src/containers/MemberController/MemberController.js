import React, {Component} from 'react';

import Aux from '../../hoc/Aux/Aux';
import Members from '../../components/Member/Members';
import MemberControls from '../../components/Member/MemberControls';

const INGREDIENTS_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class MemberController extends Component {

    state = {
        creating: false,
        reading: true,
        updating: false,
        deleting: false,
        members: [
            {
                username: 'ronildo1',
                password: 'teste1'
            },
            {
                username: 'ronildo2',
                password: 'teste2'
            }
        ],
        totalPrice: 4
    }

    addMembersHandler = () => {

        // const oldCount = this.state.members[type];
        // const updatedCount = oldCount + 1;
        // const updatedMembers = {
        //     ...this.state.members
        // };
        // updatedMembers[type] = updatedCount;
        // const priceAddition = INGREDIENTS_PRICES[type];
        // const oldPrice = this.state.totalPrice;
        // const newPrice = oldPrice + priceAddition;
        // console.log(updatedMembers);

        let members = this.state.members
        members.push({
            username: 'ronildo3',
            password: 'teste3'
        })

        this.setState({totalPrice: 0, members: members});
    }

    removeMembersHandler = (type) => {

    }


    render () {
        return (
            <Aux>
                <Members members={this.state.members} />
                <MemberControls
                        memberAdded={this.addMembersHandler}
                />
            </Aux>
        );
    }
}


export default MemberController;