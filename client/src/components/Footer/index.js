import React from 'react';

import './style.css'

export default function Footer() {
    return (
        <footer>
            <div className="columns shrink footer text-center">
                <p className="footer-title">Ink Central</p>
                <a target="blank" className="project-github" href="https://github.com/kylest0kes/ink_central"><i className="project-github fab fa-github"></i></a>
                <p className="footer-title"><span>&#169;</span> 2020 </p>
                <div className="footer-ul">
                    <h6>Bryce Speirs</h6>
                    <ul className="menu align-center">
                        <li><a target="blank" className="footer-links" href="https://github.com/baspeirs"><i className="footer-links fab fa-github-square"></i></a></li>
                        <li><a target="blank" className="footer-links" href="https://www.linkedin.com/in/bryce-speirs-bb1319199/"><i className="footer-links fab fa-linkedin"></i></a></li>
                    </ul>
                </div>
                
                <div className="footer-ul">
                    <h6>Kyle Stokes</h6>
                <ul className="menu align-center">
                    <li><a target="blank" className="footer-links" href="https://github.com/kylest0kes"><i className="footer-links fab fa-github-square"></i></a></li>
                    <li><a target="blank" className="footer-links" href="https://www.linkedin.com/in/kylest0kes/"><i className="footer-links fab fa-linkedin"></i></a></li>
                </ul>
                </div>
            </div>
        </footer>
    )
}
