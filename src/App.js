import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Auth from './containers/Auth/Auth';
import BasicInformation from './containers/SignUp/BasicInformation'
import PersonalInformation from './containers/SignUp/PersonalInformation'
import FundInformation from './containers/SignUp/FundInformation'
import AcceptFees from './containers/SignUp/AcceptFees'
import BeInTouch from './containers/SignUp/BeInTouch'
import SMSFMember from './containers/SMSFMember/SMSFMember';
import CustomerDashboard from './containers/Admin/Customer/CustomerDashboard'
import StaffDashboard from './containers/Admin/Staff/StaffDashboard'

class App extends Component {
    render () {
        return (
            <div>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={BasicInformation} />
                        <Route path="/basic_information/" component={BasicInformation} />
                        <Route path="/personal_information/" component={PersonalInformation} />
                        <Route path="/fund_information/" component={FundInformation} />
                        <Route path="/accept_fees/" component={AcceptFees} />
                        <Route path="/be_in_touch/" component={BeInTouch} />
                        <Route path="/auth/" component={Auth} />
                        <Route path="/smsf_member/" component={SMSFMember} />
                        <Route path="/customer_dashboard/" component={CustomerDashboard} />
                        <Route path="/staff_dashboard/" component={StaffDashboard} />
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;
