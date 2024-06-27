import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TimePeriodTabs = ({ onSelect }: any) => {
  const [selectedPeriod, setSelectedPeriod] = useState('D');

  const handlePress = (period: any) => {
    setSelectedPeriod(period);
    onSelect(period);
  };

  return (
    <View style={styles.container}>
      {['D', 'W', 'M', '6M', 'Y'].map((period, index) => (
        <TouchableOpacity
          key={period}
          onPress={() => handlePress(period)}
          style={[
            styles.tab,
            selectedPeriod === period && styles.selectedTab,
          ]}
        >
          <Text
            style={[
              styles.tabText,
              selectedPeriod === period && styles.selectedTabText,
            ]}
          >
            {index !== 0 ? '| ' : ''}{period}
          </Text>
        </TouchableOpacity>
      ))}
      <View
        style={[
          styles.selector,
          { left: `${['D', 'W', 'M', '6M', 'Y'].indexOf(selectedPeriod) * 20}%` }
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 20,
    borderBlockColor:'grey',
    borderColor:'grey',
    borderStyle:'solid',
    marginVertical: 10,
    padding: 5,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  selectedTab: {
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
  },
  tabText: {
    color: '#757575',
  },
  selectedTabText: {
    fontWeight: 'bold',
    color: '#757575',
  },
  selector: {
    position: 'absolute',
    bottom: 0,
    width: '20%',
    height: 4,
    backgroundColor: '#757575',
    borderRadius: 2,
  },
});

export default TimePeriodTabs;
