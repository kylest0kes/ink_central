import React from 'react'

export default function UserPostCardContainer({ children }) {
    return (
        <div style={{marginTop: "25px"}} className="off-canvas-content" data-off-canvas-content>{children}</div>
    )
}
