// import React from 'react'
// import pacificOcean from '../assets/USN-embark-pacific-ocean-nic.mp4'


// function Main() {
//     return (
//         <div className='main'>
//             <video src={pacificOcean} autoPlay loop muted playsinline type="video/mp4"/>

//         </div>
//     )
// }

// export default Main

import React, {useRef, useEffect} from "react"
import pacificOcean from '../assets/USN-embark-pacific-ocean-nic.mp4'

export default function Main(props) {
    const videoRef = useRef(undefined);
    useEffect(() => {
        videoRef.current.defaultMuted = true;
    })
    return (
        <video
            className='main'
            ref={videoRef}
            loop
            autoPlay
            muted
            playsInline>
            <source src={pacificOcean} type="video/mp4"/>
        </video>
    );
}