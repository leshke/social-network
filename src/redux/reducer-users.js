import { userAPI } from "../api/api";

const SET_USERS = 'users/SET_USERS';
const SET_TOTAL_USERS = 'users/SET_TOTAL_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const TOGGLE_PRELOADER = 'users/TOGGLE_PRELOADER';
const FOLLOW_USER = 'users/FOLLOW_USER';
const UNFOLLOW_USER = 'users/UNFOLLOW_USER';
const TOGGLE_PROGRESS_FOLLOWING = 'users/TOGGLE_PROGRESS_FOLLOWING';

let initialState = {
    users: [],
    pageSize: 12,
    currentPage: 1,
    totalUsers: null,
    isFetching: false,
    followingProgress: [],
}

//reducer
const reducerUsers = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user
                })
            }
        case UNFOLLOW_USER:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return user
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_TOTAL_USERS:
            return {
                ...state,
                totalUsers: action.totalUsers
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case TOGGLE_PRELOADER:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_PROGRESS_FOLLOWING:
            return {
                ...state,
                followingProgress: action.isFetching
                    ? [...state.followingProgress, action.userId]
                    : state.followingProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

//action creators
const setUsers = (users) => ({ type: SET_USERS, users });
const setTotalUsers = (totalUsers) => ({ type: SET_TOTAL_USERS, totalUsers });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const togglePreloader = (isFetching) => ({ type: TOGGLE_PRELOADER, isFetching });
const followUser = (userId) => ({ type: FOLLOW_USER, userId });
const unfollowUser = (userId) => ({ type: UNFOLLOW_USER, userId });
const toggleProgressFollowing = (isFetching, userId) => ({ type: TOGGLE_PROGRESS_FOLLOWING, isFetching, userId });

//thunk creators
export const getUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(togglePreloader(true))
    let response = await userAPI.getUsersFromServer(currentPage, pageSize)
    dispatch(togglePreloader(false))
    dispatch(setTotalUsers(response.data.totalCount));
    dispatch(setUsers(response.data.items))
}

export const getSearchUser = (user, pageSize) => async (dispatch) => {
    dispatch(togglePreloader(true))
    let response = await userAPI.getSearchedUser(user, pageSize)
    dispatch(togglePreloader(false))
    dispatch(setTotalUsers(response.data.totalCount));
    dispatch(setUsers(response.data.items))
}

export const unfollow = (userId) => async (dispatch) => {
    dispatch(toggleProgressFollowing(true, userId))
    let response = await userAPI.unfollowUser(userId)
    if (response.data.resultCode === 0) {
        dispatch(unfollowUser(userId))
    }
    dispatch(toggleProgressFollowing(false, userId))
}

export const follow = (userId) => async (dispatch) => {
    dispatch(toggleProgressFollowing(true, userId))
    let response = await userAPI.followUser(userId)
    if (response.data.resultCode === 0) {
        dispatch(followUser(userId))
    }
    dispatch(toggleProgressFollowing(false, userId))
}

export default reducerUsers;