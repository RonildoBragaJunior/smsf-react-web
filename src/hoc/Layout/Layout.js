import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }

    render () {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    <content>
                        <h1>Be in control of your superannuation</h1>
                        <p>An SMSF puts you in the driving seat for how your super is invested. If you have an investment strategy in mind, speak to one of our team to see if an SMSF is right for you.

</p>
                        <label>With a Squirrel SMSF you will:</label>
                        <ul>
                            <li>Take control of your super</li>
                            <li>Save thousands on management fees</li>
                            <li>Invest your way</li>
                        </ul>
                    </content>
                    {this.props.children}
                </main>
                <footer>
                    <p className="copyright">© 2018 Squirrel. All rights reserved.</p>
                    <p className="p1">Squirrel is an Australian Financial Services Licensee that supports everyday Australians manage their own superannuation through amazing technology and education.</p>
                    <p className="p1">Squirrel Superannuation Services Pty Ltd ABN 87 169 366 750 is the holder of AFSL and Australian Credit License number 462160 and is a wholly owned subsidiary of Squirrel Limited ABN 64 605 835 514, A.C.N 605 835 514. Any advice on this website does not take into account your objectives, financial situation or needs and you should consider whether it is appropriate for you. You should consider the relevant Product Disclosure Statement and the Financial Services Guide available at squirrelsuper.com.au when deciding whether to acquire, or to continue to hold, a product.</p>
                    <p className="p1">Testimonials appearing on this site were obtained from Squirrel customers. They are individual experiences of customers that have used our products and/or services. We do not guarantee that they are typical results that consumers will generally achieve. Testimonials are not necessarily representative of all those who will use our products and/or services.</p>
                    <p className="p1">Information is current as at January 2019 and is subject to change.</p>
                </footer>
            </Aux>
        )
    }
}

export default Layout;