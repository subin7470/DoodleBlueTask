import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/themed';
import {Images} from '../config/images';
import {colours} from '../theme/colors';
import {resDetailStyle} from '../styles';
import {FoodComponent} from '../components';
export const RestaurantDetailContainer = ({
  foodList,
  onTapViewCart,
  onTapRemove,
  onTapAdd,
  cartList,
}) => {
  return (
    <SafeAreaView style={resDetailStyle.mainContainer}>
      <ImageBackground
        source={Images.restaurant}
        style={resDetailStyle.backgroundImageContainer}>
        <Icon
          size={32}
          name="arrow-back"
          type="materialicon"
          color={colours.white}
        />
        <View style={resDetailStyle.shareIconRow}>
          <Icon
            size={32}
            name="share-outline"
            type="ionicon"
            color={colours.white}
          />
          <Icon
            size={32}
            name="information-outline"
            type="material-community"
            color={colours.white}
          />
        </View>
      </ImageBackground>
      <View style={resDetailStyle.resDetailCard}>
        <Text style={resDetailStyle.cardTitle}>Inka Restaurant</Text>
        <View style={resDetailStyle.resDetailCardRow}>
          <Icon
            size={15}
            name="star-o"
            type="font-awesome"
            color={colours.dark_gray}
          />
          <Text
            style={[
              resDetailStyle.resDetailCardText,
              {marginLeft: 3},
            ]}>{`5.0(200+) | All days : 09:00 AM- 06:00 PM`}</Text>
        </View>
        <View style={resDetailStyle.resDetailCardRow}>
          <Icon
            size={20}
            name="phone-call"
            type="feather"
            color={colours.APP_THEME_COLOR}
          />
          <Text
            style={[
              resDetailStyle.resDetailCardText,
              {marginLeft: 7},
            ]}>{`Reach us at : 985456142`}</Text>
        </View>
        <TouchableOpacity style={resDetailStyle.bookButton}>
          <Text style={resDetailStyle.bookButtonText}>BOOK A TABLE</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={foodList}
        ListHeaderComponent={() => (
          <Text style={resDetailStyle.flatListHeaderTitle}>Starter</Text>
        )}
        style={resDetailStyle.flatlistStyle}
        contentContainerStyle={resDetailStyle.flatlistContainer}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({item, index}) => {
          if (cartList?.some(cartitem => cartitem.id == item.id)) {
            let cartitem = cartList?.find(cartitem => cartitem.id == item.id);
            item['quantity'] = cartitem.quantity;
          } else {
            item['quantity'] = 0;
          }
          return (
            <FoodComponent
              foodTitle={item.name}
              description={item.description}
              amount={item?.amount}
              onTapAdd={() => {
                onTapAdd(item, index);
              }}
              onTapRemove={onTapRemove}
              item={item}
              index={index}
              quantity={item?.quantity}
            />
          );
        }}
      />
      <TouchableOpacity style={resDetailStyle.menuButton}>
        <Image style={resDetailStyle.menuImage} source={Images.dinner_icon} />
        <Text style={resDetailStyle.menuButtonText}>MENU</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onTapViewCart}
        style={resDetailStyle.viewCartButton}>
        <Icon
          size={30}
          name="cart-outline"
          type="ionicon"
          color={colours.white}
        />
        <Text style={resDetailStyle.viewCartButtonText}>{`VIEW CART ${
          cartList?.length > 0 ? '(' + cartList?.length + ` ITEMS)` : ''
        }`}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
