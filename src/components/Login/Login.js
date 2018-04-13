import React, { Component } from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import InfoForm from './InfoForm';
export default class Login extends Component {
    render() {
        return (
            
            <View style={styles.container}>
               <View style={styles.logolimits}>
                 <Image 
                 style= {styles.logo}
                 source ={require('../../images/logoWave.gif')}
                 />
                 <Text style={styles.appName}> Fluid Sensor </Text>
               </View>
             <InfoForm/>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop: 100,
        backgroundColor: '#ffffff',
    },
    logolimits: {
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow:1
    },
    logo: {
        width:150,
        height:150,
        opacity:1
    },
    appName: {
        color:'#36526D',
        justifyContent: 'center',
        //textAlign:'center',
        fontSize: 26,
        opacity:1,
        marginTop: 15,
        
    }
});

