import React from 'react';
import './menu.css'
import logo from '../image/logo.png'

const Menu = () => {

    return (
        <>
        <div className='menu'>
            <img className='logo' src={logo} alt="image" />
                <ul className='list'>
                    <li style={{backgroundColor: "#7abf02", padding: "3px", borderRadius: "2px"}}>Price & Access</li>
                    <li>Statistics</li>
                    <li>Reports</li>
                    <li>Outlooks</li>
                    <li>Company DB <span className='new'>NEW</span></li>
                    <li>Infographics</li>
                    <li>Services</li>
                    <li>Global Survey</li>
                </ul>
            <button className='btn'>Login</button>
        </div>
        </>
    )
}

export default Menu