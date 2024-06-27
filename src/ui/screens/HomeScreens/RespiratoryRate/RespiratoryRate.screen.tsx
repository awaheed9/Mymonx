import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, useColorScheme } from 'react-native';
import PureChart from 'react-native-pure-chart';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const RespiratoryRateScreen = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('daily');
  const colorScheme = useColorScheme();
  const styles = colorScheme === 'dark' ? darkStyles : lightStyles;

  const dailyData = [
    { x: '00:00', y: 14 },
    { x: '06:00', y: 16 },
    { x: '12:00', y: 15 },
    { x: '18:00', y: 14 },
    { x: '24:00', y: 15 },
  ];

  const weeklyData = [
    { x: 'Mon', y: 15 },
    { x: 'Tue', y: 14 },
    { x: 'Wed', y: 16 },
    { x: 'Thu', y: 14 },
    { x: 'Fri', y: 15 },
    { x: 'Sat', y: 14 },
    { x: 'Sun', y: 15 },
  ];

  const monthlyData = Array.from({ length: 30 }, (_, i) => ({ x: `${i + 1}`, y: 12 + Math.random() * 3 }));

  const sixMonthsData = [
    { x: 'Jan', y: 14 },
    { x: 'Feb', y: 15 },
    { x: 'Mar', y: 14 },
    { x: 'Apr', y: 15 },
    { x: 'May', y: 14 },
    { x: 'Jun', y: 15 },
  ];

  const yearlyData = [
    { x: 'Jan', y: 14 },
    { x: 'Feb', y: 15 },
    { x: 'Mar', y: 14 },
    { x: 'Apr', y: 15 },
    { x: 'May', y: 14 },
    { x: 'Jun', y: 15 },
    { x: 'Jul', y: 14 },
    { x: 'Aug', y: 15 },
    { x: 'Sep', y: 14 },
    { x: 'Oct', y: 15 },
    { x: 'Nov', y: 14 },
    { x: 'Dec', y: 15 },
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
    const type = 'line';

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
    let category = 'Low';
    let color = '#3CA7E0';

    if (average >= 12 && average < 20) {
      category = 'Normal';
      color = '#59BE58';
    } else if (average >= 20) {
      category = 'High';
      color = '#EA4C38';
    }

    return (
      <View style={styles.analysisContainer}>
        <Text style={styles.analysisTitle}>Respiratory Rate Analysis</Text>
        <Text style={styles.dateRange}>Jun 21 - Jun 27</Text>
        <View style={[styles.circle, { backgroundColor: color }]}>
          <Text style={styles.circleText}>{category}</Text>
          <Text style={styles.circleValue}>{average.toFixed(1)}</Text>
        </View>
        <Text style={styles.weeklyAverage}>Weekly Average</Text>
        <View style={styles.colorLineContainer}>
          <View style={[styles.colorLine, { backgroundColor: '#3CA7E0' }]} />
          <View style={[styles.colorLine, { backgroundColor: '#59BE58' }]} />
          <View style={[styles.colorLine, { backgroundColor: '#EA4C38' }]} />
        </View>
        <View style={styles.barScale}>
          <Text style={styles.scaleText}>Low</Text>
          <Text style={styles.scaleText}>Normal</Text>
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
  shareButton: {
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  timeframeSelector: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  timeframeButton: {
    padding: 10,
    borderRadius: 5,
  },
  selectedTimeframeButton: {},
  timeframeButtonText: {
    color: '#000',
  },
  selectedTimeframeButtonText: {},
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
    fontSize: 12,
  },
  circleValue: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  weeklyAverage: {
    fontSize: 14,
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
  shareButton: {
    ...baseStyles.shareButton,
    backgroundColor: '#A2A1A1',
  },
  title: {
    ...baseStyles.title,
    color: '#000',
  },
  timeframeButton: {
    ...baseStyles.timeframeButton,
    backgroundColor: '#DDD',
  },
  selectedTimeframeButton: {
    ...baseStyles.selectedTimeframeButton,
    backgroundColor: '#45BFAB',
  },
  timeframeButtonText: {
    ...baseStyles.timeframeButtonText,
    color: '#000',
  },
  selectedTimeframeButtonText: {
    ...baseStyles.selectedTimeframeButtonText,
    color: '#FFF',
  },
  dateRange: {
    ...baseStyles.dateRange,
    color: '#888',
  },
  circleText: {
    ...baseStyles.circleText,
    color: '#FFF',
  },
  circleValue: {
    ...baseStyles.circleValue,
    color: '#FFF',
  },
  weeklyAverage: {
    ...baseStyles.weeklyAverage,
    color: '#888',
  },
  scaleText: {
    ...baseStyles.scaleText,
    color: '#888',
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
  shareButton: {
    ...baseStyles.shareButton,
    backgroundColor: '#454F4D',
  },
  title: {
    ...baseStyles.title,
    color: '#FFF',
  },
  timeframeButton: {
    ...baseStyles.timeframeButton,
    backgroundColor: '#888',
  },
  selectedTimeframeButton: {
    ...baseStyles.selectedTimeframeButton,
    backgroundColor: '#45BFAB',
  },
  timeframeButtonText: {
    ...baseStyles.timeframeButtonText,
    color: '#FFF',
  },
  selectedTimeframeButtonText: {
    ...baseStyles.selectedTimeframeButtonText,
    color: '#FFF',
  },
  dateRange: {
    ...baseStyles.dateRange,
    color: '#AAA',
  },
  circleText: {
    ...baseStyles.circleText,
    color: '#000',
  },
  circleValue: {
    ...baseStyles.circleValue,
    color: '#000',
  },
  weeklyAverage: {
    ...baseStyles.weeklyAverage,
    color: '#AAA',
  },
  scaleText: {
    ...baseStyles.scaleText,
    color: '#AAA',
  },
});

export default RespiratoryRateScreen;
