import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import styles from '../../../../style';

const ClassList = () => {
  const [classes, setClasses] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const fetchClasses = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/classes');
      if (!response.ok) throw new Error("Failed to fetch classes");

      const data = await response.json();
      setClasses(data);
    } catch (error) {
      console.error('Fetch Error:', error);
      alert("Error", "Something went wrong while fetching classes.");
    } finally {
      setLoading(false);
    }
  };

  const checkAdminAndLoginStatus = async () => {
    try {
      const userRole = await AsyncStorage.getItem('userRole');
      setIsAdmin(userRole === 'admin');
      setIsLoggedIn(!!userRole);
    } catch (error) {
      console.error('Error fetching login status:', error);
    }
  };

  useEffect(() => {
    fetchClasses();
    checkAdminAndLoginStatus();
  }, []);

  const deleteClass = async (classId) => {
    try {
      const response = await fetch(`http://localhost:5000/classes/${classId}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete class');
      }
  
      alert('Class deleted successfully');
      
      // Optionally, refresh the class list after deletion
      fetchClasses();  
    } catch (error) {
      alert('Error deleting class');
    }
  };
  

  return (
    <View style={styles.containerclasslist}>
      <Text style={styles.header}>Class List</Text>

      {loading && <ActivityIndicator size="large" color="blue" />}

      <FlatList
  data={classes}
  keyExtractor={(item) => item._id}
  numColumns={2}
  columnWrapperStyle={styles.row}
  ListEmptyComponent={<Text style={styles.emptyMessage}>No classes available.</Text>}
  renderItem={({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.course}</Text>
      <Text style={styles.classSection}>Section: {item.section}</Text>
      <Text style={styles.classTopic}>Topic: {item.topic}</Text>
      <Text style={styles.classDate}>Class Date: {item.classDate}</Text>
      <Text style={styles.assignmentDate}>Assignment Due: {item.assignmentDate}</Text>

      {isLoggedIn && !isAdmin && (
        <TouchableOpacity
          style={[styles.uploadButton, { backgroundColor: 'blue' }]}
          onPress={() => navigation.navigate('UploadAssignment', { 
            classId: item._id, 
            course: item.course,  
            section: item.section,  
            topic: item.topic,  
            classDate: item.classDate,  
            assignmentDate: item.assignmentDate 
          })}
        >
          <Text style={styles.buttonText}>Upload Assignment</Text>
        </TouchableOpacity>
      )}

      {isAdmin && (
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => navigation.navigate('EditClass', { 
              classId: item._id,
              course: item.course,  
              section: item.section,  
              topic: item.topic,  
              classDate: item.classDate,  
              assignmentDate: item.assignmentDate
            })}
          >
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.deleteButton, { backgroundColor: 'red' }]}
            onPress={() => deleteClass(item._id)}
          >
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )}
/>

    </View>
  );
};

export default ClassList;
