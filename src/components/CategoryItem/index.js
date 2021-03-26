import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {COLORS, SIZES} from '../../../constants/theme';

const CategoryItem = ({item, active, setActive, customStyles}) => (
  <TouchableOpacity
    style={{
      padding: SIZES.padding,
      marginRight: SIZES.padding,
      borderRadius: 10,
      backgroundColor: active === item ? COLORS.lightyellow : COLORS.lightGray,
      minWidth: 50,
      ...customStyles,
    }}
    onPress={() => setActive(item)}>
    <Text
      style={{
        color: active === item ? COLORS.secondary : COLORS.darkgray,
        textAlign: 'center',
        textTransform: 'capitalize',
      }}>
      {item}
    </Text>
  </TouchableOpacity>
);

export default CategoryItem;
