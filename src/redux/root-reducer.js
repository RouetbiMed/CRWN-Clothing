import {combineReducers} from "redux";
import {persistReducer} from "redux-persist"; // redux-persist config
import storage from 'redux-persist/lib/storage'; // redux-persist config

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const persisConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}; // redux-persist config

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});  // redux-persist config

export default persistReducer(persisConfig, rootReducer); // redux-persist config