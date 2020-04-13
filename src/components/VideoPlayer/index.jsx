import React from 'react'
import { Player } from 'video-react'
import "../../../node_modules/video-react/dist/video-react.css"
import './styles.css'

import { camelize } from '../../utils/common'

const VideoPlayer = ({ name, videoUrl}) => 
    <div className={`playerContainer ${camelize(name)}Video`}>
        <Player 
            src={videoUrl}
            className='player'
            loop
            muted
            // autoPlay
        />
    </div>

export default VideoPlayer