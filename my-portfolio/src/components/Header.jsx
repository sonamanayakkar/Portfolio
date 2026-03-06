import React from 'react'
import "./style/header.css"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="container-fluid p-4 d-flex justify-content-center">
            <header className='d-flex p-2 gap-4 rounded-pill headernavs'>
                <div className="navs">
                    <div className="box">
                        <Link to="/"><i className="fa-solid fa-house-user"></i></Link>
                        <span className='rounded-pill one'>Home</span>
                    </div>

                </div>
                <div className="navs">
                    <div className="box">
                        <Link to="/about"><i className="fa-solid fa-user"></i></Link>
                        <span className='rounded-pill '>About</span>
                    </div>

                </div>
                <div className="navs">
                    <div className="box">
                        <Link to="/resume"><i className="fa-solid fa-file"></i></Link>
                        <span className='rounded-pill'>Resume</span>
                    </div>

                </div>
                <div className="navs">
                    <div className="box">
                        <Link to="/skills"><i className="fa-solid fa-laptop-code"></i></Link>
                        <span className='rounded-pill '>Skills</span>
                    </div>

                </div>
                <div className="navs">
                    <div className="box">
                        <Link to="/projects"><i className="fa-solid fa-diagram-project"></i></Link>
                        <span className='rounded-pill '>Projects</span>
                    </div>

                </div>
                <div className="navs">
                    <div className="box">
                        <Link to="/contact"><i className="fa-solid fa-address-card"></i></Link>
                        <span className='rounded-pill '>Contact</span>
                    </div>

                </div>
            </header>
        </div>
    )
}

export default Header