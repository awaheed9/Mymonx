import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BloodPressureAnalysis = () => {
  return (
    <View >
      
        <Text style={styles.title}>
          Blood Pressure Analysis <Text style={styles.icon}>📊</Text>
        </Text>
        <Text style={styles.sysDia}>sys / dia</Text>
        <View style={styles.readingsContainer}>
          <View style={styles.readingBox}>
            <Text style={styles.reading}>↓ 91/62</Text>
            <Text style={styles.readingLabel}>Lowest</Text>
          </View>
          <View style={styles.mainReadingBox}>
            <Text style={styles.mainReading}>96/66</Text>
            <Text style={styles.unit}>mmHg</Text>
          </View>
          <View style={styles.readingBox}>
            <Text style={styles.reading}>↑ 103/70</Text>
            <Text style={styles.readingLabel}>Highest</Text>
          </View>
        </View>
        <Text style={styles.statusText}>Your blood pressure is normal.</Text>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  analysisBox: {
    width: '100%',
    borderRadius: 10,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  icon: {
    fontSize: 18,
  },
  sysDia: {
    color: 'red',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  readingsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  readingBox: {
    alignItems: 'center',
  },
  reading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#757575',
  },
  readingLabel: {
    fontSize: 12,
    color: '#757575',
  },
  mainReadingBox: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  mainReading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4caf50',
    borderWidth: 2,
    borderColor: '#4caf50',
    borderRadius: 5,
    padding: 5,
    paddingHorizontal: 10,
  },
  unit: {
    fontSize: 12,
    color: '#757575',
  },
  statusText: {
    color: '#757575',
    paddingLeft:'20%'
  },
});

export default BloodPressureAnalysis;
