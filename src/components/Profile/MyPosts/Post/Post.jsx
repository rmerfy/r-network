import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img className={s.avatar} src="https://static.thenounproject.com/png/2014807-200.png" alt="user" />
            <p>{props.message}</p>
            <p>{props.likes}</p>
        </div>
    )
}

export default Post;