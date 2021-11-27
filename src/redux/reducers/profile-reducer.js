const ADD_POST = "ADD-POST";
const UPDATE_POST = "UPDATE-POST";

let initialState = {
    posts: [
        { message: 'h2i1', likes: 2121 },
        { message: 'first message', likes: 5 },
        { message: 'first message2', likes: 4 },
        { message: 'first message3', likes: 5 }
    ],
    newPostValue: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: 
        return {
            ...state,
            posts: [...state.posts, { message: state.newPostValue, likes: 0 } ],
            newPostValue: "",
        }

        case UPDATE_POST:
            return {
                ...state,
                newPostValue: action.newPostValue,
            }
        default:
            return state;
    }
}

export const addPostAction = () => {
    return ({
        type: ADD_POST
    })
}

export const updatePostAction = (text) => {
    return ({
        type: UPDATE_POST,
        newPostValue: text
    })
}

export default profileReducer