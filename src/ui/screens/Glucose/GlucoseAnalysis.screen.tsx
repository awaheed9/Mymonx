import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const screenWidth = Dimensions.get('window').width;

const GlucoseAnalysis = ({ avgGlucose, lowGlucose, highGlucose }:any) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Glucose Analysis</Text>
        <Text style={styles.subHeaderText}>6-Month Average</Text>
      </View>
      <View style={styles.glucoseValueContainer}>
        <Text style={styles.glucoseValue}>{avgGlucose} mmol/L</Text>
      </View>
      <View style={styles.glucoseRangeContainer}>
        <Text style={styles.lowGlucose}>↓ {lowGlucose} Lowest</Text>
        <Text style={styles.highGlucose}>{highGlucose} ↑ Highest</Text>
      </View>
      <View style={styles.rangeIndicator}>
        <View style={[styles.rangeSegment, styles.veryLow]} />
        <View style={[styles.rangeSegment, styles.low]} />
        <View style={[styles.rangeSegment, styles.target]} />
        <View style={[styles.rangeSegment, styles.high]} />
        <View style={[styles.rangeSegment, styles.veryHigh]} />
      </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    margin: 16,
    elevation: 2,
  },
  header: {
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subHeaderText: {
    fontSize: 14,
    color: '#888',
  },
  glucoseValueContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  glucoseValue: {
    fontSize: 32,
    color: '#FFD700', // gold color
    fontWeight: 'bold',
  },
  glucoseRangeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  lowGlucose: {
    color: '#888',
  },
  highGlucose: {
    color: '#888',
  },
  rangeIndicator: {
    flexDirection: 'row',
    height: 16,
    marginBottom: 16,
  },
  rangeSegment: {
    flex: 1,
  },
  veryLow: {
    backgroundColor: '#FF6347', // tomato
  },
  low: {
    backgroundColor: '#FFA500', // orange
  },
  target: {
    backgroundColor: '#9ACD32', // yellowgreen
  },
  high: {
    backgroundColor: '#FFD700', // gold
  },
  veryHigh: {
    backgroundColor: '#FF4500', // orangered
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    padding: 16,
    marginHorizontal: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
  },
});

export default GlucoseAnalysis;
