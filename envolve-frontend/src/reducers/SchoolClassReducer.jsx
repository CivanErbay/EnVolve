import {FETCH_CLASSES_FAILURE, FETCH_CLASSES_REQUEST, FETCH_CLASSES_SUCCESS} from "../actions";


const initialState = {
    fetchStatus: 'PENDING',
};

export default function SchoolClassReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_CLASSES_REQUEST:
            return {...state, fetchStatus: 'PENDING'};
        case FETCH_CLASSES_SUCCESS:
            return {...state,
                fetchStatus: 'SUCCESS',
                responseData: action.payload
            }
        case FETCH_CLASSES_FAILURE:
            return {...state,
            fetchStatus: 'FAILED'};
        default: return initialState;
    }
}