import {LOGIN, LOGIN_FAIL, LOGIN_OK} from '../actions/login'

const initialState = {
    lastAction: '',
}

const login =(state= initialState, action) => {
    switch(action.tpye){
        case LOGIN:
            return {
                ...state,
                lastAction: action.tpye,
            }
        default:
            return state   
    }
}

export default login