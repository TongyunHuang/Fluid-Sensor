import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, StyleSheet, Button} from 'react-native';
import Calculator from '../../Backend/Calculator';
import calculate from '../../Backend/Calculator';
import * as firebase from 'firebase';



export default class Fields extends Component{


    userRef =  firebase.database().ref('Accounts').child(firebase.auth().currentUser.uid);

    constructor(props){
        super(props);
        this.gotData = this.gotData.bind(this);
        this.state ={
            waterTarget:''
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
    
    componentWillMount(){
        this.userRef.on('value', this.gotData, this.errorData);
    }

    componentDidUpdate(){
        console.log(this.state.waterTarget);
    }

    gotData(data) {
        let allData = data.val();
        this.setState({waterTarget: allData.waterTarget});
    }

    errorData(data) {
        console.log('Error!');
    }

    changeWater(){

        firebase.database().ref('Accounts').child(firebase.auth().currentUser.uid).update({
            waterTarget : 1
        });

       console.log(firebase.auth().currentUser.uid);
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style= {styles.forLabel}>How much did you just drink?</Text>
                <TextInput
                ref={input => {this.textInput = input}}
                style={styles.input}
                placeholder = 'input here'
                onChangeText={(typedText) => {this.setState({text:parseInt(typedText)})}}
                />
                <Button
                style={styles.forButton}
                title = "Calculate!"
                onPress={this.calculateTotal}
                />
                <Text style= {styles.forLabel}>waterTarget: </Text>
                <Text style={styles.forText}>{this.state.waterTarget}</Text>
                <Text style= {styles.forLabel}>Month:</Text>
                <Text style={styles.forText}>{10}</Text>
                <Button
                title = "Change watertarget"
                onPress={this.changeWater}/>
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