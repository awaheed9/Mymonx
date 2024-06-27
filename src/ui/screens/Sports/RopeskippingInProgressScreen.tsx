import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, useColorScheme } from 'react-native';

const RopeskippingInProgressScreen = ({ navigation }) => {
  const colorScheme = useColorScheme();
  const styles = colorScheme === 'dark' ? darkStyles : lightStyles;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>In Progress</Text>
      </View>

      <Text style={styles.sportTitle}>Ropeskipping</Text>

      <View style={styles.timerContainer}>
        <Text style={styles.timerText}>00:00:00</Text>
      </View>

      <View style={styles.metricsContainer}>
        <View style={styles.metricBox}>
          <Text style={styles.metricLabel}>HR</Text>
          <Text style={styles.metricValue}>120</Text>
        </View>
        <View style={styles.metricBox}>
          <Text style={styles.metricLabel}>Steps</Text>
          <Text style={styles.metricValue}>1500</Text>
        </View>
        <View style={styles.metricBox}>
          <Text style={styles.metricLabel}>Calories</Text>
          <Text style={styles.metricValue}>100</Text>
        </View>
        <View style={styles.metricBox}>
          <Text style={styles.metricLabel}>Distance</Text>
          <Text style={styles.metricValue}>2.5 km</Text>
        </View>
        <View style={styles.metricBox}>
          <Text style={styles.metricLabel}>Pace</Text>
          <Text style={styles.metricValue}>6:00</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.stopButton} onPress={() => navigation.navigate('EndSessionPopup')}>
        <Text style={styles.buttonText}>Stop</Text>
      </TouchableOpacity>
    </View>
  );
};

const baseStyles = {
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
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
  sportTitle: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
  },
  timerContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  timerText: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  metricsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  metricBox: {
    width: '45%',
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  metricLabel: {
    fontSize: 16,
  },
  metricValue: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  stopButton: {
    padding: 20,
    borderRadius: 50,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
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
  sportTitle: {
    ...baseStyles.sportTitle,
    color: '#000',
  },
  timerText: {
    ...baseStyles.timerText,
    color: '#000',
  },
  metricBox: {
    ...baseStyles.metricBox,
    backgroundColor: '#F0F0F0',
  },
  metricLabel: {
    ...baseStyles.metricLabel,
    color: '#000',
  },
  metricValue: {
    ...baseStyles.metricValue,
    color: '#000',
  },
  stopButton: {
    ...baseStyles.stopButton,
    backgroundColor: '#45BFAB',
  },
  buttonText: {
    ...baseStyles.buttonText,
    color: '#FFF',
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
  sportTitle: {
    ...baseStyles.sportTitle,
    color: '#FFF',
  },
  timerText: {
    ...baseStyles.timerText,
    color: '#FFF',
  },
  metricBox: {
    ...baseStyles.metricBox,
    backgroundColor: '#333',
  },
  metricLabel: {
    ...baseStyles.metricLabel,
    color: '#FFF',
  },
  metricValue: {
    ...baseStyles.metricValue,
    color: '#FFF',
  },
  stopButton: {
    ...baseStyles.stopButton,
    backgroundColor: '#45BFAB',
  },
  buttonText: {
    ...baseStyles.buttonText,
    color: '#FFF',
  },
});

export default RopeskippingInProgressScreen;
