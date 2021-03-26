import React, {useEffect} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {useQuery} from 'react-query';
import {SIZES} from '../../../constants/theme';

const getProducts = async activeCategory =>
  await (
    await fetch(`https://fakestoreapi.com/products/category/${activeCategory}`)
  ).json();

const CategoryFiltered = ({active}) => {
  const {data, isLoading, error} = useQuery(['products', active], () =>
    getProducts(active),
  );

  if (isLoading) return <ActivityIndicator />;

  if (error)
    return (
      <View>
        <Text>Something went wrong</Text>
      </View>
    );

  return (
    <View
      style={{
        marginVertical: SIZES.padding * 2,
      }}>
      <View
        style={{
          marginHorizontal: SIZES.padding * 3,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            textTransform: 'capitalize',
          }}>
          {active}
        </Text>
      </View>
      {data?.map(item => (
        <Text key={item.id}>{item.title}</Text>
      ))}
    </View>
  );
};

export default CategoryFiltered;
