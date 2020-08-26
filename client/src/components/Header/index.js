import React from 'react';
import './style.css';
import { Link } from "react-router-dom";

export default function Header(props) {
    return (
        <header className="subnav-hero-section">
            <h1 className="subnav-hero-headline">Ink Central</h1>
            <ul className="subnav-hero-subnav">
                <li><Link to="/userhome">Home</Link></li>
                <li><Link to="/home">View All</Link></li>
                <li><Link to="/looking">Looking For Ink</Link></li>
                <li><Link to="/available">Available Ink</Link></li>
                <li><a href="" onClick={props.logout}>Logout</a></li>
            </ul>
        </header>
        // class to add forselected page: className="is-active"
    )
}
