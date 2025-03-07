import { Text, View, ImageBackground, Dimensions, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import AdminNavbar from '../components/AdminNavbar';

const { width, height } = Dimensions.get('window');

export class AdminHome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground 
          source={require('../assets/images/home.jpg')} 
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          <AdminNavbar />
          <View style={styles.textContainer}>
            <Text style={styles.welcomeText}>Welcome To</Text>
            <Text style={styles.classcraftText}>Admin ClassCraft Dashboard</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: width, 
    height: height,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  textContainer: {
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    transform: [{ translateY: -height * 0.1 }], 
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: width * 0.05,
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

export default AdminHome;
