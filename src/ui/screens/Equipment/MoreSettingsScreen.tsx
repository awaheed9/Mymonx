import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, useColorScheme } from 'react-native';

const MoreSettingsScreen = ({ navigation }) => {
  const colorScheme = useColorScheme();
  const styles = colorScheme === 'dark' ? darkStyles : lightStyles;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>More Settings</Text>
      </View>

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('DoNotDisturb')}>
        <Text style={styles.optionText}>Do Not Disturb</Text>
        <Text style={styles.arrow}>➡️</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('AlarmClock')}>
        <Text style={styles.optionText}>Alarm Clock</Text>
        <Text style={styles.arrow}>➡️</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Photograph')}>
        <Text style={styles.optionText}>Photograph</Text>
        <Text style={styles.arrow}>➡️</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('UnitSettings')}>
        <Text style={styles.optionText}>Unit Settings</Text>
        <Text style={styles.arrow}>➡️</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('DisplaySettings')}>
        <Text style={styles.optionText}>Display Settings</Text>
        <Text style={styles.arrow}>➡️</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('ThirdPartyServices')}>
        <Text style={styles.optionText}>Third Party Services</Text>
        <Text style={styles.arrow}>➡️</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('ResetButton')}>
        <Text style={styles.optionText}>Reset Button</Text>
        <Text style={styles.arrow}>➡️</Text>
      </TouchableOpacity>
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
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
    padding: 10,
    borderRadius: 5,
  },
  backButtonText: {
    fontSize: 18,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
  },
  optionText: {
    fontSize: 18,
  },
  arrow: {
    fontSize: 18,
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
  title: {
    ...baseStyles.title,
    color: '#000',
  },
  option: {
    ...baseStyles.option,
    borderBottomColor: '#CCC',
  },
  optionText: {
    ...baseStyles.optionText,
    color: '#000',
  },
  arrow: {
    ...baseStyles.arrow,
    color: '#000',
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
  title: {
    ...baseStyles.title,
    color: '#FFF',
  },
  option: {
    ...baseStyles.option,
    borderBottomColor: '#555',
  },
  optionText: {
    ...baseStyles.optionText,
    color: '#FFF',
  },
  arrow: {
    ...baseStyles.arrow,
    color: '#FFF',
  },
});

export default MoreSettingsScreen;
