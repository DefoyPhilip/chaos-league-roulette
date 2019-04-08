import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import bg from './assets/bg.jpg'

export default class App extends React.Component {
  render() {
    return (
        <ImageBackground source={bg} style={styles.container}>
          <Text style={styles.text}>Welcome to the Chaos League's Roulette</Text>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    color: '#fff',
    textAlign: 'center'
  },
});
