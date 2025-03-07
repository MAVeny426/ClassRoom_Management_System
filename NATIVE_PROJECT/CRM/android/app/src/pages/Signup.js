import React, { useState } from 'react';
import { supabase } from '../util/supabase/client';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../../../../style';
import { useNavigation } from '@react-navigation/native';

const SignUpPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const submitForm = async () => {
    console.log({ firstName, lastName, userName, email, password });
  
    try {
      const response = await fetch('http://localhost:5000/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, userName, email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert(`Signup successful! Your role is ${data.userType}`);
        navigation.navigate('Login');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert('Something went wrong');
    }
  };
    
  return (
    <ScrollView contentContainerStyle={styles.containerlogin}>
      <View style={styles.formContainerlogin}>
        <Text style={styles.headerlogin}>Sign Up</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your first name"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your last name"
          value={lastName}
          onChangeText={setLastName}
        />
        <TextInput
          style={styles.input}
          placeholder="Choose a username"
          value={userName}
          onChangeText={setUserName}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Create a password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={[styles.button, { pointerEvents: 'auto' }]} onPress={submitForm}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkText} onPress={() => navigation.navigate('Login')}>
          <Text>Already have an account? <Text style={styles.link}>Login</Text></Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignUpPage;
