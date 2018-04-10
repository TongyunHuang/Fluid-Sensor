import React from 'react';
import {AsyncStorage ,Button, StyleSheet, Text, View, TextInput } from 'react-native';
import {StackNavigator} from 'react-navigation';
import HomePage from '../HomePage/HomePage';

export default class Cover extends React.Component {
  componentWillMount(){
    AsyncStorage.getItem('uid', (error, result) => this.decider(result));
  }
  static navigationOptions = {
    header: null,
    
  }

  decider(result){
    if (result === null){
      this.navigateLogin();
    } else {
      this.navigateHomeLogged();
    }
  }

  navigateHomeLogged = () => {
    this.props.navigation.navigate('HomeLog');
  }
  navigateLogin = () => {
    this.props.navigation.navigate('LoginPage');
  }

    render() {
      return (
        <View style={styles.wrapper}>
          <Text style = {styles.title}>Hi There!</Text>
        </View>

      ); 
    }
  }
  
  const styles = StyleSheet.create({
    wrapper: {
      backgroundColor: 'green', 
      flex: 1, 
      justifyContent:'center', 
      alignItems:'center'
    },
    title: {
      color: 'white',
      fontSize: 35,
      fontWeight: 'bold'
    }
  
  });