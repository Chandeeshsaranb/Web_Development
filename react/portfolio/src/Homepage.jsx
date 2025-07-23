// Homepage.js
import React from 'react'
import { Link } from 'react-router-dom'
import './homepage.css'

const Homepage = () => {
    return (
        <div className='body'>
            <div className="header">
                <div className="home">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                    </ul>
                </div>
                <div className="others">
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/services">Services</Link></li>
                    </ul>
                </div>
            </div>
            <div className='container'>
                <h1>CHANDEESHSARAN B</h1>
                <p>FullStack Developer</p>
            </div>
        </div>
    )
}

export default Homepage
