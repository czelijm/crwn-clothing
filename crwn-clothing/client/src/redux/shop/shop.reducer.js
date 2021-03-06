// import SHOP_DATA from './shop.data';
import ShopActionTypes from './shop.types'
// import {updateCollections} from './shop.actions';

const INITIAL_STATE = {
    collection: null,
    isFetching: false,
    errorMessage: undefined
}

const shopReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type) {
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching:true
            }

        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching:false,
                collection:action.payload
            }
        case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching:false,
                errorMessage: action.payload 
            }
  
        default:
           return state;
    }
}

export default shopReducer;