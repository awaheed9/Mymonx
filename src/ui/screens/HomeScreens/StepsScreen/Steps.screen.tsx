import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import PureChart from 'react-native-pure-chart';
import { Dimensions } from 'react-native';
import HealthOptionsScreen from '../../HealthOption/HealthOption.screen';

const screenWidth = Dimensions.get('window').width;

const StepsScreen = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('daily');

  const dailySteps = 8567; // Example step count for the day
  const goalSteps = 10000;
  const distanceWalked = 6.5; // Example distance in kilometers
  const caloriesBurnt = 300; // Example calories burnt

  const weeklyData = [
    { x: 'Mon', y: 8567 },
    { x: 'Tue', y: 9876 },
    { x: 'Wed', y: 7654 },
    { x: 'Thu', y: 8345 },
    { x: 'Fri', y: 9000 },
    { x: 'Sat', y: 10234 },
    { x: 'Sun', y: 8900 },
  ];

  const monthlyData = Array.from({ length: 30 }, (_, i) => ({ x: `${i + 1}`, y: Math.random() * 20000 }));

  const sixMonthsData = [
    { x: 'Jan', y: 300000 },
    { x: 'Feb', y: 280000 },
    { x: 'Mar', y: 320000 },
    { x: 'Apr', y: 310000 },
    { x: 'May', y: 330000 },
    { x: 'Jun', y: 340000 },
  ];

  const yearlyData = [
    { x: 'Jan', y: 300000 },
    { x: 'Feb', y: 280000 },
    { x: 'Mar', y: 320000 },
    { x: 'Apr', y: 310000 },
    { x: 'May', y: 330000 },
    { x: 'Jun', y: 340000 },
    { x: 'Jul', y: 350000 },
    { x: 'Aug', y: 360000 },
    { x: 'Sep', y: 370000 },
    { x: 'Oct', y: 380000 },
    { x: 'Nov', y: 390000 },
    { x: 'Dec', y: 400000 },
  ];

  const getGraphData = () => {
    switch (selectedTimeframe) {
      case 'weekly':
        return weeklyData;
      case 'monthly':
        return monthlyData;
      case 'sixMonths':
        return sixMonthsData;
      case 'yearly':
        return yearlyData;
      default:
        return [];
    }
  };

  const renderDailyView = () => (
    <View style={styles.dailyContainer}>
      <Text style={styles.dailyTitle}>Today</Text>
      <View style={styles.ringContainer}>
        <View style={[styles.ring, { borderColor: dailySteps >= goalSteps ? '#59BE58' : '#D2D1D1' }]}>
          <Text style={styles.ringText}>{dailySteps}</Text>
        </View>
      </View>
      <View style={styles.dailyStats}>
        <View style={styles.stat}>
          <Text style={styles.statValue}>{distanceWalked} km</Text>
          <Text style={styles.statLabel}>Distance walked</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>{caloriesBurnt} cal</Text>
          <Text style={styles.statLabel}>Calories burnt</Text>
        </View>
      </View>
      <Text style={styles.analysisTitle}>Steps Analysis</Text>
      <Text style={styles.analysisText}>
        {dailySteps >= goalSteps
          ? `You have reached your daily step count goal. Congratulations! Keep going.`
          : `${goalSteps - dailySteps} steps until you reach your daily step count goal. Keep going.`}
      </Text>
    </View>
  );

  const renderGraphView = () => (
    <View style={styles.graphContainer}>
      <PureChart
        data={getGraphData()}
        type="bar"
        width={screenWidth - 40}
        height={220}
        customValueRenderer={(index, point) => {
          if (index === 0) return null;
          return <Text style={{ textAlign: 'center' }}>{point.y.toFixed(1)}</Text>;
        }}
      />
      {selectedTimeframe === 'weekly' && renderWeeklyAnalysis()}
      {selectedTimeframe === 'monthly' && renderMonthlyAnalysis()}
      {selectedTimeframe === 'sixMonths' && renderSixMonthsAnalysis()}
      {selectedTimeframe === 'yearly' && renderYearlyAnalysis()}
    </View>
  );

  const renderWeeklyAnalysis = () => (
    <View style={styles.analysisContainer}>
      <Text style={styles.analysisTitle}>Weekly Step Analysis</Text>
      <Text style={styles.analysisText}>Total steps: {weeklyData.reduce((sum, day) => sum + day.y, 0)}</Text>
      <Text style={styles.analysisText}>
        Average daily steps: {Math.round(weeklyData.reduce((sum, day) => sum + day.y, 0) / weeklyData.length)}
      </Text>
      <Text style={styles.analysisText}>
        {weeklyData.filter((day) => day.y >= goalSteps).length}/7 daily {goalSteps} steps goal achieved.
      </Text>
    </View>
  );

  const renderMonthlyAnalysis = () => (
    <View style={styles.analysisContainer}>
      <Text style={styles.analysisTitle}>Monthly Step Analysis</Text>
      <Text style={styles.analysisText}>Total steps: {monthlyData.reduce((sum, day) => sum + day.y, 0)}</Text>
      <Text style={styles.analysisText}>
        Average daily steps: {Math.round(monthlyData.reduce((sum, day) => sum + day.y, 0) / monthlyData.length)}
      </Text>
      <Text style={styles.analysisText}>
        {monthlyData.filter((day) => day.y >= goalSteps).length}/{monthlyData.length} daily {goalSteps} steps goal
        achieved.
      </Text>
    </View>
  );

  const renderSixMonthsAnalysis = () => (
    <View style={styles.analysisContainer}>
      <Text style={styles.analysisTitle}>6-Months Step Analysis</Text>
      <Text style={styles.analysisText}>Total steps: {sixMonthsData.reduce((sum, month) => sum + month.y, 0)}</Text>
      <Text style={styles.analysisText}>
        Average total steps per month: {Math.round(sixMonthsData.reduce((sum, month) => sum + month.y, 0) / 6)}
      </Text>
      <Text style={styles.analysisText}>
        Average daily steps: {Math.round(sixMonthsData.reduce((sum, month) => sum + month.y, 0) / (6 * 30))}
      </Text>
    </View>
  );

  const renderYearlyAnalysis = () => (
    <View style={styles.analysisContainer}>
      <Text style={styles.analysisTitle}>Yearly Step Analysis</Text>
      <Text style={styles.analysisText}>Total steps: {yearlyData.reduce((sum, month) => sum + month.y, 0)}</Text>
      <Text style={styles.analysisText}>
        Average total steps per month: {Math.round(yearlyData.reduce((sum, month) => sum + month.y, 0) / 12)}
      </Text>
      <Text style={styles.analysisText}>
        Average daily steps: {Math.round(yearlyData.reduce((sum, month) => sum + month.y, 0) / 365)}
      </Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
     

      <View style={styles.timeframeSelector}>
        {['daily', 'weekly', 'monthly', 'sixMonths', 'yearly'].map((timeframe) => (
          <TouchableOpacity
            key={timeframe}
            style={[styles.timeframeButton, selectedTimeframe === timeframe && styles.selectedTimeframeButton]}
            onPress={() => setSelectedTimeframe(timeframe)}
          >
            <Text
              style={[styles.timeframeButtonText, selectedTimeframe === timeframe && styles.selectedTimeframeButtonText]}
            >
              {timeframe.charAt(0).toUpperCase() + timeframe.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {selectedTimeframe === 'daily' ? renderDailyView() : renderGraphView()}
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
  dailyContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  dailyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ringContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ring: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ringText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  dailyStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20,
  },
  stat: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: '#888',
  },
  analysisTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  analysisText: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginHorizontal: 20,
  },
  graphContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  analysisContainer: {
    marginVertical: 20,
  },
});

export default StepsScreen;
