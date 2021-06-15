import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img className={s.avatar} src="https://lh3.googleusercontent.com/proxy/e67HQoK3Pg1rWIuL87mTLxQIGqaoCEwju_MFZH062knMQqjBKSykBLa5nqHXzcBmRWWSRH4JCi_5AO02af3Ybzvb2ug3TR2aaRxb4uTs" alt="at" />
            <p>{props.message}</p>
            <p>{props.likes}</p>
        </div>
    )
}

export default Post;