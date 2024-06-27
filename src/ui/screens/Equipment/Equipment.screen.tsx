import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, useColorScheme, Image } from 'react-native';

const MyEquipmentScreen = ({ navigation }) => {
  const colorScheme = useColorScheme();
  const styles = colorScheme === 'dark' ? darkStyles : lightStyles;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Equipment</Text>
      </View>

      <View style={styles.userSection}>
        <View style={styles.userIcon}>
          <Image source={require('../../../assets/images/home_icon_bt.png')}  />
        </View>
        <Text style={styles.userNumber}>mymonX12345</Text>
        <View style={styles.batterySection}>
        <Image source={require('../../../assets/images/icon_me_watch_power_green_four.png')}  />
          <Text style={styles.batteryLevel}>85%</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('WatchFaceMarket')}>
        <Text style={styles.optionText}>Watch face market</Text>
        <Text style={styles.arrow}>➡️</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('MessagePush')}>
        <Text style={styles.optionText}>Message push</Text>
        <Text style={styles.arrow}>➡️</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('HealthSettings')}>
        <Text style={styles.optionText}>Health Settings</Text>
        <Text style={styles.arrow}>➡️</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('AntiLoss')}>
        <Text style={styles.optionText}>Anti-Loss</Text>
        <Text style={styles.arrow}>➡️</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('MoreSettings')}>
        <Text style={styles.optionText}>More settings</Text>
        <Text style={styles.arrow}>➡️</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('AboutDevice')}>
        <Text style={styles.optionText}>About this device</Text>
        <Text style={styles.arrow}>➡️</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.disconnectButton}>
        <Text style={styles.disconnectButtonText}>Disconnect</Text>
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
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  userSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  userIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  userIconText: {
    fontSize: 24,
  },
  userNumber: {
    fontSize: 18,
    marginBottom: 10,
  },
  batterySection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  batteryIcon: {
    fontSize: 20,
    marginRight: 5,
  },
  batteryLevel: {
    fontSize: 18,
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
  disconnectButton: {
    marginTop: 20,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  disconnectButtonText: {
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
  title: {
    ...baseStyles.title,
    color: '#000',
  },
  userIcon: {
    ...baseStyles.userIcon,
    backgroundColor: '#FFFFFF',
  },
  userIconText: {
    ...baseStyles.userIconText,
    color: '#45BFAB',
  },
  userNumber: {
    ...baseStyles.userNumber,
    color: '#000',
  },
  batterySection: {
    ...baseStyles.batterySection,
  },
  batteryIcon: {
    ...baseStyles.batteryIcon,
    color: '#A2A1A1',
  },
  batteryLevel: {
    ...baseStyles.batteryLevel,
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
  disconnectButton: {
    ...baseStyles.disconnectButton,
    backgroundColor: '#EA4C38',
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
  userIcon: {
    ...baseStyles.userIcon,
    backgroundColor: '#525050',
  },
  userIconText: {
    ...baseStyles.userIconText,
    color: '#45BFAB',
  },
  userNumber: {
    ...baseStyles.userNumber,
    color: '#FFF',
  },
  batterySection: {
    ...baseStyles.batterySection,
  },
  batteryIcon: {
    ...baseStyles.batteryIcon,
    color: '#C1C1C1',
  },
  batteryLevel: {
    ...baseStyles.batteryLevel,
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
  disconnectButton: {
    ...baseStyles.disconnectButton,
    backgroundColor: '#EA4C38',
  },
});

export default MyEquipmentScreen;
