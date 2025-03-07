import { Text, View, ImageBackground, Dimensions, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import UserNavbar from '../components/UserNavbar';

const { width, height } = Dimensions.get('window');

export class UserHome extends Component {
  render() {
    return (
      <View style={styles.containerUserHome}>
        <ImageBackground 
          source={require('../assets/images/home.jpg')} 
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          <UserNavbar />
          <View style={styles.textContainer}>
            <Text style={styles.welcomeText}>Welcome To</Text>
            <Text style={styles.classcraftText}>ClassCraft</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerUserHome: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: width,
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    transform: [{ translateY: -height * 0.1 }],
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: width * 0.07,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  classcraftText: {
    fontSize: width * 0.08,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default UserHome;
