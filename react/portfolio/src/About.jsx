import React from 'react'
import pic from './profile_picture.png'
import bds from './BDS.webp'
import bhd from './BHD.jpg'
import './about.css'
const About = () => {
    return (
        <div className='body'>
            <div className='about'>
                <h1>About Me:</h1>
                <div className="content">


                    <img src={pic} alt="profile-pic" />
                    <p>I am a passionate and optimistic fresher in web development with a
                        strong enthusiasm for continuous learning and growth in this dynami
                        c field. I thrive in collaborative environments and am driven by the opportunity to contri
                        bute to impactful projects. My goal is to enhance both my technical and creative
                        skills while delivering value to the organization. I am eager to
                        be part of a forward-thinking team where I can grow professionally a
                        nd contribute meaningfully to the organization’s success.</p>

                </div>

            </div>

            <div id="projects">

                <h1>Projects</h1>

                <div class="project">
                    <img class="img" src={bds} alt="" width="140px" height="140px" className='project_image' />


                    <a href="./bds.html" class="pro_title">Blood Donor Service System</a>
                    <p> This project aims at
                        maintaining
                        all the information of blood donors, different
                        blood groups available in each blood bank and help the needed patients in a  better
                        way. By this information we make blood donor service to hospitals. We concentrate
                        more on a user’s experience to make the traditional system even in a better way.We
                        concentrate more on the data privacy of the users to make sure there is no human
                        trafficking.</p>

                </div>
                <br />
                <div class="project">
                    <img class="img" src={bhd} alt="" width="140px" height="140px" className='project_image' />

                    <a href="./bhd.html" class="pro_title">Brain Haemorrhage Detection System</a>
                    <p> This project aims at
                        maintaining
                        all the information of blood donors, different
                        blood groups available in each blood bank and help the needed patients in a  better
                        way. By this information we make blood donor service to hospitals. We concentrate
                        more on a user’s experience to make the traditional system even in a better way.We
                        concentrate more on the data privacy of the users to make sure there is no human
                        trafficking.</p>
                </div>

            </div>

        </div>
    )
}

export default About
