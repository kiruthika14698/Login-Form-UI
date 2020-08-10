import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, PickerIOSComponent, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class op extends Component {
    pop() {
        Actions.pop();
    }
    render() {
        return (
            <View style={styles.contain}>
                <Text style={styles.wel}>WELCOME
                </Text>
               
                <View style={styles.con1}>
                    <TouchableOpacity onPress={this.pop}>
                        <Image style={styles.logo} source={require('./Image/back.jpg')}></Image>
                    </TouchableOpacity>


                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contain:
    {
        flex: 1,
        backgroundColor: "#800080"

    },
    con: {
        marginVertical: 10,
    },
    wel: {
        textAlign: "center",
        marginVertical: '40%',
        color: "white",
        fontSize: 24,
    },
    //logo
    logo: {
        height: 150,
        width: 150,
        alignSelf: "center",
        margin: '5%',
        borderRadius: 100,
    },
});