import React from 'react';
import {Image, Text, View} from 'react-native';
import Acclogo from '../assest/acclogo.png';
import Acclogo1 from '../assest/second.png';

export default function Account() {
  return (
    <View style={{backgroundColor: '#0D986A', width: '100%', height: '100%'}}>
      <Image
        style={{width: 242, height: 200, marginTop: 150, marginLeft: 60}}
        source={Acclogo}
      />
      <Image
        style={{width: 250, height: 30, marginTop: 60, marginLeft: 55}}
        source={Acclogo1}
      />
    </View>
  );
}
