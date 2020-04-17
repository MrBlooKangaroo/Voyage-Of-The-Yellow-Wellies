import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchMinus } from '@fortawesome/free-solid-svg-icons'
import { assets } from '../../utils/constants'
import './styles.css'

const zoomOutSFX = new Audio(assets.audio.zoomOut)

export default ({ id, photoUrl, setIsFullScreen, isSFXOn }) => 
    <div className='modal'>   
        <img 
            src={photoUrl} 
            alt='bootprint' 
            className='bootPrintSelected' 
            style={{
                transform: `scaleX(${
                    [26, 27].includes(id) ? '-1' : '1'
                })`
            }}
        />
        <FontAwesomeIcon 
            id='modalClose' 
            icon={faSearchMinus} 
            onClick={() => {
                setIsFullScreen(false)
                isSFXOn && zoomOutSFX.play()
            }}
        />
    </div>