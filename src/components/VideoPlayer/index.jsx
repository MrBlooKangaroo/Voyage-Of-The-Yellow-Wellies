import React, { useState, useEffect } from 'react'
import { Player } from 'video-react'
import "../../../node_modules/video-react/dist/video-react.css"
import './styles.css'

import { camelize } from '../../utils/common'

const VideoPlayer = ({ id, name, videoUrl}) => {
    const getWindowState = () => {
        const { innerWidth, innerHeight } = window
        if (innerHeight < 700 && innerWidth < 1100) return 'small'
        switch(id) {
            case 1: 
                return innerWidth < 1045 ? 'small'
                     : innerWidth < 1600 ? 'medium'
                     : 'large'
            case 2: 
                return innerWidth < 1285 ? 'small'
                     : innerWidth < 1780 ? 'medium'
                     : 'large'
            case 3: 
            default:
                return innerWidth < 1225 ? 'small'
                     : innerWidth < 1600 ? 'medium'
                     : 'large'
        }
    }
    const [windowState, setWindowState] = useState(getWindowState())
    const handleResize = () => setWindowState(getWindowState())
    useEffect(() => window.addEventListener('resize', handleResize))
    return (
        <div 
            id={`${camelize(name)}Video`} 
            className={`playerContainer ${windowState}`}
        >
            <Player 
                src={videoUrl}
                className='player'
                loop
                muted
                // autoPlay
            />
        </div>
    )
}
export default VideoPlayer