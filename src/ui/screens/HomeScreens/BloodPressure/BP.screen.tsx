import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import PureChart from 'react-native-pure-chart';
import TimePeriodTabs from '../../../components/TimePeriodTabs';
import BloodPressureAnalysis from './BloodPressureAnalysis';
import { ScrollView } from 'react-native-gesture-handler';
import HealthOptionsScreen from '../../HealthOption/HealthOption.screen';

const VitalsGraphsBP = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('D');
     // Sample data for demonstration
  const dailyData = [
    {
      seriesName: 'Systolic',
      data: [
        { x: 'Mon', y: 120 },
        { x: 'Tue', y: 130 },
        { x: 'Wed', y: 125 },
        { x: 'Thu', y: 140 },
        { x: 'Fri', y: 135 },
        { x: 'Sat', y: 130 },
        { x: 'Sun', y: 125 }
      ],
      color: '#297AB1'
    },
    {
      seriesName: 'Diastolic',
      data: [
        { x: 'Mon', y: 80 },
        { x: 'Tue', y: 85 },
        { x: 'Wed', y: 82 },
        { x: 'Thu', y: 90 },
        { x: 'Fri', y: 88 },
        { x: 'Sat', y: 85 },
        { x: 'Sun', y: 82 }
      ],
      color: '#FF5733'
    }
  ];
    const weeklyData = [
        {
          seriesName: 'Systolic',
          data: [
            { x: 'Week 1', y: 120 },
            { x: 'Week 2', y: 125 },
            { x: 'Week 3', y: 130 },
            { x: 'Week 4', y: 128 }
          ],
          color: '#297AB1'
        },
        {
          seriesName: 'Diastolic',
          data: [
            { x: 'Week 1', y: 80 },
            { x: 'Week 2', y: 82 },
            { x: 'Week 3', y: 85 },
            { x: 'Week 4', y: 83 }
          ],
          color: '#FF5733'
        }
      ];
      
      const monthlyData = [
        {
          seriesName: 'Systolic',
          data: [
            { x: 'Jan', y: 120 },
            { x: 'Feb', y: 125 },
            { x: 'Mar', y: 130 },
            { x: 'Apr', y: 128 },
            { x: 'May', y: 135 },
            { x: 'Jun', y: 130 },
            { x: 'Jul', y: 125 },
            { x: 'Aug', y: 120 },
            { x: 'Sep', y: 125 },
            { x: 'Oct', y: 130 },
            { x: 'Nov', y: 128 },
            { x: 'Dec', y: 125 }
          ],
          color: '#297AB1'
        },
        {
          seriesName: 'Diastolic',
          data: [
            { x: 'Jan', y: 80 },
            { x: 'Feb', y: 82 },
            { x: 'Mar', y: 85 },
            { x: 'Apr', y: 83 },
            { x: 'May', y: 88 },
            { x: 'Jun', y: 85 },
            { x: 'Jul', y: 82 },
            { x: 'Aug', y: 80 },
            { x: 'Sep', y: 82 },
            { x: 'Oct', y: 85 },
            { x: 'Nov', y: 83 },
            { x: 'Dec', y: 82 }
          ],
          color: '#FF5733'
        }
      ];
      
      const yearlyData = [
        {
          seriesName: 'Systolic',
          data: [
            { x: 'Jan', y: 120 },
            { x: 'Feb', y: 125 },
            { x: 'Mar', y: 130 },
            { x: 'Apr', y: 128 },
            { x: 'May', y: 135 },
            { x: 'Jun', y: 130 },
            { x: 'Jul', y: 125 },
            { x: 'Aug', y: 120 },
            { x: 'Sep', y: 125 },
            { x: 'Oct', y: 130 },
            { x: 'Nov', y: 128 },
            { x: 'Dec', y: 125 }
          ],
          color: '#297AB1'
        },
        {
          seriesName: 'Diastolic',
          data: [
            { x: 'Jan', y: 80 },
            { x: 'Feb', y: 82 },
            { x: 'Mar', y: 85 },
            { x: 'Apr', y: 83 },
            { x: 'May', y: 88 },
            { x: 'Jun', y: 85 },
            { x: 'Jul', y: 82 },
            { x: 'Aug', y: 80 },
            { x: 'Sep', y: 82 },
            { x: 'Oct', y: 85 },
            { x: 'Nov', y: 83 },
            { x: 'Dec', y: 82 }
          ],
          color: '#FF5733'
        }
      ];
      
    var data = [
        {seriesName: 'series1', data: [30, 200, 170, 250, 10], color: ' #45BFAB'}
       
      ];
      const getDataForOption = (option:any) => {
        switch (option) {
          case 'D':
            return dailyData;
            case 'W':
                return weeklyData;
                case 'M':
                    return monthlyData;
                    case 'Y':
                        return yearlyData;
          // Add cases for 'W', 'M', '6M', 'Y' with respective data
          default:
            return dailyData; // Default to daily data
        }
      };
      
  return (
    <ScrollView>
    <View style={styles.container}>
     <View style={styles.innerContent}>
        <View style={styles.graphCard}>  
        <TimePeriodTabs onSelect={setSelectedPeriod} /> 
          <PureChart
          width={'100%'}
          height={110}
          data={getDataForOption(selectedPeriod)} type='bar' />
        </View>
        <View style={styles.analyticsCard}>
          <BloodPressureAnalysis></BloodPressureAnalysis>
        </View>
       <HealthOptionsScreen></HealthOptionsScreen>
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

export default VitalsGraphsBP;
