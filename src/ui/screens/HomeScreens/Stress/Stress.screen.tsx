import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import PureChart from 'react-native-pure-chart';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const StressScreen = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('daily');

  const dailyData = [
    { x: '00:00', y: 30 },
    { x: '06:00', y: 40 },
    { x: '12:00', y: 50 },
    { x: '18:00', y: 60 },
    { x: '24:00', y: 45 },
  ];

  const weeklyData = [
    { x: 'Mon', y: 50 },
    { x: 'Tue', y: 55 },
    { x: 'Wed', y: 60 },
    { x: 'Thu', y: 65 },
    { x: 'Fri', y: 70 },
    { x: 'Sat', y: 75 },
    { x: 'Sun', y: 80 },
  ];

  const monthlyData = Array.from({ length: 30 }, (_, i) => ({ x: `${i + 1}`, y: Math.random() * 100 }));

  const sixMonthsData = [
    { x: 'Jan', y: 70 },
    { x: 'Feb', y: 65 },
    { x: 'Mar', y: 75 },
    { x: 'Apr', y: 80 },
    { x: 'May', y: 85 },
    { x: 'Jun', y: 90 },
  ];

  const yearlyData = [
    { x: 'Jan', y: 70 },
    { x: 'Feb', y: 65 },
    { x: 'Mar', y: 75 },
    { x: 'Apr', y: 80 },
    { x: 'May', y: 85 },
    { x: 'Jun', y: 90 },
    { x: 'Jul', y: 95 },
    { x: 'Aug', y: 85 },
    { x: 'Sep', y: 80 },
    { x: 'Oct', y: 75 },
    { x: 'Nov', y: 70 },
    { x: 'Dec', y: 65 },
  ];

  const getGraphData = () => {
    switch (selectedTimeframe) {
      case 'daily':
        return dailyData;
      case 'weekly':
        return weeklyData;
      case 'monthly':
        return monthlyData;
      case 'sixMonths':
        return sixMonthsData;
      case 'yearly':
        return yearlyData;
      default:
        return dailyData;
    }
  };

  const renderGraphView = () => {
    const data = getGraphData();
    const type = selectedTimeframe === 'daily' ? 'bar' : 'line';

    return (
      <View style={styles.graphContainer}>
        <PureChart data={data} type={type} width={screenWidth - 40} height={220} />
        {renderAnalysis()}
      </View>
    );
  };

  const renderAnalysis = () => {
    const data = getGraphData();
    const average = data.reduce((acc, point) => acc + point.y, 0) / data.length;
    let category = 'Relaxed';
    let color = '#3CA7E0';

    if (average >= 80) {
      category = 'High';
      color = '#EA4C38';
    } else if (average >= 60) {
      category = 'Medium';
      color = '#FCAC37';
    } else if (average >= 40) {
      category = 'Normal';
      color = '#FACE66';
    }

    return (
      <View style={styles.analysisContainer}>
        <Text style={styles.analysisTitle}>Stress Level Analysis</Text>
        <Text style={styles.dateRange}>Jun 21 - Jun 27</Text>
        <View style={[styles.circle, { backgroundColor: color }]}>
          <Text style={styles.circleText}>{category}</Text>
          <Text style={styles.circleValue}>{average.toFixed(1)}</Text>
        </View>
        <Text style={styles.weeklyAverage}>Weekly Average</Text>
        <View style={styles.colorLineContainer}>
          <View style={[styles.colorLine, { backgroundColor: '#3CA7E0' }]} />
          <View style={[styles.colorLine, { backgroundColor: '#FACE66' }]} />
          <View style={[styles.colorLine, { backgroundColor: '#FCAC37' }]} />
          <View style={[styles.colorLine, { backgroundColor: '#EA4C38' }]} />
        </View>
        <View style={styles.barScale}>
          <Text style={styles.scaleText}>Relaxed</Text>
          <Text style={styles.scaleText}>Normal</Text>
          <Text style={styles.scaleText}>Medium</Text>
          <Text style={styles.scaleText}>High</Text>
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
    
      <View style={styles.timeframeSelector}>
        {['daily', 'weekly', 'monthly', 'sixMonths', 'yearly'].map((timeframe) => (
          <TouchableOpacity
            key={timeframe}
            style={[styles.timeframeButton, selectedTimeframe === timeframe && styles.selectedTimeframeButton]}
            onPress={() => setSelectedTimeframe(timeframe)}
          >
            <Text style={[styles.timeframeButtonText, selectedTimeframe === timeframe && styles.selectedTimeframeButtonText]}>
              {timeframe.charAt(0).toUpperCase() + timeframe.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {renderGraphView()}
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
  timeframeSelector: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  timeframeButton: {
    padding: 10,
    backgroundColor: '#DDD',
    borderRadius: 5,
  },
  selectedTimeframeButton: {
    backgroundColor: '#45BFAB',
  },
  timeframeButtonText: {
    color: '#000',
  },
  selectedTimeframeButtonText: {
    color: '#FFF',
  },
  graphContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  analysisContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  analysisTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dateRange: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    color: '#FFF',
    fontSize: 12,
  },
  circleValue: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  weeklyAverage: {
    fontSize: 14,
    color: '#888',
    marginVertical: 10,
  },
  colorLineContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 10,
    marginTop: 10,
  },
  colorLine: {
    flex: 1,
  },
  barScale: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  scaleText: {
    fontSize: 12,
    color: '#888',
  },
});

export default StressScreen;
