import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HealthSettingsScreen = () => {
  const navigation = useNavigation();
  const [healthMonitoring, setHealthMonitoring] = React.useState(false);
  const [temperatureWarning, setTemperatureWarning] = React.useState(false);
  const [heartRateWarning, setHeartRateWarning] = React.useState(false);
  const [sedentaryReminder, setSedentaryReminder] = React.useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Health Settings</Text>
      </View>

      <View style={styles.optionContainer}>
        <View style={styles.optionRow}>
          <Text style={styles.optionText}>Health Monitoring</Text>
          <Switch
            value={healthMonitoring}
            onValueChange={(value) => setHealthMonitoring(value)}
            trackColor={{ false: '#C1C1C1', true: '#45BFAB' }}
            thumbColor="#FFFFFF"
          />
        </View>
        <View style={styles.divider} />

        <View style={styles.optionRow}>
          <Text style={styles.optionText}>Interval</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Interval')}>
            <Text style={styles.arrowText}>{'>'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />

        <View style={styles.optionRow}>
          <Text style={styles.optionText}>Step Target</Text>
          <TouchableOpacity onPress={() => navigation.navigate('StepTarget')}>
            <Text style={styles.arrowText}>{'>'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />

        <View style={styles.optionRow}>
          <Text style={styles.optionText}>Sleep Target</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SleepTarget')}>
            <Text style={styles.arrowText}>{'>'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />

        <View style={styles.optionRow}>
          <Text style={styles.optionText}>Blood Pressure Calibration</Text>
          <TouchableOpacity onPress={() => navigation.navigate('BloodPressureCalibration')}>
            <Text style={styles.arrowText}>{'>'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />

        <View style={styles.optionRow}>
          <Text style={styles.optionText}>Temperature Warning</Text>
          <Switch
            value={temperatureWarning}
            onValueChange={(value) => setTemperatureWarning(value)}
            trackColor={{ false: '#C1C1C1', true: '#45BFAB' }}
            thumbColor="#FFFFFF"
          />
        </View>
        <View style={styles.divider} />

        <View style={styles.optionRow}>
          <Text style={styles.optionText}>Heart Rate Warning</Text>
          <Switch
            value={heartRateWarning}
            onValueChange={(value) => setHeartRateWarning(value)}
            trackColor={{ false: '#C1C1C1', true: '#45BFAB' }}
            thumbColor="#FFFFFF"
          />
        </View>
        <View style={styles.divider} />

        <View style={styles.optionRow}>
          <Text style={styles.optionText}>Sedentary Reminder</Text>
          <Switch
            value={sedentaryReminder}
            onValueChange={(value) => setSedentaryReminder(value)}
            trackColor={{ false: '#C1C1C1', true: '#45BFAB' }}
            thumbColor="#FFFFFF"
          />
        </View>
        <View style={styles.divider} />

        <View style={styles.optionRow}>
          <Text style={styles.optionText}>Fall Detection</Text>
          <TouchableOpacity onPress={() => navigation.navigate('FallDetection')}>
            <Text style={styles.arrowText}>{'>'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  backButton: {
    padding: 10,
    backgroundColor: '#A2A1A1',
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color: '#45BFAB',
    fontWeight: 'bold',
    fontSize: 16,
  },
  optionContainer: {
    padding: 16,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  optionText: {
    fontSize: 16,
  },
  arrowText: {
    fontSize: 20,
    color: '#C1C1C1',
  },
  divider: {
    height: 1,
    backgroundColor: '#C1C1C1',
    marginVertical: 8,
  },
});

export default HealthSettingsScreen;
