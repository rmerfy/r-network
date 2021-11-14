import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogItem";
import Messages from "./Messages/Messages";
import {
  addMessageAction,
  updateMessageAction,
} from "../../redux/reducers/dialogs-reducer";

const Dialogs = (props) => {
  let newDialogElement = React.createRef();

  let dialogsMap = props.dialogs.map((dialog) => {
    return <DialogItem name={dialog.name} id={dialog.id} />;
  });

  let messageMap = props.messages.map((message) => {
    return <Messages message={message} />;
  });

  let addMessage = () => {
    props.addMessage();
  };

  let onChangeMessage = (e) => {
    let text = newDialogElement.current.value;
    props.onChangeMessage(text);
  };

  return (
    <div className="box dialogsWrapper">
      <div className={s.dialogs}>
        <ul>{dialogsMap}</ul>
      </div>

      <div className={s.messages}>
        {messageMap}
        <div className="addNew">
          <textarea
            ref={newDialogElement}
            onChange={onChangeMessage}
            value={props.dialogsCurrentValue}
          ></textarea>
          <button onClick={addMessage}>send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
