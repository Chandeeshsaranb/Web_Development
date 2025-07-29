import React, { Profiler } from 'react'
import './home.css'
import pic from '../assets/pexels-prasanthdas-1670413.jpg'
import html from '../assets/html.png'
import css from '../assets/css-3.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import node from '../assets/node-js.png'
import java from '../assets/java.png'
import python from '../assets/python-removebg-preview.png'
import db from '../assets/database-removebg-preview.png'
import git from '../assets/social-removebg-preview.png'
import pt from '../assets/penetration-testing-removebg-preview.png'
import code from '../assets/coding.png'
import pts from '../assets/software.png'
import server from '../assets/server.png'
import webd from '../assets/landing-page.png'
import bds from '../assets/BDS.jpg'
import bhd from '../assets/BHD.jpg'

const Home = () => {
    return (
        <div className="overall" id='overall'>
            <div className='body'>
                <div className="header">
                    <div className="left">
                        <span><a href="#overall">Home</a></span>
                    </div>
                    <div className="right">
                        <ul>
                            <li><a href="#ABOUT">About</a></li>
                            <li><a href="#SKILLS">Skills</a></li>
                            <li><a href="#PROJECTS">Projects</a></li>
                            <li><a href="#CONTACT">Contact</a></li>
                        </ul>
                    </div>
                </div>


                {/* main-content */}
                <div className="name">
                    <div className="name-content">
                        <h1>CHANDEESHSARAN</h1>
                        <h2>Full-Stack Web Developer</h2>
                        <p>Responsive react websites</p>
                    </div>
                    {/* <div className="profile-pic">
                    <img src={pic} alt="" />
                </div> */}
                </div>




                <div id="ABOUT">


                </div>




                <div className="tech">
                    <h3>Technologies I am familiar with</h3>

                    <div className="scroll">
                        <div className="scroll-track">
                            <div className="image"><img src={html} alt="HTML" /></div>
                            <div className="image"><img src={css} alt="CSS" /></div>
                            <div className="image"><img src={js} alt="JavaScript" /></div>
                            <div className="image"><img src={react} alt="React" /></div>
                            <div className="image"><img src={node} alt="Node.js" /></div>
                            <div className="image"><img src={java} alt="Java" /></div>
                            <div className="image"><img src={python} alt="Python" /></div>
                            <div className="image"><img src={git} alt="Git" /></div>
                            <div className="image"><img src={db} alt="Database" /></div>
                            <div className="image"><img src={pt} alt="Postman" /></div>

                            {/* Duplicate for smooth infinite scroll */}
                            <div className="image"><img src={html} alt="HTML" /></div>
                            <div className="image"><img src={css} alt="CSS" /></div>
                            <div className="image"><img src={js} alt="JavaScript" /></div>
                            <div className="image"><img src={react} alt="React" /></div>
                            <div className="image"><img src={node} alt="Node.js" /></div>
                            <div className="image"><img src={java} alt="Java" /></div>
                            <div className="image"><img src={python} alt="Python" /></div>
                            <div className="image"><img src={git} alt="Git" /></div>
                            <div className="image"><img src={db} alt="Database" /></div>
                            <div className="image"><img src={pt} alt="Postman" /></div>
                        </div>
                    </div>
                </div>




                <div className="about">
                    <h1>About Me</h1>

                    <div className="about-content">
                        <img src={pic} alt="" />
                        <p>Hi, I’m Chandeeshsaran, a passionate Full-Stack Web Developer with a strong foundation in React.js, JavaScript, and modern web technologies. I enjoy crafting clean, responsive user interfaces and interactive experiences. I recently completed my React.js learning and have hands-on experience building projects like personal portfolios and even a 2D Mario-style platformer game.

                            I thrive on continuous learning, clear documentation, and bringing creative ideas to life through code. Whether it's designing a slick UI or integrating complex logic, I love turning concepts into real, working web applications.</p>
                    </div>
                </div>


                <div id="SKILLS">

                </div>


                <div className="skills">
                    <h1>My Skills</h1>
                    <div className="skill-content">
                        <div className="box">
                            <div className="boxes"><img src={code} alt="" /></div>
                            <div className="title"><h3>Web Development</h3></div>
                            {/* <div className="desc"><p>I build functional, responsive, and dynamic websites using modern technologies like HTML, CSS, JavaScript, React, and Node.js. I turn concepts into web applications.</p></div> */}
                        </div>
                        <div className="box">
                            <div className="boxes"><img src={pts} alt="" /></div>
                            <div className="title"><h3>Penetration Testing</h3></div>
                            {/* <div className="desc"><p>I have a foundational understanding of web security and penetration testing techniques. I analyze vulnerabilities, simulate attacks like SQL Injection, and CSRF.</p></div> */}
                        </div>
                        <div className="box">
                            <div className="boxes"> <img src={server} alt="" /></div>
                            <div className="title"><h3>Server Maintenance</h3></div>
                            {/* <div className="desc"><p>I handle basic server administration. I'm familiar with using Linux-based environments, managing Node.js applications and ensuring backend runs smoothly.</p></div> */}
                        </div>
                        <div className="box">
                            <div className="boxes"><img src={webd} alt="" /></div>
                            <div className="title"><h3>Web Design</h3></div>
                            {/* <div className="desc"><p>I create clean, modern UI designs with a focus on user experience. Using design principles like spacing, typography, color harmony, and layout structure.</p></div> */}
                        </div>
                    </div>
                </div>


                        <div id="PROJECTS">

                        </div>


                <div className="project">
                    <h1>Projects</h1>
                    <div className="projects">
                        <div className="image">
                            <img className='pro-img' src={bds} alt="" />
                        </div>
                        <div className="content">
                            <h2>Blood Donor Service System</h2>
                            <p>This project aims at maintaining all the information of blood donors, different blood groups available in each blood bank and help the needed patients in a better way. By this information we make blood donor service to hospitals. We concentrate more on a user’s experience to make the traditional system even in a better way.We concentrate more on the data privacy of the users to make sure there is no human trafficking.</p>
                            <h3>Features:</h3>
                            <ul>
                                <li>Automatic Blood Group Filtering</li>
                                <li>Chatbot Integration</li>
                                <li>Responsive web design</li>
                            </ul>
                        </div>
                    </div>

                    <div className="projects">
                        <div className="image">
                            <img className='pro-img' src={bhd} alt="" />
                        </div>
                        <div className="content">
                            <h2>Brain Haemorrhage Detection System</h2>
                            <p>This project aims at maintaining all the information of blood donors, different blood groups available in each blood bank and help the needed patients in a better way. By this information we make blood donor service to hospitals. We concentrate more on a user’s experience to make the traditional system even in a better way.We concentrate more on the data privacy of the users to make sure there is no human trafficking.</p>
                            <h3>Features:</h3>
                            <ul>
                                <li>Automatic Detection of Haemorrhage region</li>
                                <li>Precise Machine Learning model</li>
                                <li>Responsive UI</li>
                            </ul>
                        </div>
                    </div>


                    <div className="contact" id='CONTACT'>
                            <h1>Connect with me</h1>

                            <div className="contact-content">
                                <a className='cicon' id='linkedin' target='_blank' href="https://www.linkedin.com/in/chandeeshsaran-b-895a13202/">LinkedIn</a>
                                <a className='cicon' id='github' target='_blank' href="https://github.com/Chandeeshsaranb">Github</a>
                                <a className='cicon' id='facebook' target='_blank' href="https://www.facebook.com/CHANDEESHSARANB05/">Facebook</a>
                            </div>
                            
                    </div>


                    <footer>
                        © 2025 Chandeeshsaran. All rights reserved.
                    </footer>
                </div>




            </div>
        </div>
    )
}

export default Home
