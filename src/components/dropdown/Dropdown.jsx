import React from 'react';
import './dropdown.css';
import { data } from '../../dummyData';

const Dropdown = () => {
    
  return (
    <div className='dropdown'>
        <ul>
       {
        data.map((d) => (
            <>
        <li key={d.id} className="name">{d.name}</li>
        <hr/>
        <li className='desc'>{d.desc}</li>
        <li className='link'>{d.link[0]}</li>
        <li className='link'>{d.link[1]}</li>
        <li className='link'>{d.link[2]}</li>
        <li className='link'>{d.link[3]}</li>
        <li className='link'>{d.link[4]}</li>
        </>
        ))
       }

        </ul>
    </div>
  )
}

export default Dropdown