import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../../../../style';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation();

  const loginSubmit = async () => {
    if (!userName.trim() || !password.trim()) {
      Alert.alert('Please enter username and password');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:5000/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userName, password }),
      });
  
      const data = await response.json();
      console.log('🔹 Server Response:', data);
  
      if (response.ok) {
        const userRole = data.userType;
        await AsyncStorage.setItem('userRole', userRole);
        Alert.alert('Login successful');
  
        navigation.navigate(userRole === 'admin' ? 'AdminHome' : 'UserHome');
      } else {
        Alert.alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.log('Fetch Error:', error);
      Alert.alert('Something went wrong');
    }  
  };
  
  
  
  
  return (
    <ScrollView contentContainerStyle={styles.containerlogin}>
      <View style={styles.formContainerlogin}>
        <Text style={styles.headerlogin}>Login</Text>

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          value={userName}
          onChangeText={setUserName}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={loginSubmit}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkText} onPress={() => navigation.navigate('Signup')}>
          <Text>Don't have an account? <Text style={styles.link}>Sign Up</Text></Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Login;
