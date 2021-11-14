import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <div className="container">
                <h1 className={s.logo}>R Network</h1>
                <p className="mt-7 bg-black">test</p>
            </div>
        </header>
    )
}

export default Header;