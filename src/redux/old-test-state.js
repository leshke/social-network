import reducerMessages from "./reducer-messages";
import reducerProfile from "./reducer-profile";


// old test state without Redux
const store = {
    _state: {
        profilePage: {
            posts: [
                { name: "Hi, how are you?", likes: 11 },
                { name: "This is my first post", likes: 19 }
            ],
            updatePost: "",
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: "Vasya" },
                { id: 2, name: "Ira" },
                { id: 3, name: "Petya" },
                { id: 4, name: "Mikel" },
                { id: 5, name: "Bill" }
            ],
            messages: [
                { name: "Hey" },
                { name: "How are you?" },
                { name: "blabla" },
                { name: "abrakadabra" }
            ],
            updateMessage: "",
        }
    },
    _rerenderDOM() {
        console.log('no subscribers');
    },
    subscribe(observer) {
        this._rerenderDOM = observer;
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        reducerProfile(this._state.profilePage, action)
        reducerMessages(this._state.dialogsPage, action)

        this._rerenderDOM(this._state)
    }
}

export default store;