import React from 'react';
import {
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import PlantifyFirst from '../assest/plantifyfirst.jpg';
import {global} from './globalcss';
export default function GetStart({navigation}) {
  let nextScreen = () => {
    navigation.navigate('Signup');
  };
  return (
    <View>
      <View style={{alignItems: 'center'}}>
        <Image source={PlantifyFirst} style={global.plantfirst} />
      </View>
      <Text style={global.getready}>WELCOME TO</Text>
      <Text style={global.getready2}>OUR APPLICATION</Text>
      <Text style={global.getready3}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione saepe
        vero placeat, sit rerum,
      </Text>
      <TouchableOpacity
        onPress={nextScreen}
        style={{
          backgroundColor: '#0D986A',
          width: 320,
          height: 45,
          marginLeft: 20,
          marginTop: 45,
          borderRadius: 20,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            textAlign: 'center',
            marginTop: 8,
          }}>
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
}
