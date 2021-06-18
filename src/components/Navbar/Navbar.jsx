import { Link } from 'react-router-dom';
import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <aside className="sidebar box">
            <nav>
                <ul className={s.menu}>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/dialogs">Messages</Link></li>
                    <li><Link to="/news">News</Link></li>
                    <li><Link to="/music">Music</Link></li>
                    <li><Link to="/settings">Settings</Link></li>
                </ul>
            </nav>
        </aside>
    )
}

export default Navbar;