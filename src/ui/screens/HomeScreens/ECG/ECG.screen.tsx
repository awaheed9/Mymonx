import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import PureChart from 'react-native-pure-chart';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const ECGScreen = () => {
  const [selectedWrist, setSelectedWrist] = useState('');
  const [isMeasuring, setIsMeasuring] = useState(false);
  const [measurementProgress, setMeasurementProgress] = useState(0);

  const startMeasurement = () => {
    setIsMeasuring(true);
    setMeasurementProgress(0);
    // Simulate measurement progress
    const interval = setInterval(() => {
      setMeasurementProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsMeasuring(false);
          return 100;
        }
        return prev + 10;
      });
    }, 1000);
  };

  const sampleData = [
    { x: '1', y: 20 },
    { x: '2', y: 30 },
    { x: '3', y: 40 },
    { x: '4', y: 20 },
    { x: '5', y: 50 },
    { x: '6', y: 30 },
    { x: '7', y: 20 },
    { x: '8', y: 10 },
    { x: '9', y: 40 },
    { x: '10', y: 60 },
    { x: '11', y: 30 },
    { x: '12', y: 20 },
    { x: '13', y: 10 },
    { x: '14', y: 40 },
    { x: '15', y: 60 },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>ECG Measurement</Text>
        <TouchableOpacity style={styles.shareButton}>
          <Text style={styles.buttonText}>Share</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.valuesBar}>
        <Text style={styles.valueText}>BP: -- mmHg</Text>
        <Text style={styles.valueText}>HR: -- bpm</Text>
        <Text style={styles.valueText}>HRV: -- ms</Text>
      </View>

      <View style={styles.graphContainer}>
        <PureChart
          data={sampleData}
          type="line"
          width={screenWidth - 40}
          height={220}
          customValueRenderer={(index, point) => {
            if (index === 0) return null;
            return (
              <Text style={{ textAlign: 'center' }}>{point.y}</Text>
            )
          }}
        />
      </View>

      {!isMeasuring ? (
        <TouchableOpacity style={styles.measureButton} onPress={startMeasurement}>
          <Text style={styles.measureButtonText}>Start Measuring</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.measurementContainer}>
          <Text style={styles.progressText}>{measurementProgress}%</Text>
          <TouchableOpacity style={styles.stopButton} onPress={() => setIsMeasuring(false)}>
            <Text style={styles.stopButtonText}>Stop</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    padding: 10,
    backgroundColor: '#A2A1A1',
    borderRadius: 5,
  },
  shareButton: {
    padding: 10,
    backgroundColor: '#A2A1A1',
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  valuesBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  valueText: {
    fontSize: 16,
    color: '#000',
  },
  graphContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  measureButton: {
    padding: 15,
    backgroundColor: '#45BFAB',
    borderRadius: 10,
    alignItems: 'center',
  },
  measureButtonText: {
    color: '#FFF',
    fontSize: 18,
  },
  measurementContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  progressText: {
    fontSize: 24,
    color: '#000',
    marginVertical: 10,
  },
  stopButton: {
    padding: 15,
    backgroundColor: '#EA4C38',
    borderRadius: 10,
  },
  stopButtonText: {
    color: '#FFF',
    fontSize: 18,
  },
});

export default ECGScreen;
