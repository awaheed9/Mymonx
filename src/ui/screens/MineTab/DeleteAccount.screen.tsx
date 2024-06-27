import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const DeleteAccount = () => {
  return (
    <ScrollView style={styles.container}>
     
      <View style={styles.content}>
        <Text style={styles.paragraph}>
          Cancelling an account is an irreversible operation. Before operating, please confirm that all services related to the account have been properly handled. After the account is cancelled:
        </Text>
        <Text style={styles.paragraph}>
          (1) The personal information of this account (including nickname, avatar, health data, etc.) will not be retrieved.
        </Text>
        <Text style={styles.paragraph}>
          (2) This account can no longer be used to log in or add friends and view friends.
        </Text>
        <Text style={styles.paragraph}>
          (3) Your relatives and friends will not be able to contact you or view your health data records through this account.
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.deleteButton}>
            <Text style={styles.buttonText}>Delete Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  backButton: {
    fontSize: 20,
    color: '#000',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6c757d',
  },
  placeholder: {
    width: 20, // same width as the back button to center the title
  },
  content: {
    padding: 20,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
    color: '#212529',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  deleteButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    width: '75%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DeleteAccount;
