import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogItem';
import Messages from './Messages/Messages';

const Dialogs = (props) => {

    let dialogsMap = props.dialogsPage.dialogs.map((dialog) => {
        return <DialogItem name={dialog.name} id={dialog.id} />
    })

    let newElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }

    let onChangeMessage = () => {
        props.updateDialogsValue(newElement.current.value)
    }

    return (
        <div className="box dialogsWrapper">
            <div className={s.dialogs}>
                <ul>
                    {dialogsMap}
                </ul>
            </div>

            <div className={s.messages}>
                <Messages message="test text" />
                <Messages message="test text" />
                <div className="addNew">
                    <textarea ref={newElement} onChange={onChangeMessage} value={props.dialogsPage.dialogsCurrentValue}></textarea>
                    <button onClick={addMessage}>send</button>
                </div>
            </div>
            
        </div>

    )
}

export default Dialogs;