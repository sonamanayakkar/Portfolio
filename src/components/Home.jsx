import React from 'react'
import html from "./images/skills/html.png"
import css from "./images/skills/css.png"
import mongodb from "./images/skills/mongodb.png"
import node from "./images/skills/node.png"
import profile from "./images/profile/sideview.png"
import react from "./images/skills/react.png"
import js from "./images/skills/js.png"
import jquery from "./images/skills/jquery.png"
import express from "./images/skills/express.png"
import "./style/home.css"
import { Link } from 'react-router-dom';


const Home = () => {
    return (

        <div className='homecontainer container-fluid '>

            <div className="left ">
                <div className="three">
                    <h2>Hello It's Me</h2>
                    <h1>SONAMANAYAKKAR</h1>
                    <h2>And i'm a <span>Fullstack Developer</span></h2>
                </div>

                <div className="three">
                    <p className='text-white-50'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti mollitia libero beatae. Eius, obcaecati illum! Saepe vel in sapiente quo ipsa modi quasi placeat sint perspiciatis. Nam aut similique soluta!</p>
                </div>
                <div className="apps d-flex gap-3">
                    <div className="app"><a href=""><i className="fa-brands fa-linkedin-in "></i></a></div>
                    <div className="app"><a href=""><i className="fa-brands fa-github"></i></a></div>
                    <div className="app"><a href=""><i className="fa-brands fa-whatsapp"></i></a></div>
                    <div className="app"><a href=""><i className="fa-brands fa-instagram"></i></a></div>
                </div>
                <div className="three button">
                    <a href="">My Works</a>
                </div>
            </div>
            <div className="right p-0">
                <div className="imagebg">
                    <div className="image " >
                        <img src={profile} alt="" />
                    </div>

                    <div className="circle p-0">
                        <div className="skills html">
                            <img src={html} alt="" />
                        </div>
                        <div className="skills mongodb">
                            <img src={mongodb} alt="" />
                        </div>
                        <div className="skills  node">
                            <img src={node} alt="" />
                        </div>
                        <div className="skills  react">
                            <img src={react} alt="" />
                        </div>
                        <div className="skills  css">
                            <img src={css} alt="" />
                        </div>
                        <div className="skills  js">
                            <img src={js} alt="" />
                        </div>
                        <div className="skills  jquery">
                            <img src={jquery} alt="" />
                        </div>
                        <div className="skills  express">
                            <img src={express} alt="" />
                        </div>

                    </div>


                </div>

            </div>
        </div>
    )
}

export default Home