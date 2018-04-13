import React, { Component } from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
export default class HomeWaves extends Component {
    render() {
        return (
            <Image
            style= {styles.logo}
            source={require('../../images/animation-2.gif')}
          />

        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop: 100,
        backgroundColor: '#ffffff',
    },
    logo: {
        
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    },
});


