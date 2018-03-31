import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput,TouchableOpacity } from 'react-native';
export default class InfoForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput 
                    style= {styles.infoBox}
                    placeholder="Email"
                    placeholderTextColor="#36526D"
                    />
                <TextInput 
                    style= {styles.infoBox}
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor="#36526D"
                    />
               
                  <TouchableOpacity>
                      <Text style= {styles.button}>Login</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                      <Text style= {styles.registration}>Create an Account</Text>
                  </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding:50,
        justifyContent:'center',
    },
    infoBox:{
        height:50,
        backgroundColor:'rgba(151,201,210,0.35)',
        borderRadius:5,
        marginTop: 20,
        
        padding:16,
        fontSize:15
    },
    button:{
        fontSize:20,
        marginTop: 20,
        marginBottom:80,
        color:'#36526D',
        fontWeight:'bold',
        textAlign:'center'
    },
    registration:{
        fontSize:12,
        marginTop: 10,
        marginBottom:14,
        color:'#36526D',
        fontWeight:'bold',
        textAlign:'center'
    }
});

