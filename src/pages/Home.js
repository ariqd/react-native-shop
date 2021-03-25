import React from 'react';
import {ScrollView, Text} from 'react-native';
// Styles
import {COLORS} from '../../constants/theme';
// Components
import Header from '../components/Header';
import Categories from '../components/Categories';

const Home = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <Header />
      <Categories />
      <Text>Home</Text>
    </ScrollView>
  );
};

export default Home;
