import React from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import Navigation from './navigation';
import HomeBackground from './assets/homesrc.jpg'

export default class App extends React.Component {
  render() {
    return (
       <Navigation/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
