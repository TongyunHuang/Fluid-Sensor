import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, StyleSheet, Button} from 'react-native';
import Calculator, { totalrequiredwater, waterdrank, remainingwater } from '../../Backend/Calculator';
import calculate from '../../Backend/Calculator'


export default class Fields extends Component{
    
    constructor(props){
        super(props);
        this.state ={
            text: parseInt(0),
            total: parseInt(0),
        }
    }

    storeText = (typedText) => {
        this.setState({text: parseInt(typedText)});
    }

    calculateTotal = (typedText) => {
        calculate(this.state.text);
        this.setState({text: parseInt(0)});
        this.textInput.clear();
        
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style= {styles.forLabel}>How much did you just drink?</Text>
                <TextInput
                ref={input => {this.textInput = input}}
                style={styles.input}
                placeholder = 'input here'
                onChangeText={this.storeText}
                />
                <Button
                style={styles.forButton}
                title = "Calculate!"
                onPress={this.calculateTotal}
                />
                <Text style= {styles.forLabel}>Amount of water drank today: </Text>
                <Text style={styles.forText}>{waterdrank}</Text>
                <Text style= {styles.forLabel}>Amount of water remaining:</Text>
                <Text style={styles.forText}>{remainingwater}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{

    },
    input: {
        backgroundColor: 'lightblue',
        marginBottom: 20,
        height: 50,
        paddingLeft: 20,
        paddingRight: 20,

    },
    forText:{
      backgroundColor: 'lightblue',
      height: 50,
      paddingTop: 15,
      paddingLeft: 20,
      paddingBottom: 20,
      
    
    },
    forLabel:{
        marginVertical: 5
    },
    forButton:{
        backgroundColor: 'black',
        marginBottom: 5,
    }
})