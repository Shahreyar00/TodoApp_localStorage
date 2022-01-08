const Header = ({ title }) => {
    return (
        <header>
            <h1 className="head">{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: "Default Title"
}

export default Header;