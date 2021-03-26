import React, {useState} from 'react';
import {ScrollView} from 'react-native';
// Styles
// Components
import Header from '../components/Header';
import Categories from '../components/Categories';
import Recommended from '../components/Recommended';
import TopCollection from '../components/TopCollection';
import CategoryFiltered from '../components/CategoryFiltered';

const Home = () => {
  const [active, setActive] = useState('All');

  return (
    <ScrollView>
      <Header />
      <Categories active={active} setActive={setActive} />
      {active === 'All' ? (
        <>
          <Recommended />
          <TopCollection />
        </>
      ) : (
        <CategoryFiltered active={active} />
      )}
    </ScrollView>
  );
};

export default Home;
