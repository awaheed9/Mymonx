import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, useColorScheme, ScrollView } from 'react-native';

const CarePage = ({ navigation }) => {
  const colorScheme = useColorScheme();
  const styles = colorScheme === 'dark' ? darkStyles : lightStyles;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Care</Text>
        <TouchableOpacity style={styles.addFriendButton} onPress={() => navigation.navigate('AddFriend')}>
          <Text style={styles.addFriendIcon}>➕</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.noFriendsContainer}>
        <Text style={styles.noFriendsText}>No friends added</Text>
        <Text style={styles.noFriendsIcon}>👥</Text>
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  addFriendButton: {
    padding: 10,
    borderRadius: 5,
  },
  addFriendIcon: {
    fontSize: 24,
  },
  noFriendsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noFriendsText: {
    fontSize: 18,
    marginBottom: 10,
  },
  noFriendsIcon: {
    fontSize: 48,
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
  addFriendButton: {
    ...baseStyles.addFriendButton,
    backgroundColor: '#45BFAB',
  },
  addFriendIcon: {
    ...baseStyles.addFriendIcon,
    color: '#FFF',
  },
  noFriendsText: {
    ...baseStyles.noFriendsText,
    color: '#A2A1A1',
  },
  noFriendsIcon: {
    ...baseStyles.noFriendsIcon,
    color: '#A2A1A1',
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
  addFriendButton: {
    ...baseStyles.addFriendButton,
    backgroundColor: '#45BFAB',
  },
  addFriendIcon: {
    ...baseStyles.addFriendIcon,
    color: '#FFF',
  },
  noFriendsText: {
    ...baseStyles.noFriendsText,
    color: '#C1C1C1',
  },
  noFriendsIcon: {
    ...baseStyles.noFriendsIcon,
    color: '#C1C1C1',
  },
});

export default CarePage;

