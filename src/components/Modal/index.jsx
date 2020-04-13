import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import './styles.css'

export default ({ photoUrl, setSelectedBootPrintId }) => {
    return ( 
        <div className='modal'>   
            <img 
                src={photoUrl} 
                alt='bootprint' 
                className='bootPrintSelected' 
            />
            <FontAwesomeIcon 
                className='close' 
                icon={faWindowClose} 
                onClick={() => setSelectedBootPrintId(null)}
            />
        </div>
    )
}