import React from 'react'
import pacificOcean from '../assets/USN-embark-pacific-ocean-nic.mp4'


function Main() {
    return (
        <div className='main'>
            <video src={pacificOcean} autoPlay loop muted />
        </div>
    )
}

export default Main