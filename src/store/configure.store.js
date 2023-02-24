import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import cartReducer from '../slices/cart.slices';
export default function configureAppStore(preloadedState) {
  const rootReducer = combineReducers({
    cart: cartReducer,
  });
  const persistConfig = {
    key: 'root',
    version: 1,
    storage: AsyncStorage,
    whitelist: ['cart'], //to persist reducer data
    blacklist: [], //to remove reducer to persist
    debug: true, //to get useful logging
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = configureStore({
    reducer: persistedReducer,
    middleware: [],
    preloadedState,
  });
  let persistor = persistStore(store);
  return {store, persistor};
}
