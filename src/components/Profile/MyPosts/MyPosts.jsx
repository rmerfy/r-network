import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsMap = props.profilePage.posts.map((m)=> {
        return (
            <Post message={m.message} likes={m.likes} />
        )
    });
    
    

    let newPostElement = React.createRef();

    let newPost = () => {
        props.addPost();
    }

    let onChangeValue = () => {
        props.updatePostValue(newPostElement.current.value)
    }
    
    return (
        <div>
            <h2>My Posts</h2>
            <div>
                <textarea ref={newPostElement} onChange={onChangeValue} value={props.profilePage.newPostValue}/>
                <button onClick={newPost}>send</button>
            </div>
            { postsMap }
            
        </div>
    )
}

export default MyPosts;