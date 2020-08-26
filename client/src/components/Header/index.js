import React from 'react';
import './style.css'

export default function Header(props) {
    return (
        <header className="subnav-hero-section">
            <h1 className="subnav-hero-headline">Ink Central</h1>
            <ul className="subnav-hero-subnav">
                <li><a href="/home" >Home</a></li>
                <li><a href="https://zurb.com/responsive">View All</a></li>
                <li><a href="https://zurb.com/responsive">Ink For Grabs</a></li>
                <li><a href="https://zurb.com/responsive">Looking For Ink</a></li>
                <li><a href="" onClick={props.logout}>Logout</a></li>
            </ul>
        </header>
        // class to add forselected page: className="is-active"
    )
}
