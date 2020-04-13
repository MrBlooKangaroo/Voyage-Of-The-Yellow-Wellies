import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchMinus } from '@fortawesome/free-solid-svg-icons'
import './styles.css'

export default ({ photoUrl, setIsFullScreen }) => {
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
                onClick={() => setIsFullScreen(false)}
            />
        </div>
    </>
}