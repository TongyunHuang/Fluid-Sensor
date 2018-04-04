import React from 'react';
import {Button, StyleSheet, Text, View, TextInput, Image } from 'react-native';
import Fields from './Fields';
import Calculator, {calculate, totalrequiredwater,waterdrank,remainingwater} from '../../Backend/Calculator';
import * as firebase from 'firebase';

export default class HomePage extends React.Component {
  static navigationOptions = {
    header: null,
  }

    render() {
      return (
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Fields/>  
          </View>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: { 
      flex: 1,
      backgroundColor: 'green',
    },
    logoContainer: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
    },
    forButton: {
      flex: 1,
      backgroundColor: 'black',
      
    }

  });