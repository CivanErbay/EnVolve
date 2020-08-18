import {LOGIN, LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT} from "../actions";

const initialState = {
    authStatus: 'PENDING',
};

export default function UserReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {...state, authStatus: 'PENDING'};
        case LOGIN_SUCCESS:
            return {
                ...state,
                authStatus: 'SUCCESS',
                userData: action.payload,
            };
        case LOGIN_FAILED:
            return {...state, authStatus: 'FAILED'};
        case LOGOUT:
            return {};
        default:
            return state;
    }
}
