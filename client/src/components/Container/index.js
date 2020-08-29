import React from 'react';


import './style.css'

export default function Container({ children }) {
    return (
        <div className="card-container">
            <div class="grid-x grid-margin-x small-up-2 medium-up-3 large-up-4">
                {children}
            </div>
        </div>
    )
}
