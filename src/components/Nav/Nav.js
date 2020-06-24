import React from 'react';
import { NavLink } from 'react-router-dom'

class Nav extends React.Component {
    render() {
        return (
            <>
                <nav className="main-nav">
                    <ul className="nav-list">
                        <li><NavLink to='/about' className="nav-link">About</NavLink></li>
                        <li><NavLink to="/events" className="nav-link">Events</NavLink></li>
                        <li><NavLink to="/schedule" className="nav-link">My Schedule</NavLink></li>
                    </ul>
                    <ul className="nav-list">
                        <li><NavLink to="/add_event" className="nav-link">Add Event</NavLink></li>
                        {/* <li><NavLink href="/" className="nav-link">Log Out</NavLink></li> */}
                        <li><NavLink to="/login" className="nav-link">Login</NavLink></li>
                        <li><NavLink to="/signup" className="nav-link">Sign Up</NavLink></li>
                    </ul>
                </nav>
                <nav className="mobile-nav" role="navigation">
                    <div id="menuToggle">

                        <input type="checkbox" />

                        <span></span>
                        <span></span>
                        <span></span>

                        <ul id="menu">
                            <NavLink to="/about"><li>About</li></NavLink>
                            <NavLink to="/events"><li>Events</li></NavLink>
                            <NavLink to="/schedule"><li>My Schedule</li></NavLink>
                            <NavLink to="/add_event"><li>Add Event</li></NavLink>
                            <NavLink to="/login"><li>Login</li></NavLink>
                            <NavLink to="/signup"><li>Sign Up</li></NavLink>
                        </ul>
                    </div>
                    <div className="mobile-logo" >
                        
                        <NavLink to="/home" className="nav-header-text"><i className="fas fa-headphones margin-right"></i>DownStream</NavLink>
                    </div>
                </nav>

            </>
        )
    }
}

export default Nav