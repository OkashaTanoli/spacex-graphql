import React, { useState } from 'react';
import './launches.css'
import Launches from './launches';
import Indlaunches from './indlaunches';

function LaunchComponent() {
    const [id, setId] = useState('1')
    return (
        <div className='launches' id='launches'>
            <h1>Launches</h1>
            <div className="extra_div_launches"></div>
            <div className='mission_slider'>
                <Launches callBack={setId} id={id}  />
                <Indlaunches id = {id} />
            </div>
        </div>
    );
}

export default LaunchComponent;