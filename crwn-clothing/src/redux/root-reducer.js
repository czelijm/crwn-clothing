import { combineReducers } from 'redux';
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage' //localStorage, way to tell that to persist to use localStorage

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

//redux-persist json configuration
const persistConfig = {
    key:'root', //in what point in reducer we want to start storing 
    storage,
    whitelist: ['cart'] //names of reducers we want to store
} 

const rootReducer = combineReducers({
    user:userReducer,
    cart:cartReducer,
    directory:directoryReducer,
    shop:shopReducer
})

// const persistor = persistReducer(rootReducer)


export default persistReducer(persistConfig,rootReducer)