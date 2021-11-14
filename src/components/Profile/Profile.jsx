import s from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer';
  

const Profile = (props) => {
    return (
        <div className="box">
            <div>
                <img className={s.wallpapper} src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" alt="wallpapper" />
            </div>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;