import React from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import Navigation from './navigation';
import HomeBackground from './assets/homesrc.jpg'

export default class App extends React.Component {
  render() {
    return (
      // <ImageBackground source={HomeBackground} style={{ width: '100%', height: '100%', flex: 1 }}>
      //   <View style={styles.container}>
      //  <Text style={styles.titleText}>
      //     AppCars
      //   </Text>
      // </View>
      
       <Navigation/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
