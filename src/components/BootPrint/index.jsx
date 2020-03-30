import React from 'react'
import './styles.css'

const BootPrint = ({ id, name, photoUrl, linkUrl }) => 
    <a 
        href={linkUrl} 
        target='_blank' 
        rel="noopener noreferrer"
    >
        <img
            id={id}
            src={photoUrl}
            alt={name}
            className='bootprint'
        />
    </a>

export default BootPrint