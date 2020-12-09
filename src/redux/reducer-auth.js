import { headerAPI, securityAPI } from "../api/api";

const SET_AUTH_USER = 'auth/SET_AUTH_USER';
const ERROR = 'auth/ERROR';
const GET_CAPTCHA_SUCCESS = 'auth/GET_CAPTCHA_SUCCESS'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    error: null,
    captcha: null
}

const reducerAuth = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER:
            return {
                ...state,
                ...action.data,
                captcha: null,
                error: null,
            }
        case ERROR:
            return {
                ...state,
                error: action.error
            }
        case GET_CAPTCHA_SUCCESS:
            return {
                ...state,
                captcha: action.captcha
            }
        default:
            return state
    }
}

//action creators
const setAuthUser = (id, email, login, isAuth) => ({ type: SET_AUTH_USER, data: { id, email, login, isAuth } });
const hasError = (error) => ({ type: ERROR, error });
const getCaptchaSuccess = (captcha) => ({ type: GET_CAPTCHA_SUCCESS, captcha });

//thunk creators
export const getAuth = () => {
    return async (dispatch) => {
        return headerAPI.getAuth()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let data = response.data.data;
                    dispatch(setAuthUser(data.id, data.email, data.login, true))
                }
                else{
                    //error
                }
            })
    }
}

export const login = (email, password, rememberMe, captcha) => {
    return (dispatch) => {
        return headerAPI.login(email, password, rememberMe, captcha)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuth())
                }
                else {
                    if (response.data.resultCode === 10) {
                        dispatch(getCaptcha())
                    }
                    dispatch(hasError(response.data.messages[0]))
                }
            })
    }
}

export const getCaptcha = () => {
    return async (dispatch) => {
        let response = await securityAPI.getCaptchaUrl()
        dispatch(getCaptchaSuccess(response.data.url))
    }
}

export const logout = () => {
    return async (dispatch) => {
        let response = await headerAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUser(null, null, null, false))
        }
    }
}

export default reducerAuth;