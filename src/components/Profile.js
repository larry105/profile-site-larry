import React from 'react'
import larryimg from '../images/larryimg.jpg'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import {FaFacebookMessenger, FaGithub, FaLinkedin, FaWhatsapp} from 'react-icons/fa'


const Profile = () => {
    return (
        <div className='container'>
            <div className='grid'>

        <div className='nav'>
        <div>
            <ul>
            <Link to='/Info' className='navLink'><li>View my resume</li></Link>
            </ul>
        </div>
        </div>
                
            <div className='skills'>
            <div>
                <h2>I do</h2>
                    <p>Web/Mobile Development</p>
                    <p>Graphic Design/Multimedia</p>
                    <p>Networking</p>
                    <p>Troubleshooting</p>
                </div>
            </div>
            <div className='image-container'>
                <img src={larryimg} alt='larry_image'/>
            </div>
            <div className='about'>
                <div>
                <h2>I am</h2>
                <ul>
                    <li>Energetic and motivated</li>
                    <li>Self taught</li>
                    <li>A self starter</li>
                    <li>A team player</li>
                    <li>A natural leader</li>
                </ul>
                </div>
            </div>
            <div className='contact'>
                <div>
                    <a href='https://www.linkedin.com/in/larryknalawaku93/'><FaLinkedin/></a>
                </div>
                <div>
                    <a href='https://wa.me/71779840'><FaWhatsapp/></a> 
                </div>
                <div>
                    <a href='https://m.me/el.rey.125323/'><FaFacebookMessenger/></a>
                </div>
            </div>

            </div>
        </div>
    )
}

export default Profile;
