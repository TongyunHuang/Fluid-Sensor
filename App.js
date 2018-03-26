import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Cover from './src/components/CoverPage/Cover';
import Fields from './src/components/HomePage/Fields';
import HomePage from './src/components/HomePage/HomePage';
import {StackNavigator} from 'react-navigation';


export default class App extends React.Component {
    render() {
      return (
          <AppNavigator/>
      );
    }
}

const AppNavigator = StackNavigator({
    Cover: { screen: Cover },
    HomePage: { screen: HomePage }
})
