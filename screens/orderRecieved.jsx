import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Elipse from '../assest/Ellipse27.png';
import OrderLogo from '../assest/OrderLogo.png';

export default function Order({navigation}) {
  return (
    <View style={{backgroundColor: 'white', width: '100%', height: '100%'}}>
      <View style={{marginTop: 10, marginLeft: 2}}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="chevron-back-sharp" color={'black'} size={42} />
        </TouchableOpacity>
      </View>
      <View>
        <Image source={Elipse} style={{marginTop: -120, marginLeft: 280}} />
        <Image source={Elipse} style={{marginTop: -80, marginLeft: 100}} />
        <View>
          <Text
            style={{
              fontSize: 34,
              fontWeight: 'bold',
              color: '#0D986A',
              marginLeft: 135,
              marginTop: 15,
            }}>
            Order
          </Text>
          <Text
            style={{
              fontSize: 34,
              fontWeight: 'bold',
              color: '#0D986A',
              marginLeft: 108,
              marginTop: -5,
            }}>
            Recieved
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: 'black',
              marginLeft: 95,
              marginTop: 15,
            }}>
            Dumy id : #29492202022
          </Text>
        </View>
        <View>
          <Image
            source={OrderLogo}
            style={{width: 150, height: 126, marginLeft: 105, marginTop: 110}}
          />
          <TouchableOpacity
            style={{
              backgroundColor: '#0D986A',
              width: 320,
              height: 42,
              marginLeft: 20,
              marginTop: 40,
              borderRadius: 20,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                textAlign: 'center',
                marginTop: 8,
              }}>
              Done
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
