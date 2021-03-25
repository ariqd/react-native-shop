import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {COLORS, SIZES} from '../../../constants/theme';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: SIZES.padding * 4,
        marginHorizontal: SIZES.padding * 2,
      }}>
      <View>
        <TouchableOpacity
          style={{
            width: 60,
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 50,
              width: 50,
              borderRadius: 50,
              backgroundColor: COLORS.primary,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <FontAwesome5 name="th-large" color={COLORS.white} size={20} />
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        <TouchableOpacity
          style={{
            width: 60,
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 50,
              width: 50,
              borderRadius: 50,
              backgroundColor: COLORS.white,
              borderWidth: 1,
              borderColor: COLORS.gray,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <FontAwesome5 name="search" color={COLORS.primary} size={20} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 60,
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 50,
              width: 50,
              borderRadius: 50,
              backgroundColor: COLORS.white,
              borderWidth: 1,
              borderColor: COLORS.gray,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <FontAwesome5 name="sliders-h" color={COLORS.primary} size={20} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
