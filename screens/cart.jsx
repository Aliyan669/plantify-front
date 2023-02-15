import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import plantlogo from '../assest/plantlogo.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import {BASE_URL} from '../config';
import {useEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styling';

export default function Cart({navigation}) {
  const [productArray, setProductArray] = useState([]);
  const [data, setData] = useState(0);
  const [refresh, setRefresh] = useState(false);
  let [productDetails, setProductDetails] = useState({});
  console.log(productDetails);

  const deleteProduct = id => {
    console.log(id, 'id');

    axios
      .delete(`${BASE_URL}cartproduct/${id}`)
      .then(res => {
        if (res.data.status) {
          // true condition //
          console.log(res.data, 'true');
          ToastAndroid.show(res.data.message, ToastAndroid.SHORT);
          setRefresh(!refresh);
        } else {
          // false condition //
          // console.log(res.data.message);
          console.log(res.data, 'false');
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(() => {
    axios
      .get(`${BASE_URL}cartproduct`)
      .then(response => {
        console.log(response.data, 'responsedata');
        let data = response.data.data;
        // setProductArray([...new Set(data.map(item => item.id))])
        setProductArray(data);
      })
      .catch(err => {
        console.log(err, 'error');
      });
  }, [refresh]);

  return (
    <View style={{backgroundColor: 'white', width: '100%', height: '100%'}}>
      <View style={{height: 65}}>
        <Image
          source={plantlogo}
          style={{width: '44%', height: 26, marginTop: 20, marginLeft: 18}}
        />
        <View style={{marginTop: -27, marginLeft: 260}}>
          <Icon name="search" color={'black'} size={22} />
        </View>
        <TouchableOpacity
          style={{marginTop: -27, marginLeft: 310}}
          onPress={() => navigation.navigate('Menu')}>
          <Ionicons name="menu" color={'black'} size={29} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View>
          <Text
            style={{
              fontSize: 32,
              fontWeight: 'bold',
              color: '#0D986A',
              marginTop: 30,
              marginLeft: 25,
            }}>
            Your Bag
          </Text>
        </View>

        <View style={{marginTop: 30, marginBottom: 30}}>
          {productArray.map((e, i) => {
            return (
              <>
                <View
                  style={[
                    {
                      width: 330,
                      height: 150,
                      marginLeft: 15,
                      borderRadius: 20,
                      marginTop: 10,
                      marginBottom: 5,
                      borderWidth: 1,
                      borderColor: 'lightgrey',
                    },
                  ]}>
                  <Image
                    source={e.proImage}
                    style={{
                      width: 90,
                      height: 125,
                      marginTop: 10,
                      marginLeft: 0,
                    }}
                  />
                  <Text
                    style={{
                      marginTop: -115,
                      color: 'black',
                      fontSize: 24,
                      marginLeft: 120,
                      fontWeight: 'bold',
                    }}>
                    {e.textTwo}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      color: 'black',
                      fontSize: 15,
                      marginLeft: 120,
                      fontWeight: 'bold',
                    }}>
                    {e.price}
                  </Text>

                  <View style={{marginLeft: 115, marginTop: 20}}>
                    <TouchableOpacity onPress={() => setData(data - 1)}>
                      <AntDesign name="minus" color={'black'} size={22} />
                    </TouchableOpacity>
                  </View>

                  <Text
                    style={{
                      marginLeft: 155,
                      marginTop: -25,
                      fontSize: 18,
                      color: 'black',
                    }}>
                    {data}
                  </Text>

                  <View style={{marginLeft: 185, marginTop: -22}}>
                    <TouchableOpacity onPress={() => setData(data + 1)}>
                      <AntDesign name="plus" color={'black'} size={22} />
                    </TouchableOpacity>
                  </View>

                  <View style={{marginLeft: 245, marginTop: -25}}>
                    <TouchableOpacity onPress={() => deleteProduct(e._id)}>
                      <AntDesign name="delete" color={'black'} size={25} />
                    </TouchableOpacity>
                  </View>
                  <View style={{marginLeft: 290, marginTop: -24}}>
                    <MaterialCommunityIcons
                      name="content-save-check-outline"
                      color={'black'}
                      size={26}
                    />
                  </View>
                </View>
              </>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
