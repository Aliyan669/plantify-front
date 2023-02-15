import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  TouchableOpacity,
  View,
  Image,
  Text,
  TextInput,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import plantlogo from '../assest/plantlogo.png';
import {global} from './globalcss';
import axios from 'axios';
import {BASE_URL} from '../config';
import {useEffect, useState} from 'react';
export default function Signup({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [loader, setLoader] = useState(false);
  console.log(BASE_URL);
  const Logn = () => {
    console.log('Click');
    setLoader(true);
    const objToSend = {
      email: email,
      password: password,
    };
    axios
      .post(`${BASE_URL}login`, objToSend)
      .then(res => {
        console.log(res, 'response');
        setLoader(false);
        if (res.data.status) {
          // True Condition //
          setRefresh(!refresh);
          console.log(true);
          setLoader(false);
          navigation.navigate('Bottom');
        } else {
          // false Condition //
          console.log(false);
          setLoader(false);
          ToastAndroid.show(res.data.message, ToastAndroid.LONG);
          // console.log(res.data.message);
        }
      })
      .catch(error => {
        console.log(error, 'error');
        setLoader(false);
      });
  };
  return (
    <>
      <View style={{backgroundColor: 'white', width: '100%', height: '100%'}}>
        <View style={{marginTop: 10, marginLeft: 2}}>
          <TouchableOpacity onPress={() => navigation.navigate('GetStart')}>
            <Ionicons name="chevron-back-sharp" color={'black'} size={42} />
          </TouchableOpacity>
        </View>
        <View>
          <Image
            source={plantlogo}
            style={{width: '50%', height: 30, marginTop: 20, marginLeft: 18}}
          />
        </View>
        <Text
          style={{
            color: '#0D986A',
            fontSize: 38,
            marginTop: 20,
            marginLeft: 18,
            fontWeight: 'bold',
          }}>
          Login
        </Text>
        <Text
          style={{color: '#0D986A', marginTop: 10, marginLeft: 18, width: 320}}>
          Lorem ipsum, dolor sit amet consectetur and adipisicing elit. Sint vel
          .
        </Text>
        <View style={{marginTop: 50}}>
          <Text
            style={{
              color: 'lightgrey',
              fontSize: 15,
              marginLeft: 18,
              marginBottom: 6,
            }}>
            Username/Email
          </Text>
          <TextInput
            onChangeText={e => setEmail(e)}
            style={{
              backgroundColor: '#F5F5F5',
              borderWidth: 1,
              borderColor: 'lightgrey',
              width: 330,
              borderRadius: 5,
              marginLeft: 15,
              height: 43,
              color: 'black',
              paddingLeft: 10,
            }}
            placeholder={' Email '}
            placeholderTextColor={'grey'}
          />
        </View>

        <View style={{marginTop: 30}}>
          <Text
            style={{
              color: 'lightgrey',
              fontSize: 15,
              marginLeft: 18,
              marginBottom: 6,
            }}>
            Password
          </Text>
          <TextInput
            onChangeText={e => setPassword(e)}
            style={{
              backgroundColor: '#F5F5F5',
              borderWidth: 1,
              borderColor: 'lightgrey',
              width: 330,
              borderRadius: 5,
              marginLeft: 15,
              height: 43,
              color: 'black',
              paddingLeft: 10,
            }}
            placeholder={'Password'}
            placeholderTextColor={'grey'}
            secureTextEntry={true}
          />
        </View>
        <Text
          style={{
            color: '#0D986A',
            textDecorationLine: 'underline',
            marginTop: 15,
            marginLeft: 230,
          }}>
          Forget Password
        </Text>
        <TouchableOpacity
          onPress={Logn}
          style={{
            backgroundColor: '#0D986A',
            width: 320,
            height: 42,
            marginLeft: 20,
            marginTop: 30,
            borderRadius: 20,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              textAlign: 'center',
              marginTop: 8,
            }}>
            {loader ? <ActivityIndicator color="white" size={24} /> : 'Login'}
          </Text>
        </TouchableOpacity>

        <View style={{alignItems: 'center', marginTop: 140}}>
          <Text style={{color: 'grey', marginBottom: 10}}>
            Don't have an account ?{' '}
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text
                style={{
                  color: '#0D986A',
                  fontWeight: 'bold',
                  marginBottom: -3,
                }}>
                Sign up here
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </>
  );
}
