import { Link } from "react-router-dom"
// import "../styles/Header.css"
import PathConstants from "../../routes/pathConstants";

const Header = () => {
    return (
        <header>
            <div className="header-div">
                <h1 className="title"><Link to={PathConstants.HOME}>Home</Link></h1>
                <nav className="navbar">
                    <ul className="nav-list">
                        <li className="nav-item"><Link to={PathConstants.WORD_PUZZLE}>Word Puzzle Game</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header