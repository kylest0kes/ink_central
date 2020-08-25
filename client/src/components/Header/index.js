import React from 'react';
import './style.css'

export default function Header() {
    return (
        <header className="subnav-hero-section">
            <h1 className="subnav-hero-headline">Ink Central</h1>
            <ul className="subnav-hero-subnav">
                <li><a href="https://zurb.com/responsive" >Home</a></li>
                <li><a href="https://zurb.com/responsive">View All</a></li>
                <li><a href="https://zurb.com/responsive">Ink For Grabs</a></li>
                <li><a href="https://zurb.com/responsive">Looking For Ink</a></li>
            </ul>
        </header>
        // className="is-active"
    )
}
