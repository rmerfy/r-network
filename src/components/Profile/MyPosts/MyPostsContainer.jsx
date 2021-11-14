import React from "react";
import { connect } from "react-redux";
import {
  addPostAction,
  updatePostAction,
} from "../../../redux/reducers/profile-reducer";
import MyPosts from "./MyPosts";

// const MyPostsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState();

//         let newPost = () => {
//           let action = addPostAction();
//           store.dispatch(action);
//         };

//         let onChangeValue = (text) => {
//           let action = updatePostAction(text);
//           store.dispatch(action);
//         };

//         return (
//           <MyPosts
//             updateNewPostText={onChangeValue}
//             newPost={newPost}
//             post={state.profilePage.posts}
//             newPostValue={state.profilePage.newPostValue}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  return {
    post: state.profilePage.posts,
    newPostValue: state.profilePage.newPostValue
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      dispatch(updatePostAction(text));
    },
    newPost: () => {
      dispatch(addPostAction());
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
