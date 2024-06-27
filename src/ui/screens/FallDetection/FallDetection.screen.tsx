import React from 'react';
import { View, Text, ScrollView, Image, Switch, TouchableOpacity } from 'react-native';

const FallDetection = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <View style={{ padding: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
          <TouchableOpacity>
            <Text style={{ fontSize: 20 }}>&lt;</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 18, marginLeft: 'auto', marginRight: 'auto' }}>Fall Detection</Text>
          <View style={{ width: 20 }}></View>
        </View>
        
        <View style={{ alignItems: 'center', marginBottom: 20 }}>
          <Image source={require('./images/fall-icons.png')} style={{ width: 150, height: 150 }} />
        </View>

        <View>
          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#ddd' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 16, marginRight: 10 }}><i className="fa fa-1x fa-user"></i></Text>
              <Text style={{ fontSize: 16 }}>Fall Detection</Text>
            </View>
            <Switch value={true} />
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 20 }}>
          <View style={{ borderWidth: 1, borderColor: '#ddd', borderRadius: 5 }}>
            <TouchableOpacity style={{ padding: 15, borderBottomWidth: 1, borderBottomColor: '#ddd' }} onPress={() => console.log('History Record pressed')}>
              <Text>History Record</Text>
            </TouchableOpacity>
            {/* Additional Accordion items can be added here */}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default FallDetection;
