import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {CartScreen, RestaurantDetailScreen} from '../screens';
const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="restaurantDetail">
        <Stack.Screen
          name="restaurantDetail"
          component={RestaurantDetailScreen}
        />
        <Stack.Screen name="cart" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
