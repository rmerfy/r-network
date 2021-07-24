
let store = {
    _state: {
        profilePage: {
            posts: [
                { message: 'h2i1', likes: 2121 },
                { message: 'first message', likes: 5 },
                { message: 'first message2', likes: 4 },
                { message: 'first message3', likes: 5 }
            ],
            newPostValue: 'test2'
        },
        dialogsPage: {
            dialogs: [
                { name: 'name1', id: 1},
                { name: 'name2', id: 2},
                { name: 'name3', id: 3}
            ],
            dialogsCurrentValue: 'sts'
        }
    },
    _subscriber() {
        console.log('state changed');
    },

    getState(){
        return this._state;
    },
    
    subscribe(observer) {
        this._subscriber = observer;
    },

    addPost() {
        this._state.profilePage.posts.push({
            message: this._state.profilePage.newPostValue,
            likes: 0
        })
        this._state.profilePage.newPostValue = ""
        this._subscriber(this._state)
    },

    addMessage(text) {
        if (!this._state.dialogsPage.dialogsCurrentValue) {
            alert("Пустое значение")
        } else {
            this._state.dialogsPage.dialogs.push({
                name: this._state.dialogsPage.dialogsCurrentValue,
                id: 0
            })
            this._state.dialogsPage.dialogsCurrentValue = ""
            this._subscriber(this._state)
        }
    },

    updatePostValue(newPostValue) {
        this._state.profilePage.newPostValue = newPostValue;
        this._subscriber(this._state)
    },

    updateDialogsValue(DialogsValue) {
        this._state.dialogsPage.dialogsCurrentValue = DialogsValue;
        this._subscriber(this._state)
    }
}

window.store = store;

export default store;