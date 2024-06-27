import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch, useColorScheme } from 'react-native';

const AntiLossScreen = ({ navigation }) => {
  const colorScheme = useColorScheme();
  const styles = colorScheme === 'dark' ? darkStyles : lightStyles;
  const [isEnabled, setIsEnabled] = React.useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Anti-Loss</Text>
      </View>

      <View style={styles.option}>
        <Text style={styles.optionText}>Anti-loss reminder</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#45BFAB" }}
          thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Looking for my watch</Text>
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
  button: {
    marginTop: 20,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#45BFAB',
  },
  buttonText: {
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
  option: {
    ...baseStyles.option,
    borderBottomColor: '#CCC',
  },
  optionText: {
    ...baseStyles.optionText,
    color: '#000',
  },
  button: {
    ...baseStyles.button,
    backgroundColor: '#45BFAB',
  },
  buttonText: {
    ...baseStyles.buttonText,
    color: '#FFF',
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
  button: {
    ...baseStyles.button,
    backgroundColor: '#45BFAB',
  },
  buttonText: {
    ...baseStyles.buttonText,
    color: '#FFF',
  },
});

export default AntiLossScreen;
