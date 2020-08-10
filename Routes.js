import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Signin from './Signin';
import Signup from './Signup';
import op from './op';

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Stack key="root" hideNavBar={true}>
                    <Scene key="signin" component={Signin} title="Signin" initial/>
                    <Scene key="signup" component={Signup} title="Signup" />
                    <Scene key="op" component={op} title="op" />
                </Stack>
            </Router>
        )
    }
}