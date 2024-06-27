import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
  StyleSheet,
  ScrollView
} from 'react-native';

const SecuritySettings = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [username, setUsername] = useState('');
  const navigation = useNavigation<any>();
  return (
    <ScrollView style={styles.container}>
     
      <View style={styles.innerContent}>
        <View>
          <TouchableOpacity style={styles.listItem} onPress={() => navigation.navigate('ForgotPassword')}>
            <View style={styles.listItemContent}>
              <Text>Reset Password</Text>
            </View>
            <Image source={require('../../../assets/images/list_ic_arrow_n.png')} style={styles.icon} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.listItem} onPress={() => navigation.navigate('DeleteAccount')}>
            <View style={styles.listItemContent}>
              <Text>Delete Account</Text>
            </View>
            <Image source={require('../../../assets/images/list_ic_arrow_n.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.textCenter}>
          <TouchableOpacity style={styles.signOutButton}>
            <Text style={styles.signOutText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>Change Username</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Username"
              value={username}
              onChangeText={setUsername}
            />
            <View style={styles.modalFooter}>
              <Button title="Cancel" onPress={() => setModalVisible(false)} />
              <Button title="Sure" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </View>
      </Modal>
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
  innerContent: {
    padding: 20,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  listItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
  textCenter: {
    alignItems: 'center',
    marginTop: 20,
  },
  signOutButton: {
    width: '75%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
  },
  signOutText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#000',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 20,
    alignItems: 'center',
  },
  modalHeader: {
    fontSize: 18,
    marginBottom: 15,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 5,
    marginBottom: 20,
  },
  modalFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default SecuritySettings;
