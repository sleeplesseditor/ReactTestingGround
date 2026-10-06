import NavbarMenu from '@components/Header/NavbarMenu';
import { useNavigate } from '@tanstack/react-router';
import './Header.scss';

const Header = () => {
    const navigate = useNavigate();
    const navigateToHome = () => navigate({ to: '/' });

    return (
        <div className="navbar-container">
            <div className="navbar-title" onClick={navigateToHome}>
                <h3>React Testing Ground</h3>
            </div>
            <NavbarMenu />
        </div>
    )
}

export default Header;