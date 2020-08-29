import React from 'react'

export default function Container({ children }) {
    return (
        <div className="grid-container">
            <div class="grid-x grid-margin-x small-up-2 medium-up-3 large-up-4">
                {children}
            </div>
        </div>
    )
}
