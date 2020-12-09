import { getAuth } from "./reducer-auth";

const INITIALIZE_SUCCESS = 'INITIALIZE_SUCCESS';

let initialState = {
    initialized: false
}

const reducerApp = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state
    }
}

//action creators
const initializeSuccess = () => ({ type: INITIALIZE_SUCCESS });

//thunk creators
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuth())
    promise.then(() => {
        dispatch(initializeSuccess())
    })
}

export default reducerApp;