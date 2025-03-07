import React from 'react';
import { View, ImageBackground, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../assets/images/home.jpg')} 
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={styles.homeheading}>CLASSROOM MANAGEMENT SYSTEM</Text>

          <View style={styles.leftTextContainer}>
            <Text style={styles.leftText}>
              Our innovative platform is designed to streamline and enhance the learning experience for both educators and students. Whether you're a teacher looking for an efficient way to organize your lessons and track student progress, or a student seeking a seamless and engaging environment for your academic journey, we've got you covered.
            </Text>

            <TouchableOpacity 
              style={styles.loginbutton}
              onPress={() => navigation.navigate('Login')}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

// ✅ Updated Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,  
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  homeheading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  leftTextContainer: {
    width: '100%',  // ✅ Ensure container takes full width
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  leftText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  loginbutton: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 10, // ✅ Add margin to ensure visibility
    alignSelf: 'center', // ✅ Center button properly
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Home;
