import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get("window").width;

const AdminNavbar = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      await AsyncStorage.clear();
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    } catch (error) {
      alert("Logout Failed", "Something went wrong while logging out.");
    }
  };

  return (
    <View style={styles.navbaradmin}>
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('AdminHome')}>
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('CreateClass')}>
        <Text style={styles.navText}>Create Class</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('ClassList')}>
        <Text style={styles.navText}>Class List</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('ViewAssignments')}>
        <Text style={styles.navText}>View Assignments</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Results')}>
        <Text style={styles.navText}>View Results</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton} onPress={handleLogout}>
        <Text style={styles.navText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbaradmin: {
    position: 'absolute',
    top: 30,
    left: 0,
    right: 0,
    backgroundColor: '#bc8f8f',
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'space-around', // Matches UserNavbar for consistency
    alignItems: 'center',
    zIndex: 10,
  },
  navButton: {
    paddingVertical: 8,
    paddingHorizontal: windowWidth * 0.03, // Matches UserNavbar button width
    marginHorizontal: 5,
  },
  navText: {
    color: 'white',
    fontSize: windowWidth > 768 ? 18 : 14, // Matches UserNavbar text size
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AdminNavbar;
