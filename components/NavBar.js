import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    const [ isOpen, setOpen ] = useState(false);
    return (
        <nav
            className="navbar is-primary"
            role="navigation"
            aria-label="main navigation"
        >
            <div className="container">
                <div className="navbar-brand">
                        <a
                        role="button"
                        className={`navbar-burger burger ${isOpen && "is-active"}`}
                        aria-label="menu"
                        aria-expanded="false"
                        onClick={() => setOpen(!isOpen)}
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div className={`navbar-menu ${isOpen && "is-active"}`}>
                    <div className="navbar-start">
                        <NavLink 
                        className="navbar-item" 
                        activeClassName="is-active" 
                        to="/"
                        style={{ marginInlineStart: '32px', textTransform: 'uppercase' }}
                        >
                            Home
                        </NavLink>

                        <NavLink
                        className="navbar-item"
                        activeClassName="is-active"
                        to="/about"
                        style={{ marginInlineStart: '32px', textTransform: 'uppercase' }}
                        >
                            About
                        </NavLink>

                        <NavLink
                        className="navbar-item"
                        activeClassName="is-active"
                        to="/portfolio"
                        style={{ marginInlineStart: '32px', textTransform: 'uppercase' }}
                        >
                            Projects
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar