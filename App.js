import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/components/Login/Login';
import HomeWaves from './src/components/Home/HomeWaves';
export default class App extends React.Component {
  render() {
    return (
        <HomeWaves/>
        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
