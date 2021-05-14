import UserActionTypes from './user.types'; 


export const googleSignInStart = () =>({
    type: UserActionTypes.GOOGLE_SIGN_IN_START,
})

export const emailSignInStart = emailAndPassword =>({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload:emailAndPassword
})

export const signInSuccess = user =>({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user 
})

export const signInFailure = error =>({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error
})

export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION
})

export const singOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START
})

export const singOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS
})

export const singOutFailure = (error) => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload:error
})

export const singUpStart = (emailAndPassword) => ({
    type: UserActionTypes.SIGN_UP_START,
    payload:emailAndPassword
})

export const singUpSuccess = ({user,additionalData}) => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: {user,additionalData}
})

export const singUpFailure = (error) => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload:error
})

// export const setCurrentUser = user =>({
//     type: UserActionTypes.SET_CURRENT_USER,
//     payload: user 
// })

// export const emailSignInSuccess = user =>({
//     type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
//     payload: user 
// })

// export const emailSignInFailure = error =>({
//     type: UserActionTypes.EMAIL_SIGN_IN_FAILURE,
//     payload: error
// })
