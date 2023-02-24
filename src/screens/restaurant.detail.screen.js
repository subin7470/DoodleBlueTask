import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ShowAlert} from '../config/common';
import {foodItemsList} from '../config/constants';
import {RestaurantDetailContainer} from '../containers';
import {addProductToCart, decrementQuantity} from '../slices/cart.slices';
export const RestaurantDetailScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [foodList, setFoodList] = useState([]);
  useEffect(() => {
    setFoodList(foodItemsList);
  }, []);
  const onTapViewCart = () => {
    navigation.push('cart');
  };
  const cartList = useSelector(state => state.cart.itemsInCart);
  const onTapAdd = item => {
    dispatch(addProductToCart({item}));
  };
  const onTapRemove = item => {
    const findIteminCartList = cartList.find(
      cartItem => cartItem?.id === item?.id,
    );
    if (findIteminCartList.quantity === 1) {
      ShowAlert({
        description: 'Do you want to remove this item from cart?',
        successFunction: () => {
          dispatch(decrementQuantity({item}));
        },
      });
    } else {
      dispatch(decrementQuantity({item}));
    }
  };
  return (
    <RestaurantDetailContainer
      foodList={foodList}
      onTapViewCart={onTapViewCart}
      onTapAdd={onTapAdd}
      onTapRemove={onTapRemove}
      cartList={cartList}
    />
  );
};
