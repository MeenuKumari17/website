import React, { useState } from 'react';
import "./body.css";
import SearchIcon from '@material-ui/icons/Search';

const Body = () => {
    const [data, setData] = useState(["E-Commerce", "Social Media Usage", "Inflation", "GDP", "Violent Crime in the U.S.", "TikTok", "Coffee", "Crypto", "Netflix", "Fashion in Metaverse"])
  return (
    <div className='body'>
        <h1>Empowering people with data</h1>
        <p>Insights and facts across 170 industries and 150+ countries</p>
        <div className='search'>
        <input type="text" className='input' placeholder='Find statistics, forecasts and studies'/>
        <button className='butn'>Statista Search</button>
        <SearchIcon className='icon' />
        </div>
        {/* <div className='topic'> */}
            <ul className='ul'>
                {
                    data.map((e) => (
                        <li className='li'>{e}</li>
                    ))
                }
            </ul>
        {/* </div> */}
    </div>
  )
}

export default Body