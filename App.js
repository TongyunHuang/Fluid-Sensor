import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Cover from './src/components/CoverPage/Cover';
import Fields from './src/components/HomePage/Fields';
import HomePage from './src/components/HomePage/HomePage';
import {StackNavigator} from 'react-navigation';
import Login from './src/components/LoginPage/Login';
import CreateAccount from './src/components/LoginPage/CreateAccount';
import * as firebase from 'firebase';
import FieldsLoggedIn from './src/components/HomePage/FieldsLoggedIn';
import HomePageLoggedIn from './src/components/HomePage/HomePageLoggedIn';


export default class App extends React.Component {
    componentWillMount(){
        const firebaseConfig = {
            apiKey:'AIzaSyCpdIfRXW7YkJlEM7acEm54342PRXK9feA',
            authDomain: 'drink-758fb.firebaseapp.com',
            databaseURL: 'https://drink-758fb.firebaseio.com',
        }
        firebase.initializeApp(firebaseConfig);
    }
    render() {
      return (
          <AppNavigator/>

      );
    }
}

const AppNavigator = StackNavigator({
    Cover: { screen: Cover },
    HomePage: { screen: HomePage },
    LoginPage: { screen: Login },
    CreatePage: { screen: CreateAccount },
    HomeLog: { screen: HomePageLoggedIn }
    
})

  