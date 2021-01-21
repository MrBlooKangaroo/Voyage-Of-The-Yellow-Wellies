import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube';
import './styles.css'

import { camelize, getWindowState } from '../../utils/common'

const VideoPlayer = ({ id, name, videoId }) => {
    const newWindowState = getWindowState(id)
    const opts = {
        width: newWindowState.width,
        height: newWindowState.height,
        playerVars: {
            autoplay: 1,
            loop: 1,
            controls: 0,
        }
    }
    const [windowState, setWindowState] = useState(newWindowState)
    const handleResize = () => setWindowState(newWindowState)
    useEffect(() => window.addEventListener('resize', handleResize))
    return (
        <div 
            id={`${camelize(name)}Video`} 
            className={`playerContainer ${windowState}`}
        >
            <YouTube
                videoId={videoId}
                className={'player'}
                opts={opts}
            />
        </div>
    )
}

export default VideoPlayer