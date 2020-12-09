import { userAPI } from "../api/api";
import { togglePreloader } from './reducer-users'

const SET_FRIENDS = 'friends/SET_FRIENDS'
const SET_TOTAL_FRIENDS = 'friends/SET_TOTAL_FRIENDS'

const initialState = {
    friends: [],
    currentPageFriends: 1,
    totalFriends: null
}

const reducerFriends = (state = initialState, action) => {
    switch (action.type) {
        case SET_FRIENDS:
            return {
                ...state,
                friends: [...action.friends]
            }
        case SET_TOTAL_FRIENDS:
            return {
                ...state,
                totalFriends: action.totalFriends
            }
        default:
            return state
    }
}

// action creators
const setFriends = (friends) => ({ type: SET_FRIENDS, friends })
const setTotalFriends = (totalFriends) => ({ type: SET_TOTAL_FRIENDS, totalFriends })

// thunk creator
export const getFriends = (currentPage, pageSize) => async (dispatch) => {
    dispatch(togglePreloader(true))
    let response = await userAPI.getFriendsFromServer(currentPage, pageSize)
    dispatch(togglePreloader(false))
    dispatch(setTotalFriends(response.data.totalCount));
    dispatch(setFriends(response.data.items))
}

export default reducerFriends;