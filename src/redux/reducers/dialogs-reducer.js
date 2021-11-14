const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE = "UPDATE-MESSAGE";

let initialState = {
    dialogs: [
        {
            name: 'name1',
            id: 1,

        },
        {
            name: 'name2',
            id: 2,

        },
        {
            name: 'name3',
            id: 3,

        }
    ],
    messages: [
        'test3'
    ],
    dialogsCurrentValue: 'sts'
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            if (!state.dialogsCurrentValue) {
                alert("Пустое значение")
            } else {
                state.messages.push(
                    state.dialogsCurrentValue
                )
                state.dialogsCurrentValue = ""

            }
            return state;

        case UPDATE_MESSAGE:
            state.dialogsCurrentValue = action.newMessageValue;

            return state;
        default:
            return state;
    }
}

export const addMessageAction = () => {
    return ({
        type: ADD_MESSAGE
    })
}

export const updateMessageAction = (text) => {
    return ({
        type: UPDATE_MESSAGE,
        newMessageValue: text
    })
}

export default dialogsReducer;