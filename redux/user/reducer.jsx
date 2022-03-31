import * as actionTypes from "./types"

const INITIAL_STATE = {
    users: [],
    errorMessage: null,
    isProcessing: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.GET_USERS:

            return {
                 ...state,
                users: action.data,
                isProcessing: false,
             };

        case actionTypes.GET_USERS_ERROR:
            console.log(action)
            return {
                ...state,
                errorMessage: action.data,
                isProcessing: false,
            };
        case actionTypes.CLEAR_ERROR:
            console.log(action)
            return {
                ...state,
                errorMessage: null,
            };
        
        case actionTypes.IS_PROCESSING:
            console.log(action)
            return {
                ...state,
                isProcessing: true,
            };
         default:
            return state;
    }
};

export default userReducer;
