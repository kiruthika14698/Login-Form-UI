import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { InteractionManager, TextInput } from 'react-native';
//import { From, Item } from 'native-base';

import Routes from './Routes';
export default class App extends Component {
  render()
  {
    return(
      <View style={styles.container}>
        <Routes/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
});
