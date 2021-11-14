import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsMap = props.post.map((m) => {
    return <Post message={m.message} likes={m.likes} />;
  });

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.newPost();
  };

  let onChangeValue = () => {
      let text = newPostElement.current.value;
      props.updateNewPostText(text);
  }

  return (
    <div>
      <h2>My Posts</h2>
      <div>
        <textarea
          ref={newPostElement}
          onChange={onChangeValue}
          value={props.newPostValue}
        />
        <button onClick={onAddPost}>send</button>
      </div>
      {postsMap}
    </div>
  );
};

export default MyPosts;
