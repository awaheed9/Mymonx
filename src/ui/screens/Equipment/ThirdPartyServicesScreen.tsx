import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, useColorScheme } from 'react-native';

const ThirdPartyServicesScreen = ({ navigation }) => {
  const colorScheme = useColorScheme();
  const styles = colorScheme === 'dark' ? darkStyles : lightStyles;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Third Party Services</Text>
      </View>

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('WeChatSports')}>
        <Text style={styles.optionText}>WeChat Sports</Text>
        <Text style={styles.arrow}>➡️</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('AppleHealth')}>
        <Text style={styles.optionText}>Apple Health</Text>
        <Text style={styles.arrow}>➡️</Text>
      </TouchableOpacity>
    </View>
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

export default ThirdPartyServicesScreen;
