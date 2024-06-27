import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, useColorScheme } from 'react-native';

const AddFriendScreen = ({ navigation }) => {
  const colorScheme = useColorScheme();
  const styles = colorScheme === 'dark' ? darkStyles : lightStyles;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Adding Care</Text>
      </View>

      <TextInput style={styles.input} placeholder="Enter username" placeholderTextColor={styles.placeholder.color} />

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.qrButton}>
        <Text style={styles.qrButtonText}>Scan QR code to add</Text>
      </TouchableOpacity>
    </View>
  );
};

const baseStyles = {
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  addButton: {
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF',
  },
  qrButton: {
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderColor: '#45BFAB',
    borderWidth: 1,
  },
  qrButtonText: {
    fontSize: 16,
    color: '#45BFAB',
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
  input: {
    ...baseStyles.input,
    backgroundColor: '#EFEDED',
  },
  addButton: {
    ...baseStyles.addButton,
    backgroundColor: '#45BFAB',
  },
  buttonText: {
    ...baseStyles.buttonText,
    color: '#FFF',
  },
  placeholder: {
    color: '#E0DFDF',
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
    backgroundColor: '#C1C1C1',
  },
  title: {
    ...baseStyles.title,
    color: '#FFF',
  },
  input: {
    ...baseStyles.input,
    backgroundColor: '#6C6B6B',
  },
  addButton: {
    ...baseStyles.addButton,
    backgroundColor: '#45BFAB',
  },
  buttonText: {
    ...baseStyles.buttonText,
    color: '#FFF',
  },
  placeholder: {
    color: '#A09F9F',
  },
});

export default AddFriendScreen;
