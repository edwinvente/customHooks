import React from 'react'
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink exact activeClassName='active' className="nav-link" to='/'>Home</NavLink>
                        <NavLink exact activeClassName='active' className="nav-link" to='/about'>About</NavLink>
                        <NavLink exact activeClassName='active' className="nav-link" to='/login'>Login</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}
