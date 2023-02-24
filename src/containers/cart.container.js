import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {colours} from '../theme/colors';
import {Icon} from '@rneui/themed';
import {CheckBoxComponent, FoodComponent} from '../components';
import {cartStyles} from '../styles';
import {Images} from '../config/images';
import {HitSlop} from '../config/constants';
export const CartContainer = ({
  onTapBackButton,
  onTapRemove,
  onTapAdd,
  cartList,
  isDine,
  handleDeliveryOption,
  numToShow,
  handleShowMore,
}) => {
  const totalAmount = cartList.reduce((accumulator, currentItem) => {
    const itemTotal = currentItem.amount * currentItem.quantity;
    return accumulator + itemTotal;
  }, 0);
  return (
    <SafeAreaView style={cartStyles.maincontainer}>
      <View style={cartStyles.headerBackground}>
        <View style={cartStyles.headerRow}>
          <Icon
            onPress={onTapBackButton}
            size={32}
            name="arrow-back"
            type="materialicon"
            color={colours.white}
          />
          <Text style={cartStyles.headerTitle}>My Cart</Text>
        </View>
        <View style={cartStyles.totalCostContainer}>
          <Text style={cartStyles.totalCostText}>Total Cost</Text>
          <Text style={cartStyles.totalAmountText}>
            {'€' + totalAmount.toFixed(2)}
          </Text>
        </View>
      </View>
      <FlatList
        ListHeaderComponent={() => {
          if (cartList?.length > 0) {
            return (
              <View style={cartStyles.flatlistHeaderContainer}>
                <Text style={cartStyles.reviewOrderText}>Review Orders</Text>
              </View>
            );
          }
        }}
        data={cartList.slice(0, numToShow)}
        style={{}}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={cartStyles.emptyComponent}>
            <Text style={cartStyles.emptyComponentText}>
              Please add food to your cart
            </Text>
          </View>
        )}
        contentContainerStyle={{paddingBottom: 70}}
        keyExtractor={item => item.id.toString()}
        renderItem={({item, index}) => {
          return (
            <FoodComponent
              foodTitle={item.name}
              description={item.description}
              amount={item?.amount}
              item={item}
              index={index}
              quantity={item?.quantity}
              onTapAdd={() => {
                onTapAdd(item, index);
              }}
              onTapRemove={onTapRemove}
              fromCartScreen={true}
            />
          );
        }}
        ListFooterComponent={() => {
          if (cartList?.length > 0) {
            return (
              <View style={cartStyles.FlatlistFooterContainer}>
                {cartList?.length > 2 && (
                  <TouchableOpacity
                    hitSlop={HitSlop}
                    onPress={handleShowMore}
                    style={cartStyles.footerButton}>
                    <Text style={cartStyles.footerButtonText}>
                      {numToShow < cartList.length ? 'Show more' : 'Show less'}
                    </Text>
                  </TouchableOpacity>
                )}
                <Text style={cartStyles.deliveryOptionText}>
                  Delivery Options
                </Text>
                <View style={cartStyles.checkBoxRow}>
                  <TouchableOpacity
                    onPress={() => {
                      handleDeliveryOption(true);
                    }}
                    style={cartStyles.checkBoxButtonRow}>
                    <Image
                      style={cartStyles.checkBoxDineImage}
                      source={Images.restaurant_icon}
                    />
                    <CheckBoxComponent
                      onChangeValue={() => {
                        handleDeliveryOption(true);
                      }}
                      title={'Dine-In'}
                      value={isDine}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      handleDeliveryOption(false);
                    }}
                    style={cartStyles.checkBoxButtonRow}>
                    <Icon
                      name="shipping-fast"
                      type="font-awesome-5"
                      color={colours.APP_THEME_COLOR}
                      size={20}
                    />
                    <CheckBoxComponent
                      onChangeValue={() => {
                        handleDeliveryOption(false);
                      }}
                      title={'Take way'}
                      value={!isDine}
                    />
                  </TouchableOpacity>
                </View>
                <Text style={cartStyles.manageCardsText}>Manage Cards</Text>
              </View>
            );
          }
        }}
      />
      {cartList.length > 0 && (
        <TouchableOpacity style={cartStyles.orderButton}>
          <Text style={cartStyles.orderbuttonText}>PLACE ORDER</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};
