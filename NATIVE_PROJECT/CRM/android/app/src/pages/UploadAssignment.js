import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const UploadAssignment = () => {
  const route = useRoute();
  const { classId, course, section, topic, classDate, assignmentDate } = route.params || {};

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [assignment, setAssignment] = useState('');

  const handleSubmit = async () => {
    if (!name || !email || !assignment || !classId || !course || !section || !topic || !classDate || !assignmentDate) {
      alert("Error: Please fill in all fields");
      return;
    }
  
    const payload = {
      course,
      section,
      topic,
      classDate,
      assignmentDate,
      name,
      email,
      assignment,
      classId,
    };
  
    console.log("Sending Payload:", payload);
  
    try {
      const response = await fetch('http://localhost:5000/assignments/addassignment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
  
      const result = await response.json();
      console.log("API Response:", result);
  
      if (response.ok) {
        alert("Success: Assignment uploaded successfully");
      } else {
        alert("Error: Failed to upload assignment");
      }
    } catch (error) {
      console.error("Upload Error:", error);
      alert("Error: Something went wrong");
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Upload Assignment</Text>

      <View style={styles.row}>
        <View style={styles.infoBox}>
          <Text style={styles.label}>Course</Text>
          <Text style={styles.infoText}>{course}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.label}>Section</Text>
          <Text style={styles.infoText}>{section}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.label}>Topic</Text>
          <Text style={styles.infoText}>{topic}</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.infoBox}>
          <Text style={styles.label}>Class Date</Text>
          <Text style={styles.infoText}>{classDate}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.label}>Assignment Due</Text>
          <Text style={styles.infoText}>{assignmentDate}</Text>
        </View>
      </View>

      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.halfInput]}
          placeholder="Name"
          value={name}
          onChangeText={setName}
          placeholderTextColor="#666"
        />
        <TextInput
          style={[styles.input, styles.halfInput]}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#666"
        />
      </View>

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Your Assignment"
        value={assignment}
        onChangeText={setAssignment}
        placeholderTextColor="#666"
        multiline
      />

      <TouchableOpacity style={styles.uploadButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Upload Assignment</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  infoBox: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 14,
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  halfInput: {
    flex: 1,
    marginHorizontal: 5,
  },
  uploadButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default UploadAssignment;
