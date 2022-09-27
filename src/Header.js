import React from "react"
import {Link} from "react-router-dom"

function Header() {
    return (
        <nav className="navbar">
            <Link to="/"><h1>My Blog</h1></Link>
            <Link to="/posts"><h3>Posts</h3></Link>
            <Link to="/about"><h3>About</h3></Link>
        </nav>
    )
};

export default Header;