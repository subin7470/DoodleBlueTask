import {Icon} from '@rneui/themed';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {HitSlop} from '../config/constants';
import {resDetailStyle} from '../styles';
import {colours} from '../theme/colors';
export const FoodComponent = ({
  foodTitle,
  description,
  amount,
  onTapRemove,
  onTapAdd,
  item,
  index,
  quantity,
  fromCartScreen = false,
}) => {
  return (
    <View
      key={index}
      style={
        fromCartScreen
          ? resDetailStyle.fromCartFoodContainer
          : resDetailStyle.foodContainer
      }>
      <View style={resDetailStyle.foodNcolumn}>
        {item?.Ntype && <Text style={resDetailStyle.foodN}>N</Text>}
        {item?.Dtype && <Text style={resDetailStyle.foodN}>D</Text>}
      </View>
      <View style={{flex: 1, marginRight: 10}}>
        <Text style={resDetailStyle.foodTitle}>{foodTitle}</Text>
        <Text numberOfLines={1} style={resDetailStyle.foodDescription}>
          {description}
        </Text>
        <Text style={resDetailStyle.foodAmountText}>{`€${amount}`}</Text>
      </View>
      {quantity > 0 ? (
        <View style={{justifyContent: 'space-between'}}>
          <View style={resDetailStyle.cartButtonRow}>
            <TouchableOpacity
              hitSlop={HitSlop}
              onPress={() => onTapRemove(item, index)}>
              <Icon
                size={15}
                name="minus"
                type="feather"
                color={colours.black}
              />
            </TouchableOpacity>
            <Text style={resDetailStyle.addToCartButtonText}>{quantity}</Text>
            <TouchableOpacity
              hitSlop={HitSlop}
              onPress={() => onTapAdd(item, index)}>
              <Icon
                size={15}
                name="plus"
                type="feather"
                color={colours.black}
              />
            </TouchableOpacity>
          </View>
          {fromCartScreen && (
            <Icon
              style={resDetailStyle.commentIcon}
              size={30}
              name="comment-multiple"
              type="material-community"
              color={colours.black}
            />
          )}
        </View>
      ) : (
        <TouchableOpacity
          style={resDetailStyle.addToCartButton}
          onPress={() => onTapAdd(item, index)}>
          <Text style={resDetailStyle.addToCartButtonText}>Add To Cart</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
