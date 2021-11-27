import MyPostsContainer from './MyPosts/MyPostsContainer';
  

const Profile = (props) => {
    return (
        <div>
            <div className="pb-8">
                <img className="rounded-xl shadow-lg" src="https://learnfromben.com/wp-content/uploads/2018/06/Advanced-Landscape-Photography-video-course-Benjamin-Jaworskyj-horizontal-panorama.jpg" alt="wallpapper" />
            </div>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;