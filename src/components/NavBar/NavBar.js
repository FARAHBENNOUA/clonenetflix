import React, { useState, useEffect } from 'react';
import './NavBar.css';
import logo from '../asset.images/c8c8077a-10fc-44d5-93f0-da4e592a299e-netflix-logo-print_pms.avif';

const Navbar = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShow(true);
            } else {
                setShow(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${show ? 'navbar__black' : ''}`}>
            <div className="navbar__content">
                <img 
                    src={logo} 
                    alt="Netflix Logo" 
                    className="navbar__logo"
                    style={{ 
                        width: '80px',
                        height: 'auto'
                    }}
                />
            </div>
        </nav>
    );
};

export default Navbar;