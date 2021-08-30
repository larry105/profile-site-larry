import React from 'react'
import resume from '../resume/resume.pdf'
import {Link} from 'react-router-dom'

const Info = () => {
    return (
        <div className='container'>
        <div className='info-grid'>

            <div className='nav'>
                <ul>
                    <Link to='/' className='navLink'><li>Back to Profile</li></Link>
                </ul>
            </div>

            <div className='resume'>
                <embed src={resume} type='application/pdf' width='100%' height='600px' />
            </div>

        </div>
        </div>
    )
}

export default Info
