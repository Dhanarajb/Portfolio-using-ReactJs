import React from 'react'
import { Link } from 'react-router-dom'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='n-wrapper'>
        <div className="n-left">
            <div className="n-name">Dhanaraj</div>
            <Toggle />
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType: 'none'}}>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/services'><li>Services</li></Link>
                    <Link to='/experience'><li>Experience</li></Link>
                    <Link to='/portfolio'><li>Portfolio</li></Link>
                    <Link to='/testimonial'><li>Testimonial</li></Link>
                </ul>
            </div>
            <Link to='/contact'><button className="button n-button">
                Contact
            </button></Link>
        </div>
    </div>
  )
}

export default Navbar