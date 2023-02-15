import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cart from '../screens/cart';
import GetStart from '../screens/getStarted';
import Home from '../screens/home';
import Signup from '../screens/signup';
import Login from '../screens/login';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Account from '../screens/account';
import Favourite from '../screens/favourite';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../screens/styling';
import Order from '../screens/orderRecieved';
import Product from '../screens/product';
import Menu from '../screens/menu';
import AxiosMethod from './axiosmethod';
function Bottom() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerStyle: {
            backgroundColor: styles._warning,
          },
          headerShown: false,
          headerTintColor: '#fff',
          tabBarActiveTintColor: '#0D986A',
          tabBarShowLabel: false,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          headerStyle: {
            backgroundColor: styles._warning,
          },
          headerShown: false,
          tabBarShowLabel: false,
          headerTintColor: '#fff',
          tabBarActiveTintColor: '#0D986A',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({color, size}) => (
            <AntDesign name="hearto" color={color} size={size} />
          ),
        }}
        name="Favourite"
        component={Favourite}
      />
      <Tab.Screen
        options={{
          headerStyle: {
            backgroundColor: styles._warning,
          },
          headerShown: false,
          headerTintColor: '#fff',
          tabBarActiveTintColor: '#0D986A',
          tabBarShowLabel: false,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({color, size}) => (
            <Icon name="shopping-bag" color={color} size={size} />
          ),
        }}
        name="Cart"
        component={Cart}
      />
      <Tab.Screen
        options={{
          headerStyle: {
            backgroundColor: styles._warning,
          },
          headerShown: false,
          headerTintColor: '#fff',
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#0D986A',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
        name="Account"
        component={Account}
      />
    </Tab.Navigator>
  );
}

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="GetStart"
          component={GetStart}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Bottom"
          component={Bottom}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Order"
          component={Order}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Product"
          component={Product}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="Axios"
          component={AxiosMethod}
          options={{headerShown: false}}
        />  */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigation;
