import { Link } from '@tanstack/react-router';
import './Header.scss';

const Header = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-title">
                <h3>React Testing Ground</h3>
            </div>
            <div className="navbar-links">
                <Link to="/viewTransition">viewTransition</Link>
            </div>
        </div>
    )
}

export default Header;