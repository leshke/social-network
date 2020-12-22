import { profileAPI } from "../api/api";

const ADD_POST = 'profile/ADD_POST';
const SET_PROFILE = 'profile/SET_USER_PROFILE';
const SET_PROFILE_STATUS = 'profile/SET_USER_PROFILE_STATUS';
const SAVE_PROFILE_PHOTO_SUCCESS = 'profile/SAVE_PROFILE_PHOTO_SUCCESS';
const ERROR = 'profile/ERROR';
const AVATAR = 'profile/AVATAR';
const TOGGLE_LIKE = 'profile/TOGGLE_LIKE'

let initialState = {
    posts: [
        {
            name: "WOOOOOW",
            id: 1,
            liked: false,
            likes: 19,
            imageLink: "https://sun9-8.userapi.com/c851436/v851436928/21ab0/5HPqwAwypZA.jpg"
        },
        {
            name: "Put like if you know React and Redux",
            id: 2,
            liked: true,
            likes: 11,
            imageLink: "https://www.thinktanker.io/wp-content/uploads/2020/09/redux.jpeg"
        },
        {
            name: "This is my first post",
            id: 3,
            liked: false,
            likes: 14,
            imageLink: "https://miro.medium.com/max/4100/1*mf6hodU_tDPNYWSvVueVCw.jpeg"
        },
    ],
    userProfile: null,
    status: '',
    error: [],
    avatar: null
}

const reducerProfile = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let post = {
                name: action.post,
                likes: 0,
                imageLink: action.image,
                id: state.posts.length + 1
            }
            return {
                ...state,
                posts: [post, ...state.posts]
            }
        case SET_PROFILE:
            return {
                ...state,
                userProfile: action.userProfile
            }
        case SET_PROFILE_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SAVE_PROFILE_PHOTO_SUCCESS:
            return {
                ...state,
                userProfile: { ...state.userProfile, photos: action.photos }
            }
        case ERROR:
            return {
                ...state,
                error: action.error
            }
        case AVATAR:
            return {
                ...state,
                avatar: action.avatar
            }
        case TOGGLE_LIKE:
            return {
                ...state,
                posts: state.posts.map((post) => {
                    if (post.id === action.id && !post.liked) {
                        return { ...post, liked: true, likes: post.likes + 1 }
                    }
                    else if (post.id === action.id && post.liked) {
                        return { ...post, liked: false, likes: post.likes - 1 }
                    }
                    else {
                        return { ...post, likes: post.likes }
                    }
                })
            }
        default:
            return state
    }
}

//action creators
export const addPost = (post, image) => ({ type: ADD_POST, post, image });
export const toggleLike = (id) => ({ type: TOGGLE_LIKE, id });

const setProfile = (userProfile) => ({ type: SET_PROFILE, userProfile });
const setProfileStatus = (status) => ({ type: SET_PROFILE_STATUS, status });
const saveProfilePhotoSuccess = (photos) => ({ type: SAVE_PROFILE_PHOTO_SUCCESS, photos });
const hasError = (error) => ({ type: ERROR, error });
const setAvatar = (avatar) => ({ type: AVATAR, avatar })

//thunk creators
export const getProfile = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getProfile(userId)
        dispatch(setProfile(response.data))
    }
}

export const getProfileAvatar = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getProfile(userId)
        dispatch(setAvatar(response.data.photos.small))
    }
}

export const getStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getProfileStatus(userId)
        dispatch(setProfileStatus(response.data))
    }
}

export const updateStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateProfileStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setProfileStatus(status))
        }
    }
}

export const saveProfilePhoto = (file) => {
    return async (dispatch, getState) => {
        let response = await profileAPI.sendProfilePhoto(file)
        let userId = getState().auth.id
        if (response.data.resultCode === 0) {
            dispatch(saveProfilePhotoSuccess(response.data.data.photos))
            dispatch(getProfileAvatar(userId))
        }
    }
}

export const saveProfileInfo = (profile) => {
    return async (dispatch, getState) => {
        let userId = getState().auth.id
        let response = await profileAPI.sendProfileInfo(profile)

        if (response.data.resultCode === 0) {
            dispatch(getProfile(userId))
        }
        else {
            const error = response.data.messages
            dispatch(hasError(error))
            return Promise.reject(error)
        }
    }
}

export default reducerProfile;