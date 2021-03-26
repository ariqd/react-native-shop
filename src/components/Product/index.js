import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SIZES} from '../../../constants/theme';

function truncate(str, n, useWordBoundary) {
  if (str.length <= n) {
    return str;
  }
  const subString = str.substr(0, n - 1); // the original check
  return (
    (useWordBoundary
      ? subString.substr(0, subString.lastIndexOf(' '))
      : subString) + '...'
  );
}

const Product = ({product, index}) => {
  return (
    <TouchableOpacity
      style={{
        marginTop: SIZES.base,
        width: 180,
        paddingVertical: SIZES.padding,
        marginLeft: index === 0 ? SIZES.padding * 3 : 0,
        marginRight: SIZES.padding,
      }}>
      <View>
        <Image
          source={{
            uri: product.image,
          }}
          resizeMode="cover"
          style={{
            width: '100%',
            height: 220,
          }}
        />
      </View>
      <View
        style={{
          marginTop: SIZES.base,
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}>
        <Text>{truncate(product.title, 15, true)}</Text>
        <Text style={{fontWeight: 'bold'}}>${product.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Product;

const styles = StyleSheet.create({});
