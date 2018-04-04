import React from 'react';
import {Button, StyleSheet, Text, View, TextInput } from 'react-native';
import {StackNavigator} from 'react-navigation';
import HomePage from '../HomePage/HomePage';

export default class Cover extends React.Component {
  static navigationOptions = {
    header: null,
    
  }

    render() {
      return (
        <View style={styles.wrapper}>
          <Text style = {styles.title}>Hi There!</Text>
          <Button
          title = 'Go To HomePage'
          onPress = {() => this.props.navigation.navigate('LoginPage')}
          />
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