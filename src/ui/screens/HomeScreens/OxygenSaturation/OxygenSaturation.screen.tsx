import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import PureChart from 'react-native-pure-chart';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const OxygenSaturationScreen = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('daily');

  const dailyData = [
    { x: '00:00', y: 95 },
    { x: '06:00', y: 92 },
    { x: '12:00', y: 97 },
    { x: '18:00', y: 94 },
    { x: '24:00', y: 96 },
  ];

  const weeklyData = [
    { x: 'Mon', y: 95 },
    { x: 'Tue', y: 94 },
    { x: 'Wed', y: 93 },
    { x: 'Thu', y: 97 },
    { x: 'Fri', y: 95 },
    { x: 'Sat', y: 96 },
    { x: 'Sun', y: 94 },
  ];

  const monthlyData = Array.from({ length: 30 }, (_, i) => ({ x: `${i + 1}`, y: Math.random() * 10 + 90 }));

  const sixMonthsData = [
    { x: 'Jan', y: 95 },
    { x: 'Feb', y: 94 },
    { x: 'Mar', y: 93 },
    { x: 'Apr', y: 92 },
    { x: 'May', y: 91 },
    { x: 'Jun', y: 94 },
  ];

  const yearlyData = [
    { x: 'Jan', y: 95 },
    { x: 'Feb', y: 94 },
    { x: 'Mar', y: 93 },
    { x: 'Apr', y: 92 },
    { x: 'May', y: 91 },
    { x: 'Jun', y: 94 },
    { x: 'Jul', y: 93 },
    { x: 'Aug', y: 92 },
    { x: 'Sep', y: 91 },
    { x: 'Oct', y: 94 },
    { x: 'Nov', y: 93 },
    { x: 'Dec', y: 92 },
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

  return (
    <ScrollView style={styles.container}>
     
      <View style={styles.timeframeSelector}>
        {['daily', 'weekly', 'monthly', 'sixMonths', 'yearly'].map((timeframe) => (
          <TouchableOpacity
            key={timeframe}
            style={[
              styles.timeframeButton,
              selectedTimeframe === timeframe && styles.selectedTimeframeButton,
            ]}
            onPress={() => setSelectedTimeframe(timeframe)}
          >
            <Text
              style={[
                styles.timeframeButtonText,
                selectedTimeframe === timeframe && styles.selectedTimeframeButtonText,
              ]}
            >
              {timeframe.charAt(0).toUpperCase() + timeframe.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.graphContainer}>
        <PureChart
          data={getGraphData()}
          type="line"
          width={screenWidth - 40}
          height={220}
          customValueRenderer={(index, point) => {
            if (index === 0) return null;
            return (
              <Text style={{ textAlign: 'center' }}>{point.y.toFixed(1)}%</Text>
            )
          }}
        />
      </View>

      <View style={styles.analysisContainer}>
        <Text style={styles.analysisTitle}>SpO2 Analysis</Text>
        <Text style={styles.weeklyAverage}>Weekly Average</Text>
        <View style={styles.circleContainer}>
        <View style={styles.valuesContainer}>
            <Text style={styles.lowestText}>
              <Text style={styles.arrow}>↓</Text><Text> 97% </Text>Lowest
            </Text>
            </View>
          <View style={[styles.circle, styles.normalCircle]}>
            <Text style={styles.circleText}>NORMAL</Text>
            <Text style={styles.circleValue}>98%</Text>
          </View>
          <View style={styles.valuesContainer}>
                      <Text style={styles.highestText}>
              98%<Text style={styles.arrow}>↑</Text> Highest
            </Text>
          </View>
        </View>
        <View style={styles.barScaleContainer}>
          <Text style={styles.scaleText}>Low</Text>
          <Text style={styles.scaleText}>Below Average</Text>
          <Text style={styles.scaleText}>Normal</Text>
        </View>
        <View style={styles.barScale}>
          <View style={[styles.barSegment, styles.lowSegment]} />
          <View style={[styles.barSegment, styles.belowAverageSegment]} />
          <View style={[styles.barSegment, styles.normalSegment]} />
          <View style={styles.arrowDownContainer}>
            <Text style={styles.arrowDown}>↓</Text>
          </View>
        </View>
      </View>
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
    backgroundColor: '#F8F8F8',
    padding: 20,
    borderRadius: 10,
    marginVertical: 20,
  },
  analysisTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  weeklyAverage: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
  circleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  normalCircle: {
    backgroundColor: '#59BE58',
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
  valuesContainer: {
    flex: 1,
    marginLeft: 20,
  },
  lowestText: {
    fontSize: 14,
    marginBottom: 5,
  },
  highestText: {
    fontSize: 14,
  },
  arrow: {
    fontSize: 20,
  },
  barScaleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  scaleText: {
    fontSize: 12,
    color: '#888',
  },
  barScale: {
    flexDirection: 'row',
    height: 10,
    borderRadius: 5,
    overflow: 'hidden',
  },
  barSegment: {
    flex: 1,
  },
  lowSegment: {
    backgroundColor: '#85BFDF',
  },
  belowAverageSegment: {
    backgroundColor: '#3CA7E0',
  },
  normalSegment: {
    backgroundColor: '#59BE58',
  },
  arrowDownContainer: {
    position: 'absolute',
    left: '80%',
  },
  arrowDown: {
    fontSize: 20,
    color: '#000',
  },
});

export default OxygenSaturationScreen;
