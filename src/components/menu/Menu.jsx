import React, { useState } from 'react';
import './menu.css'
import logo from '../image/logo.png'
import Dropdown from '../dropdown/Dropdown';

const Menu = () => {
    const [list, setList ] = useState(false);
    const showDropdown = () => {
        setList(true)
    }
    const hideDropdown = () => {
        setList(false)
    }


    return (
        <>
        <div className='menu'>
            <img className='logo' src={logo} alt="mylogo" />
                <ul className='list' >
                    <li style={{backgroundColor: "#7abf02", padding: "3px", borderRadius: "2px"}}>Price & Access</li>
                    <li>Statistics</li>
                    <li>Reports</li>
                    <li>Outlooks</li>
                    <li>Company DB <span className='new'>NEW</span></li>
                    <li >Infographics</li>
                    <li  onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>Services
                    {list ? (
                    <div className='drop'>
                        <Dropdown/>
                    </div>
                    ) : null 
                    }
                    </li>
                    <li>Global Survey</li>
                </ul>
               
            <button className='btn'>Login</button>
        </div>
        </>
    )
}

export default Menu