import React from 'react';
import {ScrollView, Text} from 'react-native';
// Styles
import {COLORS} from '../../constants/theme';
// Components
import Header from '../components/Header';
import Categories from '../components/Categories';
import Recommended from '../components/Recommended';
import TopCollection from '../components/TopCollection';

const Home = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <Header />
      <Categories />
      <Recommended />
      <TopCollection />
    </ScrollView>
  );
};

export default Home;
