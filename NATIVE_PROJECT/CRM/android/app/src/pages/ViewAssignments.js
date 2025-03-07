import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ViewAssignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [marksData, setMarksData] = useState({});

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      const response = await fetch('http://localhost:5000/assignments');
      if (!response.ok) throw new Error(`Error: ${response.statusText}`);
      const data = await response.json();
      setAssignments(data);
    } catch (error) {
      alert("Error fetching assignments.");
    }
  };

  const submitMarks = async (assignment) => {
    if (!marksData[assignment._id]?.marks) {
      alert("Enter marks before submitting!");
      return;
    }

    const { marks } = marksData[assignment._id];
    const grade = calculateGrade(marks);

    try {
      const response = await fetch('http://localhost:5000/marks/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          classId: assignment.classId,
          course: assignment.course,
          section: assignment.section,
          topic: assignment.topic,
          classDate: assignment.classDate,
          assignmentDate: assignment.assignmentDate,
          name: assignment.name,
          email: assignment.email,
          assignment: assignment.assignment,
          marks,
          grade,
        }),
      });

      if (response.ok) {
        alert("Marks submitted successfully!");
      } else {
        alert("Failed to submit marks.");
      }
    } catch (error) {
      alert("Error submitting marks.");
    }
  };

  const calculateGrade = (marks) => {
    if (marks >= 90) return "A+";
    if (marks >= 80) return "A";
    if (marks >= 70) return "B";
    if (marks >= 60) return "C";
    return "F";
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>All Assignments</Text>

      {assignments.length === 0 ? (
        <Text style={styles.noData}>No assignments uploaded yet.</Text>
      ) : (
        <FlatList
          data={assignments}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.label}>{item.name}</Text>
              <Text style={styles.label}>{item.email}</Text>
              <Text style={styles.label}>{item.assignment}</Text>
              <Text style={styles.label}>Course: {item.course}</Text>
              <Text style={styles.label}>Class Date: {item.classDate}</Text>
              <Text style={styles.label}>Due Date: {item.assignmentDate}</Text>

              <TextInput
                style={styles.input}
                placeholder="Enter Marks"
                keyboardType="numeric"
                onChangeText={(text) => setMarksData({ ...marksData, [item._id]: { marks: parseInt(text) } })}
              />

              <TouchableOpacity style={styles.submitButton} onPress={() => submitMarks(item)}>
                <Text style={styles.buttonText}>Submit Marks</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  noData: {
    textAlign: 'center',
    fontSize: 16,
    color: '#555',
  },
  card: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    color: '#555',
  },
  input: {
    backgroundColor: '#F8F9FA',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginTop: 10,
    color: '#333',
  },
  submitButton: {
    marginTop: 10,
    backgroundColor: '#28A745',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ViewAssignments;
