import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {COLORS} from '../../constants/theme';
import Header from '../components/Header';

const Home = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <Header />
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default Home;
