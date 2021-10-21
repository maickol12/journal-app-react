import { types } from "../types/types"


const initialState = {
    user:{
        uuid: '1234'
    }
}

export const authReducer = (state = initialState,action) => {
    switch(action.type){
        case types.login:
            return {
                ...initialState,
                user:action.payload
            }

        case types.logut:
            return {

            }
        default:
            return state;
    }
}