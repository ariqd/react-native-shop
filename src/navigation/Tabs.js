import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../constants/theme';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="home"
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: COLORS.primary,
          height: 70,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name={!focused ? 'home-outline' : 'home'}
              color={COLORS.white}
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
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name={!focused ? 'cart-outline' : 'cart'}
              color={COLORS.white}
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
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name={!focused ? 'heart-outline' : 'heart'}
              color={COLORS.white}
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
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name={!focused ? 'account-outline' : 'account'}
              color={COLORS.white}
              size={25}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
