import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, useColorScheme } from 'react-native';

const EndSessionPopup = ({ navigation }) => {
  const colorScheme = useColorScheme();
  const styles = colorScheme === 'dark' ? darkStyles : lightStyles;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Remind</Text>
      <Text style={styles.message}>Is it over?</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.endButton} onPress={() => navigation.navigate('SportTab')}>
          <Text style={styles.buttonText}>End the moment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.keepButton} onPress={() => navigation.goBack()}>
          <Text style={styles.keepButtonText}>Keep exercising</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const baseStyles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  endButton: {
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  keepButton: {
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF',
  },
  keepButtonText: {
    fontSize: 16,
  },
};

const lightStyles = StyleSheet.create({
  ...baseStyles,
  container: {
    ...baseStyles.container,
    backgroundColor: '#FFF',
  },
  title: {
    ...baseStyles.title,
    color: '#000',
  },
  message: {
    ...baseStyles.message,
    color: '#000',
  },
  endButton: {
    ...baseStyles.endButton,
    backgroundColor: '#45BFAB',
  },
  keepButton: {
    ...baseStyles.keepButton,
    backgroundColor: '#EEE',
  },
  keepButtonText: {
    ...baseStyles.keepButtonText,
    color: '#45BFAB',
  },
});

const darkStyles = StyleSheet.create({
  ...baseStyles,
  container: {
    ...baseStyles.container,
    backgroundColor: '#000',
  },
  title: {
    ...baseStyles.title,
    color: '#FFF',
  },
  message: {
    ...baseStyles.message,
    color: '#FFF',
  },
  endButton: {
    ...baseStyles.endButton,
    backgroundColor: '#45BFAB',
  },
  keepButton: {
    ...baseStyles.keepButton,
    backgroundColor: '#333',
  },
  keepButtonText: {
    ...baseStyles.keepButtonText,
    color: '#45BFAB',
  },
});

export default EndSessionPopup;
