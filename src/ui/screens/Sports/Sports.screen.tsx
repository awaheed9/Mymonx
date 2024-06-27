import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, useColorScheme } from 'react-native';

const sports = [
  'Running', 'Cycling', 'Fitness', 'Ropeskipping', 'Basketball', 'Badminton', 'Table Tennis'
];

const SportTabScreen = ({ navigation }) => {
  const [selectedSport, setSelectedSport] = useState('Running');
  const colorScheme = useColorScheme();
  const styles = colorScheme === 'dark' ? darkStyles : lightStyles;

  const renderSportHomePage = () => {
    return (
      <View style={styles.sportHomePage}>
        <View style={styles.infoRow}>
          <Text style={styles.infoIcon}>☁️</Text>
          <Text style={styles.infoText}>20°C</Text>
          <Text style={styles.infoIcon}>⌚</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoIcon}>📍</Text>
          <Text style={styles.infoText}>Current Location</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoText}>18°C ~ 22°C</Text>
        </View>
        <TouchableOpacity style={styles.playButton} onPress={() => navigation.navigate(`${selectedSport}InProgress`)}>
          <Text style={styles.playButtonText}>▶️</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.recordButton} onPress={() => navigation.navigate('SportsRecord')}>
          <Text style={styles.recordButtonText}>📑</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Sport</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.sportsScroll}>
        {sports.map((sport) => (
          <TouchableOpacity
            key={sport}
            onPress={() => setSelectedSport(sport)}
            style={[styles.sportTitle, selectedSport === sport && styles.selectedSportTitle]}
          >
            <Text style={[styles.sportTitleText, selectedSport === sport && styles.selectedSportTitleText]}>
              {sport}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {renderSportHomePage()}
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  recordButton: {
    padding: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  sportsScroll: {
    marginVertical: 20,
  },
  sportTitle: {
    marginHorizontal: 10,
    paddingBottom: 5,
  },
  selectedSportTitle: {
    borderBottomWidth: 2,
    borderBottomColor: '#45BFAB',
  },
  sportTitleText: {
    fontSize: 16,
  },
  selectedSportTitleText: {
    color: '#45BFAB',
  },
  sportHomePage: {
    alignItems: 'center',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  infoIcon: {
    marginRight: 10,
    fontSize: 18,
  },
  infoText: {
    fontSize: 18,
  },
  playButton: {
    marginTop: 20,
    padding: 20,
    borderRadius: 50,
    backgroundColor: '#45BFAB',
  },
  playButtonText: {
    fontSize: 24,
    color: '#FFF',
  },
};

const lightStyles = StyleSheet.create({
  ...baseStyles,
  container: {
    ...baseStyles.container,
    backgroundColor: '#FFF',
  },
  recordButton: {
    ...baseStyles.recordButton,
    backgroundColor: '#A2A1A1',
  },
  title: {
    ...baseStyles.title,
    color: '#000',
  },
  sportTitleText: {
    ...baseStyles.sportTitleText,
    color: '#000',
  },
  selectedSportTitleText: {
    ...baseStyles.selectedSportTitleText,
    color: '#45BFAB',
  },
  infoIcon: {
    ...baseStyles.infoIcon,
    color: '#45BFAB',
  },
  infoText: {
    ...baseStyles.infoText,
    color: '#000',
  },
  playButtonText: {
    ...baseStyles.playButtonText,
    color: '#FFF',
  },
});

const darkStyles = StyleSheet.create({
  ...baseStyles,
  container: {
    ...baseStyles.container,
    backgroundColor: '#000',
  },
  recordButton: {
    ...baseStyles.recordButton,
    backgroundColor: '#454F4D',
  },
  title: {
    ...baseStyles.title,
    color: '#FFF',
  },
  sportTitleText: {
    ...baseStyles.sportTitleText,
    color: '#FFF',
  },
  selectedSportTitleText: {
    ...baseStyles.selectedSportTitleText,
    color: '#45BFAB',
  },
  infoIcon: {
    ...baseStyles.infoIcon,
    color: '#45BFAB',
  },
  infoText: {
    ...baseStyles.infoText,
    color: '#FFF',
  },
  playButtonText: {
    ...baseStyles.playButtonText,
    color: '#FFF',
  },
});

export default SportTabScreen;
