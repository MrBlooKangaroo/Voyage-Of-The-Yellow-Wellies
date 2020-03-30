import React from 'react'
import './styles.css'

const BootPrint = ({ id, src, alt, linkUrl }) => 
    <a 
        href={linkUrl} 
        target='_blank' 
        rel="noopener noreferrer"
    >
        <img
            id={id}
            src={src}
            alt={alt}
            className='bootprint'
        />
    </a>

export default BootPrint