import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/state';

export const rerenderIntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App
      state={store.getState()}
      addPost={store.addPost.bind(store)}
      updatePostValue={store.updatePostValue.bind(store)}
      addMessage={store.addMessage.bind(store)}
      updateDialogsValue={store.updateDialogsValue.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}


rerenderIntireTree(store.getState());

store.subscribe(rerenderIntireTree);
