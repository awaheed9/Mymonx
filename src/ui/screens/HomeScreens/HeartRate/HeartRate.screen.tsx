import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import PureChart from 'react-native-pure-chart';
import { Dimensions } from 'react-native';
import HealthOptionsScreen from '../../HealthOption/HealthOption.screen';

const screenWidth = Dimensions.get('window').width;

const HeartRateScreen = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('daily');

  const dailyData = [
    { x: '00:00', y: 70 },
    { x: '06:00', y: 65 },
    { x: '12:00', y: 75 },
    { x: '18:00', y: 80 },
    { x: '24:00', y: 72 },
  ];

  const weeklyData = [
    { x: 'Mon', y: 70 },
    { x: 'Tue', y: 68 },
    { x: 'Wed', y: 72 },
    { x: 'Thu', y: 75 },
    { x: 'Fri', y: 73 },
    { x: 'Sat', y: 74 },
    { x: 'Sun', y: 70 },
  ];

  const monthlyData = Array.from({ length: 30 }, (_, i) => ({ x: `${i + 1}`, y: Math.random() * 20 + 60 }));

  const sixMonthsData = [
    { x: 'Jan', y: 70 },
    { x: 'Feb', y: 68 },
    { x: 'Mar', y: 72 },
    { x: 'Apr', y: 75 },
    { x: 'May', y: 73 },
    { x: 'Jun', y: 74 },
  ];

  const yearlyData = [
    { x: 'Jan', y: 70 },
    { x: 'Feb', y: 68 },
    { x: 'Mar', y: 72 },
    { x: 'Apr', y: 75 },
    { x: 'May', y: 73 },
    { x: 'Jun', y: 74 },
    { x: 'Jul', y: 72 },
    { x: 'Aug', y: 71 },
    { x: 'Sep', y: 70 },
    { x: 'Oct', y: 69 },
    { x: 'Nov', y: 72 },
    { x: 'Dec', y: 70 },
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
              <Text style={{ textAlign: 'center' }}>{point.y.toFixed(1)}</Text>
            )
          }}
        />
      </View>

      <View style={styles.analysisContainer}>
        <Text style={styles.analysisTitle}>Heart Rate Analysis</Text>
        <Text style={styles.weeklyAverage}>Weekly Average</Text>
        <View style={styles.circleContainer}>
        <View style={styles.valuesContainer}>
            <Text style={styles.lowestText}>
              <Text style={styles.arrow}>↓</Text> <Text>65</Text> Lowest
            </Text>
          </View>
          <View style={[styles.circle, styles.normalCircle]}>
            <Text style={styles.circleText}>NORMAL</Text>
            <Text style={styles.circleValue}>72</Text>
          </View>
          <View style={styles.valuesContainer}>
          
            <Text style={styles.highestText}>
              80<Text style={styles.arrow}>↑</Text> Highest
            </Text>
          </View>
        </View>
        <View style={styles.barScaleContainer}>
          <Text style={styles.scaleText}>Low</Text>
          <Text style={styles.scaleText}>Normal</Text>
          <Text style={styles.scaleText}>High</Text>
        </View>
        <View style={styles.barScale}>
          <View style={[styles.barSegment, styles.lowSegment]} />
          <View style={[styles.barSegment, styles.normalSegment]} />
          <View style={[styles.barSegment, styles.highSegment]} />
          <View style={styles.arrowDownContainer}>
            <Text style={styles.arrowDown}>↓</Text>
          </View>
        </View>
        
      </View>
      <HealthOptionsScreen></HealthOptionsScreen>
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
    backgroundColor: '#3CA7E0',
  },
  normalSegment: {
    backgroundColor: '#59BE58',
  },
  highSegment: {
    backgroundColor: '#EA4C38',
  },
  arrowDownContainer: {
    position: 'absolute',
    left: '50%',
  },
  arrowDown: {
    fontSize: 20,
    color: '#000',
  },
});

export default HeartRateScreen;
