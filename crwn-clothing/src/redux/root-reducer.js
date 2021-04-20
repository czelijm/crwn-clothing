import { combineReduers } from 'redux';

import userReducer from './user/user.reducer';

export default combineReduers({
    user:userReducer
});