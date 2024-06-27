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
  ScrollView,
} from 'react-native';

const PersonalInfo = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [username, setUsername] = useState('');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backButton}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Personal Info</Text>
        <TouchableOpacity>
          <Text style={styles.saveButton}>Save</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.innerContent}>
        <View style={styles.profileImageContainer}>
          <Image
            source={{ uri: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250' }}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.emailContainer}>
          <Text>awaheed@gmail.com</Text>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={styles.editIcon}>✎</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.listContainer}>
          {listItems.map((item, index) => (
            <TouchableOpacity key={index} style={styles.listItem}>
              <Text>{item.label}</Text>
              <View style={styles.listItemContent}>
                {item.value && <Text style={styles.listItemValue}>{item.value}</Text>}
                {item.icon && <Image source={item.icon} style={styles.icon} />}
                <Image source={require('../../../assets/images/list_ic_arrow_n.png')} style={styles.arrowIcon} />
              </View>
            </TouchableOpacity>
          ))}
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

const listItems = [
  { label: 'QR code', icon: require('../../../assets/images/icon_me_qr.png') },
  { label: 'Date of Birth', value: '2001-08-23' },
  { label: 'Gender', value: 'Female' },
  { label: 'Height', value: '165CM' },
  { label: 'Weight', value: '55KG' },
  { label: 'Skin Colour of choice', icon: require('../../../assets/images/icon_color_4_nor.png') },
  { label: 'Diabetes Condition', value: 'Pre Diabetic' },
];

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
  saveButton: {
    color: '#007bff',
    fontSize: 16,
  },
  innerContent: {
    padding: 20,
  },
  profileImageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  emailContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  editIcon: {
    marginLeft: 10,
    fontSize: 16,
    color: '#007bff',
  },
  listContainer: {
    marginBottom: 20,
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
  listItemValue: {
    marginRight: 10,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  arrowIcon: {
    width: 20,
    height: 20,
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

export default PersonalInfo;
