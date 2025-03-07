import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const EditClass = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { classId } = route.params || {};

  const [course, setCourse] = useState('');
  const [section, setSection] = useState('');
  const [topic, setTopic] = useState('');
  const [classDate, setClassDate] = useState('');
  const [assignmentDate, setAssignmentDate] = useState('');

  useEffect(() => {
    if (classId) {
      fetch(`http://localhost:5000/classes/${classId}`)
        .then((res) => res.json())
        .then((data) => {
          setCourse(data.course || '');
          setSection(data.section || '');
          setTopic(data.topic || '');
          setClassDate(data.classDate || '');
          setAssignmentDate(data.assignmentDate || '');
        })
        .catch(() => alert('Error', 'Failed to fetch class details'));
    }
  }, [classId]);

  const handleUpdateClass = async (classId) => {
    if (!classId) {
      alert('Error', 'Invalid Class ID');
      return;
    }
  
    if (!course || !section || !topic || !classDate || !assignmentDate) {
      alert('Error', 'All fields are required');
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:5000/classes/${classId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ course, section, topic, classDate, assignmentDate }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert('Success', 'Class updated successfully');
        navigation.navigate('ClassList');
      } else {
        throw new Error(data.message || 'Failed to update class');
      }
    } catch (error) {
      alert('Error', 'Something went wrong');
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Class</Text>
      <Text style={styles.label}>Class ID: {classId}</Text>

      <TextInput style={styles.input} value={course} onChangeText={setCourse} placeholder="Course" />
      <TextInput style={styles.input} value={section} onChangeText={setSection} placeholder="Section" />
      <TextInput style={styles.input} value={topic} onChangeText={setTopic} placeholder="Topic" />
      <TextInput style={styles.input} value={classDate} onChangeText={setClassDate} placeholder="Class Date" />
      <TextInput style={styles.input} value={assignmentDate} onChangeText={setAssignmentDate} placeholder="Assignment Due Date" />

      <TouchableOpacity style={styles.button} onPress={() => handleUpdateClass(classId)}>
        <Text style={styles.buttonText}>Update Class</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center' },
  label: { fontSize: 16, marginBottom: 5 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10 },
  button: { backgroundColor: '#007bff', padding: 10, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16 },
});

export default EditClass;
