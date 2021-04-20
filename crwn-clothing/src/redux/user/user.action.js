import ACTION_CONSTANTS from '../action-constants'; 

export const setCurrentUser = user =>({
    type: ACTION_CONSTANTS.USER.SET_CURRENT_USER,
    payload: user 
})