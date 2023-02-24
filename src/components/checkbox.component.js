import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colours} from '../theme/colors';
import {Icon, CheckBox} from '@rneui/themed';
import {commonStyles} from '../styles';

export const CheckBoxComponent = ({title, value, onChangeValue}) => {
  return (
    <View style={commonStyles.checkBoxContainer}>
      <Text style={commonStyles.checkBoxTitle}>{title}</Text>
      <CheckBox
        checked={value}
        onPress={() => {
          onChangeValue();
        }}
        containerStyle={commonStyles.checkIconContainer}
        checkedIcon={
          <Icon
            name="radio-button-checked"
            type="material"
            color={colours.APP_PINK}
            size={30}
          />
        }
        uncheckedIcon={
          <Icon
            name="radio-button-unchecked"
            type="material"
            color={colours.dark_gray}
            size={30}
          />
        }
      />
    </View>
  );
};
