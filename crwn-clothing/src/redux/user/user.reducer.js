import ACTION_CONSTANTS from '../action-constants'; 

const INITIAL_STATE = {
    currentUser:null
}

const userReducer = (state = INITIAL_STATE,action) =>{
    switch (action.type) {
        case ACTION_CONSTANTS.USER.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            };
    
        default:
            return state;
    }
}

export default userReducer;