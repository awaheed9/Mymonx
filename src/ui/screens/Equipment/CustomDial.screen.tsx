import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, useColorScheme } from 'react-native';

const CustomDialScreen = ({ navigation }) => {
  const colorScheme = useColorScheme();
  const styles = colorScheme === 'dark' ? darkStyles : lightStyles;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Custom Dial</Text>
      </View>

      <View style={styles.customDialContainer}>
        <TouchableOpacity style={styles.customDial}>
          <Text style={styles.customDialText}>Custom 1</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.customDialOptions}>
        <Text style={styles.optionTitle}>Time position</Text>
        <View style={styles.timePositionContainer}>
          <Text style={styles.currentTimePosition}>Center</Text>
          <Text style={styles.arrow}>➡️</Text>
        </View>

        <Text style={styles.optionTitle}>Text color</Text>
        <View style={styles.colorOptions}>
          <View style={styles.colorCircle} />
          <View style={styles.colorCircle} />
          <View style={styles.colorCircle} />
        </View>
      </View>

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save</Text>
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
  customDialContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  customDial: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  customDialText: {
    fontSize: 18,
    color: '#FFF',
  },
  customDialOptions: {
    marginBottom: 20,
  },
  optionTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  timePositionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  currentTimePosition: {
    fontSize: 18,
  },
  arrow: {
    fontSize: 18,
  },
  colorOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  colorCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#45BFAB',
  },
  saveButton: {
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#45BFAB',
  },
  saveButtonText: {
    fontSize: 18,
    color: '#FFF',
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
  customDial: {
    ...baseStyles.customDial,
    backgroundColor: '#45BFAB',
  },
  optionTitle: {
    ...baseStyles.optionTitle,
    color: '#000',
  },
  currentTimePosition: {
    ...baseStyles.currentTimePosition,
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
  customDial: {
    ...baseStyles.customDial,
    backgroundColor: '#45BFAB',
  },
  optionTitle: {
    ...baseStyles.optionTitle,
    color: '#FFF',
  },
  currentTimePosition: {
    ...baseStyles.currentTimePosition,
    color: '#FFF',
  },
  arrow: {
    ...baseStyles.arrow,
    color: '#FFF',
  },
});

export default CustomDialScreen;
