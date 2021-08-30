import React from 'react'
import {Link} from 'react-router-dom'

const Projects = () => {
    return (
        <div className='nav'>
        <div>
            <ul>
            <Link to='/' className='navLink'><li>Profile</li></Link>
            </ul>
        </div>
        <div>
            <ul>
            <Link to='/Info' className='navLink'><li>Resume</li></Link>
            </ul>
        </div>
        </div>
    )
}

export default Projects
