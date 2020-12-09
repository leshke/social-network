import reducerMessages from "./reducer-messages";
import reducerProfile from "./reducer-profile";
import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import reducerUsers from "./reducer-users";
import reducerAuth from "./reducer-auth";
import reducerApp from "./reducer-app";
import reducerFriends from "./reducer-friends";

let reducers = combineReducers({
    profilePage: reducerProfile,
    dialogsPage: reducerMessages,
    usersPage: reducerUsers,
    friendsPage: reducerFriends,
    auth: reducerAuth,
    app: reducerApp
})

/* let store = createStore(reducers, applyMiddleware(thunkMiddleware)) */

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

 export default store;