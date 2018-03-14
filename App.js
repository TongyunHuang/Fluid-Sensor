import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>FLDZ Sensor App</Text>
	<style={styles.titleText}>
        <Text>Make changes to the App.js file to change what appears here.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>Team info: fluid sensor!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
