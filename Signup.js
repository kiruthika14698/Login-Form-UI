import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity,Image } from 'react-native';
import { InteractionManager, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class Signup extends Component {

    goback() {
        Actions.pop();
    }
    pop()
    {
        Actions.pop();
    }
    pop1(){
        Actions.pop();
    }
    render() {

        return (
            <View style={styles.container}>
                <View style={styles.upcon}>
                    <TouchableOpacity onPress={this.pop1}>
                    <Image style={styles.logo1} source={require('./Image/back1.png')}></Image>
                    </TouchableOpacity>
                    
                    <Image style={styles.logo} source={require('./Image/logo1.png')}>

                    </Image>
                </View>
                <View style={styles.sty}>

                    <Text style={styles.signup}>Sign Up</Text>
                    <View style={styles.Teincon}>
                        <TextInput placeholder="Email" style={styles.placon}></TextInput>
                        <TextInput placeholder="Password" style={styles.placon}></TextInput>
                    </View>
                    <TouchableOpacity style={styles.btin} onPress={this.pop}>
                        <Text style={styles.button}>Submit</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.bot}>
                    <Text style={styles.text}>Already have an account?</Text>
                    <TouchableOpacity onPress={this.goback}><Text style={styles.text1}>Sign In</Text></TouchableOpacity>
                </View>
            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5257f2'
    },
    //upper layout
    upcon: {
        position: 'relative',
    },
    //logo
    logo: {
        height:100,
        width: 100,
        alignSelf:"center",
        margin:'10%',
        borderRadius:50,
    },
    //logo1
    logo1: {
        height:40,
        width:40,
        top: 25

    },
    //bottom layout
    bot: {
        flexDirection: "row",
        marginVertical: 40,
        alignSelf: "center",

    },
    // create border 
    sty: {
        marginTop: '3%',
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: "#20232a",
        backgroundColor: "white",
        marginHorizontal: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    //text input
    placon: {
        color: "black",
        paddingTop: 10,
        borderBottomWidth: 1,
        marginVertical: 25,
        marginHorizontal: 4,
        fontSize: 15,
        fontWeight: "300"
    },
    // sign up text
    signup: {
        fontSize: 25,
        textAlign: 'center',
        color: '#2d3057',
        padding: 10,

    },
    // button layout
    btin: {
        borderWidth: 1,
        backgroundColor: "#1DDCAF",
        marginVertical: 40,
        borderRadius: 40,
        marginHorizontal: 25,

    },

    // text of button
    button: {
        textAlign: "center",
        padding: 15,
        fontSize: 16,
    },
    //bottom texy
    text: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 3,
    },
    // sign in button
    text1: {
        color: "white",
        fontSize: 17,
        marginHorizontal: 5,
        fontWeight: "700",
    },

});