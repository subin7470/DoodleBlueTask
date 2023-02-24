import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ShowAlert} from '../config/common';
import {CartContainer} from '../containers';
import {addProductToCart, decrementQuantity} from '../slices/cart.slices';
export const CartScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const cartList = useSelector(state => state.cart.itemsInCart);
  const [isDine, setDine] = useState(true);
  const [numToShow, setNumToShow] = useState(2);
  const handleDeliveryOption = fromDine => {
    if (fromDine) {
      setDine(true);
    } else {
      setDine(false);
    }
  };
  const onTapBackButton = () => {
    navigation.pop();
  };
  const onTapAdd = (item, index) => {
    dispatch(addProductToCart({item}));
  };
  const onTapRemove = (item, index) => {
    const findIteminCartList = cartList.find(
      cartItem => cartItem?.id == item?.id,
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
  const handleShowMore = () => {
    if (numToShow == 2) {
      setNumToShow(cartList.length);
    } else if (numToShow > 2) {
      setNumToShow(2);
    }
  };
  return (
    <CartContainer
      onTapBackButton={onTapBackButton}
      onTapAdd={onTapAdd}
      onTapRemove={onTapRemove}
      cartList={cartList}
      isDine={isDine}
      handleDeliveryOption={handleDeliveryOption}
      numToShow={numToShow}
      handleShowMore={handleShowMore}
    />
  );
};
