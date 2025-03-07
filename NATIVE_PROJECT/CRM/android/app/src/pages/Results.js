import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const Results = () => {
  const [groupedMarks, setGroupedMarks] = useState({});

  useEffect(() => {
    fetchMarks();
  }, []);

  const fetchMarks = async () => {
    try {
      const response = await fetch('http://localhost:5000/marks');
      if (!response.ok) throw new Error(`Error: ${response.statusText}`);
      const data = await response.json();
      
      const groupedData = {};
      data.forEach((item) => {
        if (!groupedData[item.assignment]) {
          groupedData[item.assignment] = [];
        }
        groupedData[item.assignment].push(item);
      });

      setGroupedMarks(groupedData);
    } catch (error) {
      alert("Error fetching marks.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Submitted Marks</Text>

      {Object.keys(groupedMarks).length === 0 ? (
        <Text style={styles.noData}>No marks submitted yet.</Text>
      ) : (
        <FlatList
          data={Object.keys(groupedMarks)}
          keyExtractor={(assignment) => assignment}
          renderItem={({ item: assignment }) => (
            <View style={styles.card}>
              <Text style={styles.cardTitle}>{assignment}</Text>
              {groupedMarks[assignment].map((student, index) => (
                <View key={student._id} style={styles.studentCard}>
                  <Text style={styles.number}>{index + 1}.</Text>
                  <View>
                    <Text style={styles.studentName}>{student.name}</Text>
                    <Text style={styles.label}>Marks: {student.marks}</Text>
                    <Text style={styles.label}>Grade: {student.grade}</Text>
                  </View>
                </View>
              ))}
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
    backgroundColor: '#D2B48C',
    padding: 20,
  },
  header: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
  },
  noData: {
    textAlign: 'center',
    fontSize: 18,
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
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  studentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  number: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
    color: '#333',
  },
  studentName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },
  label: {
    fontSize: 14,
    color: '#555',
  },
});

export default Results;
