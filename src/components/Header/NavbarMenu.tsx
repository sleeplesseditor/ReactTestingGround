import React from 'react';
import { flushSync } from 'react-dom';
import { Link } from '@tanstack/react-router';

const NavbarMenu = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => {
    if (!document.startViewTransition) {
      setIsOpen((prev) => !prev);
      return;
    }

    document.startViewTransition(() => {
      flushSync(() => {
        setIsOpen((prev) => !prev);
      });
    });
  };

    return (
        <div className="menu-container">
            <button 
                onClick={toggleMenu} 
                aria-expanded={isOpen} 
                aria-label="Toggle Menu"
                className="hamburger-btn"
            >
                <span className="icon burger-icon" style={{ viewTransitionName: 'menu-icon' }}>☰</span>
            </button>
            {isOpen && (
                <nav className="nav-menu navbar-links" style={{ viewTransitionName: 'menu-content' }}>
                    <ul className="links-container">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/viewTransition">viewTransition</Link></li>
                        <li><Link to="/fragmentRefs">Fragment Refs</Link></li>
                    </ul>
                </nav>
            )}
    </div>
    )
}

export default NavbarMenu;