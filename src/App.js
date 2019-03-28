import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Auth from './containers/Auth/Auth';
import SMSFMemberController from './containers/SMSFMember/SMSFMemberController';
import BasicInformation from './containers/SignUp/BasicInformation'
import PersonalInformation from './containers/SignUp/PersonalInformation'
import FundInformation from './containers/SignUp/FundInformation'
import AcceptFees from './containers/SignUp/AcceptFees'
import BeInTouch from './containers/SignUp/BeInTouch'


class App extends Component {
    render () {
        return (
            <div>
                <Layout>
                    <Switch>
                        <Route path="/signup/" component={BasicInformation} />
                        <Route path="/personal_information/:id/" component={PersonalInformation} />
                        <Route path="/fund_information/:id/" component={FundInformation} />
                        <Route path="/accept_fees/:id/" component={AcceptFees} />
                        <Route path="/be_in_touch/" component={BeInTouch} />
                        <Route path="/smsf_member_controller/" component={SMSFMemberController} />
                        <Route path="/auth/" component={Auth} />
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;
