import { Link } from '@tanstack/react-router';
import NavbarMenu from '@components/Header/NavbarMenu';
import './Header.scss';

const Header = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-title">
                <h3>React Testing Ground</h3>
            </div>
            <NavbarMenu />
        </div>
    )
}

export default Header;