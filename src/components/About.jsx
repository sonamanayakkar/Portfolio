import React from 'react'
import html from "./images/skills/html.png"
import mongodb from "./images/skills/mongodb.png"
import node from "./images/skills/node.png"
import react from "./images/skills/react.png"
import profile from "./images/profile/sideview 2.png"
import "./style/about.css"

const About = () => {
    return (
        <div className='aboutcontainer homecontainer container-fluid '>

           
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

                    </div>


                </div>

            </div>

             <div className="left ">
                <div className="three">
                    <h2 className='aboutletter'>About Me</h2>
                    <p className='text-white-50 fs-5'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    
                </div>

                <div className="lists">
                    <ul className='about-info'>
                        <li>
                            <h5>Name:</h5>
                            <p className='text-white-50 fs-5 fw-bold'>SONAMANAYAKKAR E</p>
                        </li>
                        <li>
                            <h5>Date of birth:</h5>
                            <p className='text-white-50  fs-5 '>March 28,2004</p>
                        </li>
                        <li>
                            <h5>Address:</h5>
                            <p className='text-white-50 fs-5'>Guziliyamparai,Dindigul(Dt)-624703</p>
                        </li>
                        <li>
                            <h5>Email:</h5>
                            <p className='text-white-50 fs-5'>esonaman2@gmail.com</p>
                        </li>
                        <li>
                            <h5>Phone:</h5>
                            <p className='text-white-50 fs-5'>+91 7904087127</p>
                        </li>
                        
                    </ul>
                    
                </div>
                <div className="CV button">
                    <a href="">DOWNLOAD CV</a>
                </div>
            </div>

        </div>
    )
}

export default About