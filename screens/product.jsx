import React from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import plantlogo from '../assest/plantlogo.png';
import bottomimg from '../assest/bottom.jpg';
import axios from 'axios';
import {BASE_URL} from '../config';
export default function Product({navigation, route}) {
  let [productDetails, setProductDetails] = useState({});
  console.log(productDetails);
  let addToFav = e => {
    axios
      .post(`${BASE_URL}favoriteproduct`, e)
      // console.log(productDetails)
      .then(res => {
        console.log(res.data, 'response');
        if (res.data.status) {
          //true
          // ToastAndroid.show(res.data.message, ToastAndroid.SHORT)
          console.log(res.data.message);
          ToastAndroid.show(res.data.message, ToastAndroid.SHORT);

          // setLoader(false)
        } else {
          //false
          console.log(res.data.message);
          // alert(res.data.message)

          ToastAndroid.show(res.data.message, ToastAndroid.SHORT);
        }
      })
      .catch(error => {
        console.log(error, 'error');
      });
  };
  let addToCart = e => {
    axios
      .post(`${BASE_URL}cartproduct`, e)
      // console.log(productDetails)
      .then(res => {
        console.log(res.data, 'response');
        if (res.data.status) {
          //true
          ToastAndroid.show(res.data.message, ToastAndroid.SHORT);
          console.log(res.data.message);

          // setLoader(false)
        } else {
          //false
          console.log(res.data.message);
          // alert(res.data.message)

          ToastAndroid.show(res.data.message, ToastAndroid.SHORT);
          // setLoader(false)
        }
      })
      .catch(error => {
        console.log(error, 'error');
      });
  };
  useEffect(() => {
    setProductDetails(route.params);
  });
  return (
    <View style={{backgroundColor: 'white', width: '100%', height: '100%'}}>
      <ScrollView>
        <ImageBackground
          source={productDetails.backImage}
          style={{
            width: 390,
            height: 480,
            marginLeft: -15,
            marginTop: -60,
          }}>
          <View>
            <Image
              source={plantlogo}
              style={{width: '44%', height: 28, marginTop: 75, marginLeft: 32}}
            />
            <TouchableOpacity style={{marginTop: -29, marginLeft: 270}}>
              <Icon name="search" color={'black'} size={22} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginTop: -26, marginLeft: 320}}
              onPress={() => navigation.navigate('Menu')}>
              <Ionicons name="menu" color={'black'} size={29} />
            </TouchableOpacity>
          </View>

          <Text
            style={{
              marginTop: 50,
              color: 'black',
              fontSize: 15,
              marginLeft: 35,
              fontWeight: 'bold',
            }}>
            {productDetails.textOne}
          </Text>
          <Text
            style={{
              marginTop: -0,
              color: 'black',
              fontSize: 28,
              marginLeft: 35,
              fontWeight: 'bold',
            }}>
            {productDetails.textTwo}
          </Text>
          <Text
            style={{
              marginTop: 20,
              color: 'black',
              fontSize: 16,
              marginLeft: 35,
            }}>
            price
          </Text>
          <Text
            style={{
              marginTop: 5,
              color: 'black',
              fontSize: 18,
              marginLeft: 35,
              fontWeight: 'bold',
            }}>
            {productDetails.price}
          </Text>

          <TouchableOpacity
            onPress={() => addToFav(productDetails)}
            style={{
              marginTop: 35,
              color: 'black',
              fontSize: 16,
              marginLeft: 45,
            }}>
            <AntDesign name="hearto" color={'black'} size={25} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => addToCart(productDetails)}
            style={{
              marginTop: -25,
              color: 'black',
              fontSize: 16,
              marginLeft: 90,
            }}>
            <Icon name="shopping-bag" color={'black'} size={25} />
          </TouchableOpacity>
        </ImageBackground>

        <Image
          source={productDetails.proImage}
          style={{
            width: 270,
            height: 300,
            marginTop: -300,
            marginLeft: 110,
          }}
        />
        <View style={{marginTop: 30}}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              marginLeft: 20,
              marginBottom: 5,
            }}>
            Plant Bio
          </Text>
          <Text style={{marginLeft: 20}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ea
            accusamus reprehenderit temporibus, consectetur magni laudantium
            exercitationem.{' '}
          </Text>
        </View>
        <View>
          <Image
            style={{width: 370, height: 190, marginTop: 50}}
            source={bottomimg}
          />
        </View>
      </ScrollView>
    </View>
  );
}
