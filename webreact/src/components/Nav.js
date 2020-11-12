import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <a href="/"><h3>BRAND</h3></a>
            <ul className="links">
                <Link to="/"className="link-item"><li>Home</li></Link>
                <Link to="/services"className="link-item"><li>Services</li></Link>
                <Link to="/about"className="link-item"><li>About</li></Link>
                <Link to="/contact"className="link-item"><li>Contact</li></Link>
            </ul>
        </nav>
    )
}
export default Nav
