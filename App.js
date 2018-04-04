import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Cover from './src/components/CoverPage/Cover';
import Fields from './src/components/HomePage/Fields';
import HomePage from './src/components/HomePage/HomePage';
import {StackNavigator} from 'react-navigation';
import Login from './src/components/LoginPage/Login';
import CreateAccount from './src/components/LoginPage/CreateAccount';


export default class App extends React.Component {

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
    CreatePage: { screen: CreateAccount }
})

  