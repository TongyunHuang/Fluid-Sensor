import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/components/Login/Login';
import HomeWaves from './src/components/Home/HomeWaves';
export default class App extends React.Component {
  render() {
    return (
        <Login/>
        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    //backgroundImage: 'url(map.png)',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
