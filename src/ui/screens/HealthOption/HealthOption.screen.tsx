import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HealthOptionsScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <View style={styles.healthCardsContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('HealthSettings')}>
        <View style={styles.healthCard}>
          <Text style={styles.healthCardTitle}>Health Setting</Text>
          <Text style={styles.healthCardIcon}>⚙️</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Healthcolumn')}>
        <View style={styles.healthCard}>
          <Text style={styles.healthCardTitle}>Health column</Text>
          <Text style={styles.healthCardIcon}>📋</Text>
        </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('HistoryRecord')}>
      <View style={styles.historyCard}>
        <Text style={styles.historyTitle}>History Record</Text>
        <Text style={styles.historyIcon}>📋</Text>
      </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
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
});

export default HealthOptionsScreen;
