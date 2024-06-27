import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, useColorScheme } from 'react-native';

const SportsRecordScreen = ({ navigation }) => {
  const colorScheme = useColorScheme();
  const styles = colorScheme === 'dark' ? darkStyles : lightStyles;

  const records = [
    {
      month: '2023-05',
      sessions: [
        { sport: 'Running', date: '01/05', startTime: '10:00', endTime: '10:30', distance: '5 km', duration: '00:30:00' },
        { sport: 'Cycling', date: '02/05', startTime: '14:00', endTime: '15:00', distance: '20 km', duration: '01:00:00' },
      ],
    },
    {
      month: '2023-04',
      sessions: [
        { sport: 'Fitness', date: '15/04', startTime: '09:00', endTime: '09:45', distance: '', duration: '00:45:00' },
      ],
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Sports Record</Text>
      </View>

      {records.map((record) => (
        <View key={record.month} style={styles.recordContainer}>
          <TouchableOpacity style={styles.monthHeader}>
            <Text style={styles.monthText}>{record.month}</Text>
            <Text style={styles.arrow}>▼</Text>
          </TouchableOpacity>
          {record.sessions.map((session, index) => (
            <View key={index} style={styles.sessionContainer}>
              <Text style={styles.sessionText}>
                {session.sport} - {session.date} {session.startTime} - {session.endTime}
              </Text>
              <View style={styles.sessionDetails}>
                <Text style={styles.detailText}>Distance: {session.distance}</Text>
                <Text style={styles.detailText}>Duration: {session.duration}</Text>
              </View>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

const baseStyles = {
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    padding: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  recordContainer: {
    marginVertical: 10,
  },
  monthHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
  monthText: {
    fontSize: 18,
  },
  arrow: {
    fontSize: 18,
  },
  sessionContainer: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  sessionText: {
    fontSize: 16,
    marginBottom: 5,
  },
  sessionDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailText: {
    fontSize: 14,
  },
};

const lightStyles = StyleSheet.create({
  ...baseStyles,
  container: {
    ...baseStyles.container,
    backgroundColor: '#FFF',
  },
  backButton: {
    ...baseStyles.backButton,
    backgroundColor: '#A2A1A1',
  },
  title: {
    ...baseStyles.title,
    color: '#000',
  },
  monthHeader: {
    ...baseStyles.monthHeader,
    backgroundColor: '#F0F0F0',
  },
  monthText: {
    ...baseStyles.monthText,
    color: '#000',
  },
  sessionContainer: {
    ...baseStyles.sessionContainer,
    backgroundColor: '#EEE',
  },
  sessionText: {
    ...baseStyles.sessionText,
    color: '#000',
  },
  detailText: {
    ...baseStyles.detailText,
    color: '#000',
  },
});

const darkStyles = StyleSheet.create({
  ...baseStyles,
  container: {
    ...baseStyles.container,
    backgroundColor: '#000',
  },
  backButton: {
    ...baseStyles.backButton,
    backgroundColor: '#454F4D',
  },
  title: {
    ...baseStyles.title,
    color: '#FFF',
  },
  monthHeader: {
    ...baseStyles.monthHeader,
    backgroundColor: '#333',
  },
  monthText: {
    ...baseStyles.monthText,
    color: '#FFF',
  },
  sessionContainer: {
    ...baseStyles.sessionContainer,
    backgroundColor: '#333',
  },
  sessionText: {
    ...baseStyles.sessionText,
    color: '#FFF',
  },
  detailText: {
    ...baseStyles.detailText,
    color: '#FFF',
  },
});

export default SportsRecordScreen;
