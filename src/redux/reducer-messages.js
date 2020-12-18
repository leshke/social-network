const ADD_MESSAGE = "message/ADD-MESSAGE";

let initialState = {
    dialogs: [
        { id: 1, name: "Jesica" },
        { id: 2, name: "Anna" },
        { id: 3, name: "Ben" },
        { id: 4, name: "Mikel" },
        { id: 5, name: "Bill" }
    ],
    messages: [
        { name: "Hey" },
        { name: "How are you?" },
        { name: "...?" },
        { name: "Oh I forget, this is fake messaging" }
    ],
}

const reducerMessages = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let message = {
                name: action.messageText
            }
            return {
                ...state,
                messages: [...state.messages, message]
            }
        default:
            return state
    }
}

//action creator
export const actionAddMessage = (messageText) => ({ type: ADD_MESSAGE, messageText });

export default reducerMessages;