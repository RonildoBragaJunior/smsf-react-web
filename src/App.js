import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Auth from './containers/Auth/Auth';
import MemberController from './containers/Member/MemberController';
import SignUpController from './containers/SignUp/SignUpController'
import PersonalInformationController from './containers/SignUp/PersonalInformationController'


class App extends Component {
    render () {
        return (
            <div>
                <Layout>
                    <Switch>
                        <Route path="/signup/" component={SignUpController} />
                        <Route path="/personal_information/:id/" component={PersonalInformationController} />
                        <Route path="/member/" component={MemberController} />
                        <Route path="/auth/" component={Auth} />
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;
