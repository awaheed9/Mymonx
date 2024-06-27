import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, useColorScheme } from 'react-native';

const WatchFaceMarketScreen = ({ navigation }) => {
  const colorScheme = useColorScheme();
  const styles = colorScheme === 'dark' ? darkStyles : lightStyles;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Watch face market</Text>
      </View>

      <TouchableOpacity style={styles.customDialButton} onPress={() => navigation.navigate('CustomDial')}>
        <Text style={styles.customDialText}>Custom Dial</Text>
      </TouchableOpacity>

      <View style={styles.watchFaceContainer}>
        <View style={styles.watchFaceOption}>
          <Text style={styles.watchFaceName}>Watch Face 1</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Install</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.watchFaceOption}>
          <Text style={styles.watchFaceName}>Watch Face 2</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Set as current watch face</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.watchFaceOption}>
          <Text style={styles.watchFaceName}>Watch Face 3</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Current watch face</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  customDialButton: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  customDialText: {
    fontSize: 18,
    color: '#FFF',
  },
  watchFaceContainer: {
    borderTopWidth: 1,
  },
  watchFaceOption: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  watchFaceName: {
    fontSize: 18,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#45BFAB',
  },
  buttonText: {
    fontSize: 16,
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
  customDialButton: {
    ...baseStyles.customDialButton,
    backgroundColor: '#45BFAB',
  },
  watchFaceContainer: {
    ...baseStyles.watchFaceContainer,
    borderTopColor: '#CCC',
  },
  watchFaceOption: {
    ...baseStyles.watchFaceOption,
    borderBottomColor: '#CCC',
  },
  watchFaceName: {
    ...baseStyles.watchFaceName,
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
  customDialButton: {
    ...baseStyles.customDialButton,
    backgroundColor: '#45BFAB',
  },
  watchFaceContainer: {
    ...baseStyles.watchFaceContainer,
    borderTopColor: '#555',
  },
  watchFaceOption: {
    ...baseStyles.watchFaceOption,
    borderBottomColor: '#555',
  },
  watchFaceName: {
    ...baseStyles.watchFaceName,
    color: '#FFF',
  },
});

export default WatchFaceMarketScreen;
