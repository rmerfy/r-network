import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            <h2>My Posts</h2>
            <Post message="hi" likes="1" />
            <Post message="first post" likes="10" />
        </div>
    )
}

export default MyPosts;