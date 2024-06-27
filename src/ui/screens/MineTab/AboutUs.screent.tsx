import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Modal, Button } from 'react-native';

const AboutUs = () => {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backButton}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>About us</Text>
        <View style={styles.placeholder}></View>
      </View>

      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
        </View>

        <View style={styles.list}>
          <TouchableOpacity style={styles.listItem} onPress={() => setModalVisible(true)}>
            <Text style={styles.listText}>App Version</Text>
            <View style={styles.listItemRight}>
              <Text style={styles.listSubText}>1.0.3(79)</Text>
              <Image source={{ uri: 'https://via.placeholder.com/30' }} style={styles.arrowIcon} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.listItem}>
            <Text style={styles.listText}>Rate Our App</Text>
            <Image source={{ uri: 'https://via.placeholder.com/30' }} style={styles.arrowIcon} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.listItem}>
            <Text style={styles.listText}>Software Updates</Text>
            <Image source={{ uri: 'https://via.placeholder.com/30' }} style={styles.arrowIcon} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.listItem}>
            <Text style={styles.listText}>Firmware Recover</Text>
            <Image source={{ uri: 'https://via.placeholder.com/30' }} style={styles.arrowIcon} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.listItem}>
            <Text style={styles.listText}>User Agreement</Text>
            <Image source={{ uri: 'https://via.placeholder.com/30' }} style={styles.arrowIcon} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.listItem}>
            <Text style={styles.listText}>Privacy Policy</Text>
            <Image source={{ uri: 'https://via.placeholder.com/30' }} style={styles.arrowIcon} />
          </TouchableOpacity>
        </View>
      </View>

      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Do You want to Clear the Cache?</Text>
            <View style={styles.modalButtons}>
              <Button title="Cancel" onPress={() => setModalVisible(false)} />
              <Button title="Clear" onPress={() => setModalVisible(false)} color="red" />
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
  placeholder: {
    width: 20,
  },
  content: {
    padding: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: '50%',
    height: 150,
    resizeMode: 'contain',
  },
  list: {
    marginTop: 20,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  listText: {
    fontSize: 16,
    color: '#000',
  },
  listSubText: {
    fontSize: 14,
    color: '#6c757d',
    marginRight: 10,
  },
  listItemRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowIcon: {
    width: 30,
    height: 30,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default AboutUs;
