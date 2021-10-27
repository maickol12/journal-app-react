import { googleAuthProvider,app  } from '../firebase/firebaseConfig';
import { getAuth, signInWithPopup,createUserWithEmailAndPassword } from 'firebase/auth';
import { types } from './../types/types';


export const loginEmailPassword =  payload => async(dispatch) => {
    dispatch(
        login(payload)
    );
}


export const startRegisterWithEmailAndPassword = (email,password)  => async(dispatch) => {
    const auth = getAuth();
    
    createUserWithEmailAndPassword(auth,email,password)
    .then( async({ user }) =>{
        console.log(user);
    })
    .catch( e => {
        console.log(e);
    })
}

export const googleLogin = () => async(dispatch) => {
    const auth = getAuth(app);
    signInWithPopup(auth, googleAuthProvider)
    .then(({ user }) =>{
        dispatch(login(user))
    });
}

export const login = (payload) => ({
    type: types.login,
    payload:payload
});