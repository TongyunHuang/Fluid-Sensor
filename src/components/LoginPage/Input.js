import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) => {
    return (
        <View>
            <Text style={styles.label}>
                {label}
            </Text>
            <TextInput
            autoCorrect={false}
            onChangeText={onChangeText}
            placeholder={placeholder}
            style={styles.input}
            secureTextEntry={secureTextEntry}
            value={value}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flex: 1

    },
    input: {
        backgroundColor: 'lightblue',
        padding: 20,

    },
    label: {
        backgroundColor: 'lightblue'
    }

})

export { Input };