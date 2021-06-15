import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <aside className="sidebar box">
            <nav>
                <ul className={s.menu}>
                    <li><a href="#l">Profile</a></li>
                    <li><a href="#l">Messages</a></li>
                    <li><a href="#l">News</a></li>
                    <li><a href="#l">Music</a></li>
                    <li><a href="#l">Setting</a></li>
                </ul>
            </nav>
        </aside>
    )
}

export default Navbar;