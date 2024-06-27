import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const WatchInfoScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* <Image source={require('./path/to/watch/image')} style={styles.watchImage} /> */}
      <View style={styles.watchInfo}>
        <Text style={styles.watchName}>Watch Name</Text>
        <Text style={styles.watchPrice}>$199.99</Text>
        <Text style={styles.watchDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum ex at magna tincidunt,
          vel interdum ex tempor. In hac habitasse platea dictumst. Aenean vitae nunc sed eros placerat
          feugiat nec vitae ex.
        </Text>
        <View style={styles.features}>
          <Text style={styles.featuresTitle}>Features:</Text>
          <Text>- Water resistant</Text>
          <Text>- Heart rate monitor</Text>
          <Text>- GPS tracking</Text>
          {/* Add more features here */}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  watchImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  watchInfo: {
    padding: 20,
  },
  watchName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  watchPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'green', // Or any color you prefer
  },
  watchDescription: {
    fontSize: 16,
    marginBottom: 20,
  },
  features: {
    marginBottom: 20,
  },
  featuresTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default WatchInfoScreen;
