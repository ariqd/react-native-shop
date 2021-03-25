import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="home"
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: '#0B1423',
          height: 70,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size, focused}) => (
            <MaterialCommunityIcons
              name={!focused ? 'home-outline' : 'home'}
              color="#ffffff"
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Home}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({color, size, focused}) => (
            <MaterialCommunityIcons
              name={!focused ? 'cart-outline' : 'cart'}
              color="#ffffff"
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={Home}
        options={{
          tabBarLabel: 'Wishlist',
          tabBarIcon: ({color, size, focused}) => (
            <MaterialCommunityIcons
              name={!focused ? 'heart-outline' : 'heart'}
              color="#ffffff"
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Home}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({color, size, focused}) => (
            <MaterialCommunityIcons
              name={!focused ? 'account-outline' : 'account'}
              color="#ffffff"
              size={25}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
