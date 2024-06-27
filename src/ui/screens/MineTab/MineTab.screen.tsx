import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, Button, StyleSheet } from 'react-native';

const MineTab = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mine</Text>

      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250' }}
          style={styles.profileImage}
        />
      </View>

      <View style={styles.centered}>
        <Text>User Email Address</Text>
      </View>

      <View>
        <TouchableOpacity style={styles.listItem}>
          <View style={styles.listItemContent}>
            <Image source={require('../../../assets/images/icon_me_watch.png')} style={styles.icon} />
            <Text>mymonx 0363</Text>
          </View>
          <View style={styles.listItemRight}>
            <Image source={require('../../../assets/images/icon_me_watch_power_green_four.png')} style={styles.icon} />
            <Text>52%</Text>
            <Image source={require('../../../assets/images/list_ic_arrow_n.png')} style={styles.icon} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listItem} onPress={() => setModalVisible(true)}>
          <View style={styles.listItemContent}>
            <Image source={require('../../../assets/images/icon_me_clear.png')} style={styles.icon} />
            <Text>Clear Cache</Text>
          </View>
          <View style={styles.listItemRight}>
            <Text>246.97KB</Text>
            <Image source={require('../../../assets/images/list_ic_arrow_n.png')} style={styles.icon} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listItem} onPress={() => navigation.navigate('SecuritySettings')}>
          <View style={styles.listItemContent}>
            <Image source={require('../../../assets/images/icon_me_safe.png')} style={styles.icon} />
            <Text>Security Settings</Text>
          </View>
          <View style={styles.listItemRight}>
            <Image source={require('../../../assets/images/list_ic_arrow_n.png')} style={styles.icon} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listItem}>
          <View style={styles.listItemContent}>
            <Image source={require('../../../assets/images/ic_language.png')} style={styles.icon} />
            <Text>Language</Text>
          </View>
          <View style={styles.listItemRight}>
            <Image source={require('../../../assets/images/list_ic_arrow_n.png')} style={styles.icon} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listItem}>
          <View style={styles.listItemContent}>
            <Image source={require('../../../assets/images/icon_me_help.png')} style={styles.icon} />
            <Text>Help</Text>
          </View>
          <View style={styles.listItemRight}>
            <Image source={require('../../../assets/images/list_ic_arrow_n.png')} style={styles.icon} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listItem} onPress={() => navigation.navigate('AboutUs')}>
          <View style={styles.listItemContent}>
            <Image source={require('../../../assets/images/icon_me_about.png')} style={styles.icon} />
            <Text>About Us</Text>
          </View>
          <View style={styles.listItemRight}>
            <Image source={require('../../../assets/images/list_ic_arrow_n.png')} style={styles.icon} />
          </View>
        </TouchableOpacity>
      </View>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Do you want to clear the cache?</Text>
            <View style={styles.modalActions}>
              <Button title="Cancel" onPress={() => setModalVisible(false)} />
              <Button title="Clear" onPress={() => { /* Clear cache logic */ }} />
            </View>
          </View>
        </View>
      </Modal>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  centered: {
    alignItems: 'center',
    marginVertical: 10,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  listItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItemRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
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
    padding: 20,
    borderRadius: 10,
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  footerButton: {
    alignItems: 'center',
  },
});

export default MineTab;
