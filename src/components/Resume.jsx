import React from 'react'
import "./style/resume.css"

const Resume = () => {
    return (
        <div className='resumecontainer container-fluid p-0' >
            <div className="picturecontainer container-fluid m-0 d-flex flex-column justify-content-center align-items-center py-5" >

                <div className="head text-center">
                    <h2 className='resume'>Resume</h2>
                    <h1>The Story Behind My Skills</h1>
                </div>

                <div className="tree d-flex py-5">
                    <div className="boxes">
                        <div className="info">
                            <div className="year rounded-pill"><h1>2021-2025</h1></div>
                            <div className="institude"><h5 className='text-white fw-bold'>NSN College of Engineering and Technology - karur</h5></div>
                            <div className="des"><p>Bachelor of Engineering (EEE)</p></div>
                        </div>
                        <div className="info">

                            <div className="institude"><h5 className='text-white fw-bold'>Professional Summary</h5></div>
                            <div className="des"><p >Electrical and Electronics Engineering graduate and MERN Stack Developer passionate about building modern web applications. Experienced in developing full-stack projects using MongoDB, Express.js, React, and Node.js with a focus on clean UI and efficient backend architecture.</p></div>
                        </div>

                    </div>
                    <div className="line" >
                        <div className="dotbox dotbox1">
                            <div className="smallline"></div>
                            <div className="dot dot1" ></div>
                        </div>
                        <div className="dotbox dotbox2">

                            <div className="dot dot1" ></div>
                            <div className="smallline"></div>
                        </div>
                        <div className="dotbox dotbox3">
                            <div className="smallline"></div>
                            <div className="dot dot1" ></div>
                        </div>
                        <div className="dotbox dotbox4">

                            <div className="dot dot1" ></div>
                            <div className="smallline"></div>
                        </div>


                    </div>
                    <div className="boxes boxes2">
                        <div className="info">
                            <div className="year rounded-pill"><h1>2019-2021</h1></div>
                            <div className="institude"><h5 className='text-white fw-bold'>CD Goverment Higher Secondary School</h5></div>
                            <div className="des"><p>HSC</p></div>
                        </div>
                        <div className="info">

                            <div className="institude"><h5 className='text-white fw-bold'>Projects</h5></div>
                            <div className="des">
                                <ul>
                                    <li>Rhytmix (E-commerce)</li>
                                    <li>Employee Salary Management</li>
                                    <li>Spicy Hunt</li>
                                    <li>Cream Craft</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

                <div className=" button ">
                    <a href="">Download CV</a>
                </div>
            </div>

        </div>
    )
}

export default Resume