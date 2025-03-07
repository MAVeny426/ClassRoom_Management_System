import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CreateClass = ({ navigation }) => {
  const [course, setCourse] = useState('');
  const [section, setSection] = useState('');
  const [topic, setTopic] = useState('');
  const [classDate, setClassDate] = useState(null);
  const [assignmentDate, setAssignmentDate] = useState(null);
  const [calendarVisible, setCalendarVisible] = useState({ type: '', visible: false });

  const handleCreateClass = async () => {
    if (!course || !section || !topic || !classDate || !assignmentDate) {
      alert('Please fill all details including dates');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/classes/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          course,
          section,
          topic,
          classDate,
          assignmentDate,
        }),
      });

      if (response.ok) {
        alert('Class Created Successfully');
        navigation.navigate('ClassList');
      } else {
        alert('Failed to create class');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong');
    }
  };

  const openCalendar = (type) => {
    setCalendarVisible({ type, visible: true });
  };

  const handleDateSelection = (day) => {
    if (calendarVisible.type === 'classDate') {
      setClassDate(day.dateString);
    } else if (calendarVisible.type === 'assignmentDate') {
      setAssignmentDate(day.dateString);
    }
    setCalendarVisible({ type: '', visible: false });
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.header}>Create Class</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter the Course"
          placeholderTextColor="#6C757D"
          value={course}
          onChangeText={setCourse}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter the Section"
          placeholderTextColor="#6C757D"
          value={section}
          onChangeText={setSection}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter the Topic"
          placeholderTextColor="#6C757D"
          value={topic}
          onChangeText={setTopic}
        />

        <Text style={styles.label}>Class Date</Text>
        <TouchableOpacity style={styles.dateButton} onPress={() => openCalendar('classDate')}>
          <Text style={styles.buttonText}>{classDate ? classDate : 'Pick a Date'}</Text>
        </TouchableOpacity>

        <Text style={styles.label}>Assignment Submit Date</Text>
        <TouchableOpacity style={styles.dateButton} onPress={() => openCalendar('assignmentDate')}>
          <Text style={styles.buttonText}>{assignmentDate ? assignmentDate : 'Pick a Date'}</Text>
        </TouchableOpacity>

        <Modal visible={calendarVisible.visible} animationType="slide">
          <View style={styles.modalContainer}>
            <Text style={styles.modalHeader}>Select a Date:</Text>
            <Calendar
              theme={{
                backgroundColor: '#FFFFFF',
                calendarBackground: '#FFFFFF',
                textSectionTitleColor: '#007BFF',
                dayTextColor: '#212529',
                todayTextColor: '#007BFF',
                selectedDayBackgroundColor: '#0056B3',
                selectedDayTextColor: '#FFFFFF',
                monthTextColor: '#007BFF',
                arrowColor: '#007BFF',
              }}
              onDayPress={handleDateSelection}
            />
            <TouchableOpacity
              onPress={() => setCalendarVisible({ type: '', visible: false })}
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>Close Calendar</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <TouchableOpacity style={styles.submitButton} onPress={handleCreateClass}>
          <Text style={styles.submitButtonText}>Create Class</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  form: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#212529',
  },
  input: {
    width: '100%',
    padding: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#CED4DA',
    borderRadius: 5,
    backgroundColor: '#E9ECEF',
    color: '#212529',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#212529',
  },
  dateButton: {
    width: '100%',
    backgroundColor: '#E9ECEF',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#212529',
  },
  submitButton: {
    width: '100%',
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CreateClass;
