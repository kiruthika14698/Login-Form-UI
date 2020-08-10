import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image} from 'react-native';
import { InteractionManager, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { navigation } from 'react-navigation';

import { Actions } from 'react-native-router-flux';



export default class Signin extends Component {
    /*constructor(props) {
        super(props);
        this.state = {
            email: "",
            pass: "",
            isloggedin: '',
            data:{

            }
        }
    }*/
    signup() {

        Actions.signup()    }
    submit()
    {
        Actions.op();
    }
    /*gotoop()
    {
        const{email, pass}= this.state
        if(email && pass =="")
        {
            alert("please enter email & password")
        
        }
        else{
            
            this.props.navigation.navigate("op")
        }


    }*/

    


    render() {

        return (
            <View style={styles.container}>
                <View style={styles.upcon}>
                    <Image  style={styles.logo}source={require('./Image/logo1.png')}>
                        
                     </Image>
                </View>

                <View style={styles.sty}>

                    <Text style={styles.signin}>Sign In</Text>
                    <View style={styles.Teincon}>
                        <TextInput placeholder="Email" style={styles.placon}></TextInput>
                      

                        <TextInput placeholder="Password" style={styles.placon}></TextInput>
                        
                    </View>
                    <TouchableOpacity style={styles.btin} onPress={this.submit}>
                        <Text style={styles.button}>Submit</Text>
                    </TouchableOpacity>

                </View>


                <View style={styles.bot}>
                    <Text style={styles.text}>Don't have an account?</Text>
                    <TouchableOpacity onPress={this.signup}>
                        <Text style={styles.text1}>Sign Up</Text></TouchableOpacity>
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
        margin:'13%',
        borderRadius:50,
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
        //borderColor:'white',
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
        fontWeight: "300",
       // borderBottomColor: 'white',
    },
    // sign in text
    signin: {
        fontSize: 25,
        textAlign: 'center',
        color: '#2d3057',
        //color: "#1DDCAF",
        padding: 10,
        fontWeight: "700"

    },
    // button layout
    btin: {
        borderWidth: 1,
        backgroundColor: "#1DDCAF",
        marginVertical: 30,
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