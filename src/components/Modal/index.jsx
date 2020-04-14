import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchMinus } from '@fortawesome/free-solid-svg-icons'
import { assets } from '../../utils/constants'
import './styles.css'

const zoomOutSFX = new Audio(assets.audio.zoomOut)

export default ({ photoUrl, setIsFullScreen, isSFXOn }) => {
    return <>
        <div id='shadow' />
        <div className='modal'>   
            <img 
                src={photoUrl} 
                alt='bootprint' 
                className='bootPrintSelected' 
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
    </>
}