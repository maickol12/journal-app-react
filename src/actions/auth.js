import { googleAuthProvider  } from '../firebase/firebaseConfig';
import { getAuth, signInWithPopup } from 'firebase/auth';
import { types } from './../types/types';


export const loginEmailPassword =  payload => async(dispatch) => {
    dispatch(
        login(payload)
    );
}

export const googleLogin = () => async(dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, googleAuthProvider)
    .then(({ user }) =>{
        dispatch(login(user))
    });
}

export const login = (payload) => ({
    type: types.login,
    payload:payload
});