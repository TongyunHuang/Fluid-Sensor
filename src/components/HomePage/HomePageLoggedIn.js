import React from 'react';
import { AsyncStorage, Button, StyleSheet, Text, View, TextInput, Image } from 'react-native';
import Fields from './Fields';
import Calculator, {calculate, totalrequiredwater,waterdrank,remainingwater} from '../../Backend/Calculator';
import * as firebase from 'firebase';
import FieldsLoggedIn from './FieldsLoggedIn';

export default class HomePage extends React.Component {

  static navigationOptions = {
    header: null,
  }


  logOut = () => {
    this.navigateLogin();
    AsyncStorage.clear();
    console.log("logging out");
  }

  navigateLogin = () => {
    this.props.navigation.navigate('LoginPage');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <FieldsLoggedIn/> 
          <Button 
          title="log out"
          onPress={this.logOut}/>
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