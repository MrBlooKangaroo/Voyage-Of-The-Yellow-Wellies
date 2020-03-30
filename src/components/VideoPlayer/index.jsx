import React from 'react'
import ReactPlayer from 'react-player'
import './styles.css'

import { camelize } from '../../utils/common'

const VideoPlayer = props => 
    <section id={camelize(props.name)} className="playerContainer">
        <h2 className='playerTitle'>{props.name}</h2>
        <ReactPlayer 
            url={props.url}
            className='player'
            playing
            muted
        />
    </section>

export default VideoPlayer