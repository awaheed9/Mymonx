import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function RunningScreen({ navigation }:any) {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Current Temperature: 25°C</Text>
        <Text style={styles.infoText}>Location: [User's Location]</Text>
        <Text style={styles.infoText}>Temperature Range: 20°C - 30°C</Text>
      </View>
      <Button title="Start Running" color={'#45BFAB'}  onPress={() => navigation.navigate('RunningInProgress')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    marginBottom: 20,
  },
  infoText: {
    fontSize: 18,
    marginVertical: 5,
  },
});
