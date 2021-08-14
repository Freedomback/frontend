/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
    Alert,
    Button,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Auth0 from 'react-native-auth0';

var credentials = require('./auth0-configuration');
const auth0 = new Auth0(credentials);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { accessToken: null };
    }

    _onLogin = () => {
        auth0.webAuth
            .authorize({
                scope: 'openid profile email'
            })
            .then(credentials => {
                Alert.alert('AccessToken: ' + credentials.accessToken);
                this.setState({ accessToken: credentials.accessToken });
            })
            .catch(error => console.log(error));
    };

    _onLogout = () => {
        auth0.webAuth
            .clearSession({})
            .then(success => {
                Alert.alert('Logged out!');
                this.setState({ accessToken: null });
            })
            .catch(error => {
                console.log('Log out cancelled');
            });
    };

    render() {
        let loggedIn = this.state.accessToken === null ? false : true;
        return (
        <View style = { styles.container }>
            <Text style = { styles.header }> FreedomBack - Login </Text>
            <Text>
                You are{ loggedIn ? ' ' : ' not ' }logged in . </Text>
                <Button onPress = { loggedIn ? this._onLogout : this._onLogin }
                title = { loggedIn ? 'Log Out' : 'Log In' }/>
        </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    header: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});

export default App;

import React from 'react';
import './app.css';

import firebase from 'firebase/app';
import 'firebase/store';
import 'firebase/auth';

import {useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({apiKey: "AIzaSyAGxv2y5jNkzi3sgTQjaDEmjxu7ZvGvH4I",
authDomain: "freedom-bfee0.firebaseapp.com",
projectId: "freedom-bfee0",
storageBucket: "freedom-bfee0.appspot.com",
messagingSenderId: "585025658924",
appId: "1:585025658924:web:bc3cacfcb55dd923187189",
measurementId: "G-NEPS3SWVE3"})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
    return (
        <div className="App">
            <header className="App-header"Alert>

                </header></div>);
}

export default App;

