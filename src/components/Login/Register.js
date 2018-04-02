import React, { Component } from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import RegisterInfo from './RegisterInfo';
export default class Register extends Component {
    render() {
        return (
            
            <View style={styles.container}>
               <View style={styles.logolimits}>
                 <Image 
                 style= {styles.logo}
                 source ={require('../../images/wavelogo.png')}
                 />
                 
               </View>
             <RegisterInfo/>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop: 60,
        backgroundColor: '#ffffff',
    },
    logolimits: {
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow:1
    },
    logo: {
        width:150,
        height:150
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