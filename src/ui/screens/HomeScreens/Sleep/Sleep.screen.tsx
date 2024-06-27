import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import PureChart from 'react-native-pure-chart';
import { Dimensions } from 'react-native';
import HealthOptionsScreen from '../../HealthOption/HealthOption.screen';

const screenWidth = Dimensions.get('window').width;

const SleepScreen = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('daily');

  const dailySleepData = [
    { label: 'Light', value: 4, color: '#51B2E4' },
    { label: 'Deep', value: 2, color: '#407BE7' },
    { label: 'REM', value: 1.5, color: '#45BFAB' },
    { label: 'Awake', value: 0.5, color: '#FFC000' }
  ];

  const sleepStartTime = "22:00";
  const sleepEndTime = "06:00";

  const weeklyData = [
    { x: 'Mon', y: 8, color: '#51B2E4' },
    { x: 'Tue', y: 7, color: '#407BE7' },
    { x: 'Wed', y: 6, color: '#45BFAB' },
    { x: 'Thu', y: 8, color: '#51B2E4' },
    { x: 'Fri', y: 5, color: '#407BE7' },
    { x: 'Sat', y: 9, color: '#45BFAB' },
    { x: 'Sun', y: 7, color: '#FFC000' }
  ];

  const monthlyData = Array.from({ length: 30 }, (_, i) => ({ x: `${i + 1}`, y: Math.random() * 12 }));

  const sixMonthsData = [
    { x: 'Jan', y: 10, color: '#51B2E4' },
    { x: 'Feb', y: 9, color: '#407BE7' },
    { x: 'Mar', y: 8, color: '#45BFAB' },
    { x: 'Apr', y: 9.5, color: '#FFC000' },
    { x: 'May', y: 10, color: '#51B2E4' },
    { x: 'Jun', y: 11, color: '#407BE7' }
  ];

  const yearlyData = [
    { x: 'Jan', y: 10, color: '#51B2E4' },
    { x: 'Feb', y: 9, color: '#407BE7' },
    { x: 'Mar', y: 8, color: '#45BFAB' },
    { x: 'Apr', y: 9.5, color: '#FFC000' },
    { x: 'May', y: 10, color: '#51B2E4' },
    { x: 'Jun', y: 11, color: '#407BE7' },
    { x: 'Jul', y: 10, color: '#51B2E4' },
    { x: 'Aug', y: 9, color: '#407BE7' },
    { x: 'Sep', y: 8, color: '#45BFAB' },
    { x: 'Oct', y: 9.5, color: '#FFC000' },
    { x: 'Nov', y: 10, color: '#51B2E4' },
    { x: 'Dec', y: 11, color: '#407BE7' }
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
      <View style={styles.pieChartContainer}>
        <PureChart data={dailySleepData} type="pie" />
      </View>
      <View style={styles.categoryKey}>
        {dailySleepData.map((data, index) => (
          <View key={index} style={styles.categoryKeyItem}>
            <View style={[styles.categoryColor, { backgroundColor: data.color }]} />
            <Text style={styles.categoryText}>{data.label}</Text>
          </View>
        ))}
      </View>
      <View style={styles.barChartContainer}>
        <Text style={styles.analysisTitle}>Sleep Analysis</Text>
        <PureChart
          data={[
            { seriesName: 'Light', data: [{ x: sleepStartTime, y: 0 }, { x: sleepEndTime, y: 4 }], color: '#51B2E4' },
            { seriesName: 'Deep', data: [{ x: sleepStartTime, y: 4 }, { x: sleepEndTime, y: 2 }], color: '#407BE7' },
            { seriesName: 'REM', data: [{ x: sleepStartTime, y: 6 }, { x: sleepEndTime, y: 1.5 }], color: '#45BFAB' },
            { seriesName: 'Awake', data: [{ x: sleepStartTime, y: 7.5 }, { x: sleepEndTime, y: 0.5 }], color: '#FFC000' }
            
          ]}
          type="bar"
          width={screenWidth}
          height={220}
        />
      </View>
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
      <Text style={styles.analysisTitle}>Weekly Sleep Analysis</Text>
      <Text style={styles.analysisText}>Total sleep hours: {weeklyData.reduce((sum, day) => sum + day.y, 0)}</Text>
      <Text style={styles.analysisText}>
        Average daily sleep hours: {Math.round(weeklyData.reduce((sum, day) => sum + day.y, 0) / weeklyData.length)}
      </Text>
      <Text style={styles.analysisText}>
        {weeklyData.filter((day) => day.y >= 8).length}/7 days met the 8-hour sleep goal.
      </Text>
    </View>
  );

  const renderMonthlyAnalysis = () => (
    <View style={styles.analysisContainer}>
      <Text style={styles.analysisTitle}>Monthly Sleep Analysis</Text>
      <Text style={styles.analysisText}>Total sleep hours: {monthlyData.reduce((sum, day) => sum + day.y, 0)}</Text>
      <Text style={styles.analysisText}>
        Average daily sleep hours: {Math.round(monthlyData.reduce((sum, day) => sum + day.y, 0) / monthlyData.length)}
      </Text>
      <Text style={styles.analysisText}>
        {monthlyData.filter((day) => day.y >= 8).length}/{monthlyData.length} days met the 8-hour sleep goal.
      </Text>
    </View>
  );

  const renderSixMonthsAnalysis = () => (
    <View style={styles.analysisContainer}>
      <Text style={styles.analysisTitle}>6-Months Sleep Analysis</Text>
      <Text style={styles.analysisText}>Total sleep hours: {sixMonthsData.reduce((sum, month) => sum + month.y, 0)}</Text>
      <Text style={styles.analysisText}>
        Average monthly sleep hours: {Math.round(sixMonthsData.reduce((sum, month) => sum + month.y, 0) / 6)}
      </Text>
      <Text style={styles.analysisText}>
        Average daily sleep hours: {Math.round(sixMonthsData.reduce((sum, month) => sum + month.y, 0) / (6 * 30))}
      </Text>
    </View>
  );

  const renderYearlyAnalysis = () => (
    <View style={styles.analysisContainer}>
      <Text style={styles.analysisTitle}>Yearly Sleep Analysis</Text>
      <Text style={styles.analysisText}>Total sleep hours: {yearlyData.reduce((sum, month) => sum + month.y, 0)}</Text>
      <Text style={styles.analysisText}>
        Average monthly sleep hours: {Math.round(yearlyData.reduce((sum, month) => sum + month.y, 0) / 12)}
      </Text>
      <Text style={styles.analysisText}>
        Average daily sleep hours: {Math.round(yearlyData.reduce((sum, month) => sum + month.y, 0) / 365)}
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
  pieChartContainer: {
    marginBottom: 20,
  },
  categoryKey: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  categoryKeyItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryColor: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  categoryText: {
    fontSize: 14,
  },
  barChartContainer: {
    width: '80%',
    alignContent:'center'
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

export default SleepScreen;
