import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  TextInput,
} from 'react-native';
import plantlogo from '../assest/plantlogo.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Back from '../assest/image19.png';
import Green from '../assest/greenrec.jpg';
import Light from '../assest/lightgrec.jpg';
import Peach from '../assest/peachrec.jpg';
import Sage from '../assest/sage.png';
import BlackPlant from '../assest/blackPlant.png';
import Center from '../assest/centerPart.jpg';
import YellowPlant from '../assest/yellowplant.png';
import kaigreen from '../assest/kaigreen.jpg';
import Mask from '../assest/mask.jpg';
import bhai from '../assest/bhai.jpg';
import Last1 from '../assest/last1rec.jpg';
import Last from '../assest/lastrec.jpg';
import Video from '../assest/video.jpg';
import styles from './styling';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Home({navigation}) {
  let product = [
    {
      id: 1,
      backImage: Green,
      proImage: BlackPlant,
      textOne: 'Air Purifer',
      textTwo: 'Peperomia',
      price: '$200',
    },
    {
      id: 2,
      backImage: Peach,
      proImage: Sage,
      textOne: 'Air Purifer',
      textTwo: 'Watermelon',
      price: '$200',
    },
  ];
  let product2 = [
    {
      id: 3,
      backImage: Light,
      proImage: YellowPlant,
      textOne: 'Air Purifer',
      textTwo: 'Croton Petra',
      price: '$200',
    },
    {
      id: 4,
      backImage: kaigreen,
      proImage: bhai,
      textOne: 'Air Purifer',
      textTwo: 'Bird Nest Fern',
      price: '$200',
    },
  ];
  let product3 = [
    {
      id: 5,
      backImage: Last1,
      proImage: Mask,
      textOne: 'Air Purifer',
      textTwo: 'Cactus',
      price: '$200',
    },
    {
      id: 6,
      backImage: Last,
      proImage: YellowPlant,
      textOne: 'Air Purifer',
      textTwo: 'Croton Petra',
      price: '$200',
    },
  ];
  return (
    <View style={{backgroundColor: 'white', width: '100%', height: '100%'}}>
      <View style={{height: 65}}>
        <Image
          source={plantlogo}
          style={{width: '44%', height: 26, marginTop: 20, marginLeft: 18}}
        />
        <TouchableOpacity
          style={{marginTop: -27, marginLeft: 260}}
          onPress={() => navigation.navigate('Order')}>
          <MaterialCommunityIcons
            name="bell-badge-outline"
            color={'black'}
            size={25}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: -29, marginLeft: 310}}
          onPress={() => navigation.navigate('Menu')}>
          <Ionicons name="menu" color={'black'} size={29} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View
          style={[
            {marginTop: 20, width: 200, height: 250, borderRadius: 50},
            styles.rounded,
          ]}>
          <ImageBackground
            source={Back}
            style={{width: 340, height: 210, marginLeft: 8}}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'serif',
                color: 'black',
                fontWeight: 'bold',
                marginTop: 40,
                marginLeft: 15,
              }}>
              There's a Plant
            </Text>
            <Text
              style={{
                fontSize: 19,
                fontFamily: 'serif',
                color: 'black',
                fontWeight: 'bold',
                marginTop: 2,
                marginLeft: 13,
              }}>
              {' '}
              for everyone
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: 'black',
                marginTop: 20,
                marginLeft: 15,
                fontWeight: 400,
              }}>
              Get your 1st point
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: 'black',
                marginTop: 3,
                marginLeft: 15,
                fontWeight: 400,
                borderBottomWidth: 2,
                width: 70,
                paddingBottom: 5,
                borderColor: '#0D986A',
              }}>
              @ 40% off
            </Text>
          </ImageBackground>
        </View>

        <View style={[styles.flexRow]}>
          <View
            style={[
              {
                borderWidth: 1,
                borderColor: 'black',
                width: 250,
                borderRadius: 15,
                marginLeft: 18,
                height: 46,
                color: 'black',
                paddingLeft: 12,
              },
              styles.flexRow,
              styles.alignItemsCenter,
            ]}>
            <Icon name="search" color={'black'} size={22} />
            <TextInput
              placeholder={' Search '}
              placeholderTextColor={'black'}
              style={{paddingLeft: 12}}
            />
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'black',
              width: 55,
              borderRadius: 15,
              marginLeft: 10,
              height: 46,
              color: 'black',
              paddingLeft: 12,
              paddingTop: 8,
              marginBottom: 30,
            }}>
            <MaterialCommunityIcons
              name="navigation-variant-outline"
              color={'black'}
              size={28}
            />
          </View>
        </View>
        <View style={{marginTop: 0}}>
          <Text
            style={{
              color: '#0D986A',
              fontWeight: 'bold',
              marginLeft: 20,
              fontSize: 15,
              borderBottomColor: '#0D986A',
              borderBottomWidth: 2,
              width: 70,
              paddingBottom: 5,
            }}>
            Top Picks
          </Text>
          <Text
            style={{
              marginLeft: 115,
              marginTop: -26,
              fontSize: 15,
              color: '#002140',
            }}>
            Indoor
          </Text>
          <Text
            style={{
              marginLeft: 185,
              marginTop: -19,
              fontSize: 15,
              color: '#002140',
            }}>
            Outdoor
          </Text>
          <Text
            style={{
              marginLeft: 265,
              marginTop: -19,
              fontSize: 15,
              color: '#002140',
            }}>
            Seeds
          </Text>
          <Text
            style={{
              marginLeft: 335,
              marginTop: -19,
              fontSize: 15,
              color: '#002140',
            }}>
            pla
          </Text>
        </View>
        <View>
          {product.map((e, i) => {
            return (
              <>
                <View key={e.id}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Product', e)}>
                    <ImageBackground
                      source={e.backImage}
                      style={{
                        width: 310,
                        height: 210,
                        marginLeft: -0,
                        marginTop: 20,
                      }}>
                      <Text
                        style={{
                          marginTop: 50,
                          color: 'black',
                          fontSize: 15,
                          marginLeft: 30,
                          fontWeight: 'bold',
                        }}>
                        {e.textOne}
                      </Text>
                      <Text
                        style={{
                          marginTop: -0,
                          color: 'black',
                          fontSize: 28,
                          marginLeft: 30,
                          fontWeight: 'bold',
                        }}>
                        {e.textTwo}
                      </Text>
                      <Text
                        style={{
                          marginTop: 40,
                          color: 'black',
                          fontSize: 18,
                          marginLeft: 30,
                          fontWeight: 'bold',
                        }}>
                        {e.price}
                      </Text>

                      <View
                        style={{
                          marginTop: -25,
                          color: 'black',
                          fontSize: 16,
                          marginLeft: 120,
                        }}>
                        <AntDesign name="hearto" color={'black'} size={25} />
                      </View>

                      <View
                        style={{
                          marginTop: -25,
                          color: 'black',
                          fontSize: 16,
                          marginLeft: 170,
                        }}>
                        <Icon name="shopping-bag" color={'black'} size={25} />
                      </View>
                    </ImageBackground>

                    <Image
                      source={e.proImage}
                      style={{
                        width: 220,
                        height: 210,
                        marginTop: -210,
                        marginLeft: 170,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </>
            );
          })}
        </View>

        <Image
          source={Center}
          style={{width: 342, height: 150, marginTop: 50, marginLeft: 8}}
        />

        <View>
          {product2.map((e, i) => {
            return (
              <>
                <View key={e.id}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Product', e)}>
                    <ImageBackground
                      source={e.backImage}
                      style={{
                        width: 310,
                        height: 210,
                        marginLeft: -0,
                        marginTop: 20,
                      }}>
                      <Text
                        style={{
                          marginTop: 50,
                          color: 'black',
                          fontSize: 15,
                          marginLeft: 30,
                          fontWeight: 'bold',
                        }}>
                        {e.textOne}
                      </Text>
                      <Text
                        style={{
                          marginTop: -0,
                          color: 'black',
                          fontSize: 28,
                          marginLeft: 30,
                          fontWeight: 'bold',
                        }}>
                        {e.textTwo}
                      </Text>
                      <Text
                        style={{
                          marginTop: 40,
                          color: 'black',
                          fontSize: 18,
                          marginLeft: 30,
                          fontWeight: 'bold',
                        }}>
                        {e.price}
                      </Text>

                      <View
                        style={{
                          marginTop: -25,
                          color: 'black',
                          fontSize: 16,
                          marginLeft: 120,
                        }}>
                        <AntDesign name="hearto" color={'black'} size={25} />
                      </View>

                      <View
                        style={{
                          marginTop: -25,
                          color: 'black',
                          fontSize: 16,
                          marginLeft: 170,
                        }}>
                        <Icon name="shopping-bag" color={'black'} size={25} />
                      </View>
                    </ImageBackground>

                    <Image
                      source={e.proImage}
                      style={{
                        width: 150,
                        height: 220,
                        marginTop: -220,
                        marginLeft: 200,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </>
            );
          })}
        </View>

        <Image
          source={Video}
          style={{
            width: 330,
            height: 280,
            marginTop: 50,
            marginLeft: 15,
            marginBottom: 40,
          }}
        />

        <View>
          {product3.map((e, i) => {
            return (
              <>
                <View key={e.id}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Product', e)}>
                    <ImageBackground
                      source={e.backImage}
                      style={{
                        width: 310,
                        height: 210,
                        marginLeft: -0,
                        marginTop: 20,
                      }}>
                      <Text
                        style={{
                          marginTop: 50,
                          color: 'black',
                          fontSize: 15,
                          marginLeft: 30,
                          fontWeight: 'bold',
                        }}>
                        {e.textOne}
                      </Text>
                      <Text
                        style={{
                          marginTop: -0,
                          color: 'black',
                          fontSize: 28,
                          marginLeft: 30,
                          fontWeight: 'bold',
                        }}>
                        {e.textTwo}
                      </Text>
                      <Text
                        style={{
                          marginTop: 40,
                          color: 'black',
                          fontSize: 18,
                          marginLeft: 30,
                          fontWeight: 'bold',
                        }}>
                        {e.price}
                      </Text>

                      <View
                        style={{
                          marginTop: -25,
                          color: 'black',
                          fontSize: 16,
                          marginLeft: 120,
                        }}>
                        <AntDesign name="hearto" color={'black'} size={25} />
                      </View>

                      <View
                        style={{
                          marginTop: -25,
                          color: 'black',
                          fontSize: 16,
                          marginLeft: 170,
                        }}>
                        <Icon name="shopping-bag" color={'black'} size={25} />
                      </View>
                    </ImageBackground>

                    <Image
                      source={e.proImage}
                      style={{
                        width: 150,
                        height: 220,
                        marginTop: -220,
                        marginLeft: 200,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
