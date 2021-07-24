import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <aside className="sidebar box">
            <nav>
                <ul className={s.menu}>
                    <li><NavLink to="/" activeClassName={s.activeLink}>Profile</NavLink></li>
                    <li><NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink></li>
                    <li><NavLink to="/news" activeClassName={s.activeLink}>News</NavLink></li>
                    <li><NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink></li>
                    <li><NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink></li>
                </ul>
            </nav>
        </aside>
    )
}

export default Navbar;