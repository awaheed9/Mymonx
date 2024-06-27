import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import PureChart from 'react-native-pure-chart';
import GlucoseAnalysis from './GlucoseAnalysis.screen';
import TimePeriodTabs from '../../components/TimePeriodTabs';

const VitalsGraphsGlucose = () => {
    const [selectedPeriod, setSelectedPeriod] = useState('D');
     // Dummy data for demonstration
     const dailyData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{ data: [20, 45, 28, 80, 99, 43, 60] }],
    };

    const weeklyData = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{ data: [50, 60, 70, 80] }],
    };

    const monthlyData = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{ data: [100, 200, 150, 180] }],
    };

    const sixMonthsData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{ data: [300, 400, 350, 380, 420, 450] }],
    };

    const yearlyData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{ data: [800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900] }],
    };
     
    var data = [
        {seriesName: 'series1', data: [30, 200, 170, 250, 10], color: ' #45BFAB'}
       
      ];
      


  return (
    <ScrollView  >
    <View style={styles.container}>
      
      <View style={styles.innerContent}>
        <View style={styles.graphCard}>  
        <TimePeriodTabs onSelect={setSelectedPeriod} />    
          <PureChart
          width={'100%'}
          height={110}
          data={data} type='line' />
        </View>
        <View style={styles.analyticsCard}>
        <GlucoseAnalysis 
        avgGlucose={10.2} 
        lowGlucose={7.2} 
        highGlucose={10.2} 
      />
        </View>
        <View style={styles.healthCardsContainer}>
          <View style={styles.healthCard}>
            <Text style={styles.healthCardTitle}>Health Setting</Text>
            <Text style={styles.healthCardIcon}>⚙️</Text>
          </View>
          <View style={styles.healthCard}>
            <Text style={styles.healthCardTitle}>Health column</Text>
            <Text style={styles.healthCardIcon}>📋</Text>
          </View>
        </View>
        <View style={styles.historyCard}>
          <Text style={styles.historyTitle}>History Record</Text>
          <Text style={styles.historyIcon}>📋</Text>
        </View>
      </View>
   
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight:100
  },
  header: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  innerContent: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  graphCard: {
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
    padding: 16,
  },
  graphTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  analyticsCard: {
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
    padding: 16,
  },
  analyticsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  analyticsIcon: {
    color: 'blue',
    fontSize: 20,
  },
  image: {
    width: '100%',
    height: 170,
    resizeMode: 'contain',
  },
  healthCardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  healthCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
    padding: 16,
    marginRight: 8,
  },
  healthCardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  healthCardIcon: {
    fontSize: 24,
    textAlign: 'center',
  },
  historyCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
    padding: 16,
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  historyIcon: {
    fontSize: 24,
    textAlign: 'center',
  },
  footer: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingVertical: 8,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  navItem: {
    textAlign: 'center',
  },
  navIcon: {
    fontSize: 24,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  optionButton: {
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  optionText: {
    fontSize: 16,
  },
  selectedOption: {
    backgroundColor: 'grey',
  },
});

export default VitalsGraphsGlucose;
