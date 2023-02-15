import React from 'react';
import {View, Image} from 'react-native';
import Navbar from '../assest/menu.png';

export default function Menu() {
  return (
    <View>
      <Image source={Navbar} style={{width: 360, height: 740}} />
    </View>
  );
}
