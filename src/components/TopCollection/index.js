import React from 'react';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useQuery} from 'react-query';
import {COLORS, SIZES} from '../../../constants/theme';
import Product from '../Product';

const getProducts = async () =>
  await (
    await fetch('https://fakestoreapi.com/products?limit=5&sort=desc')
  ).json();

const TopCollection = () => {
  const {data, isLoading, error} = useQuery('products', getProducts);

  function renderProducts() {
    if (isLoading) return <ActivityIndicator />;

    if (error)
      return (
        <View>
          <Text>Something went wrong</Text>
        </View>
      );

    return data?.map((product, index) => (
      <Product key={product.id} product={product} index={index} />
    ));
  }

  return (
    <View
      style={{
        marginVertical: SIZES.padding * 2,
      }}>
      <View
        style={{
          marginHorizontal: SIZES.padding * 3,
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          Top Collection
        </Text>
        <TouchableOpacity>
          <Text style={{color: COLORS.darkgray}}>See All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {renderProducts()}
      </ScrollView>
    </View>
  );
};

export default TopCollection;
