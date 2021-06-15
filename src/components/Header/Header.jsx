import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <div className="container">
                <h1 className={s.logo}>R Network</h1>
            </div>
        </header>
    )
}

export default Header;