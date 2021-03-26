import React, {useState} from 'react';
import {ActivityIndicator, ScrollView, Text, View} from 'react-native';
import {useQuery} from 'react-query';
import {SIZES} from '../../../constants/theme';
import CategoryItem from '../CategoryItem';

const getCategories = async () =>
  await (await fetch('https://fakestoreapi.com/products/categories')).json();

const Categories = () => {
  const {data, isLoading, error} = useQuery('categories', getCategories);
  const [active, setActive] = useState('All');

  if (isLoading) return <ActivityIndicator />;

  if (error)
    return (
      <View>
        <Text>Something went wrong...</Text>
      </View>
    );

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <CategoryItem
        key="All"
        item="All"
        index="All"
        active={active}
        setActive={setActive}
        customStyles={{
          marginLeft: SIZES.padding * 3,
        }}
      />
      {data?.map((item, index) => (
        <CategoryItem
          key={index}
          item={item}
          index={index}
          active={active}
          setActive={setActive}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
