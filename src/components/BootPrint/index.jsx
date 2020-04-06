import React, { useState } from 'react'
import './styles.css'

const BootPrint = ({ id, name, photoUrl, linkUrl, x, y, angle }) => {
    const [isHovering, setIsHovering] = useState(false)
    return ( 
        <a 
            href={linkUrl} 
            target='_blank' 
            rel="noopener noreferrer"
        >   
            <img
                id={id}
                src={photoUrl}
                alt={name}
                className='bootPrintHover bootPrint '
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}                
                style={{
                    left: `${x}vh`,
                    bottom: `${y}vh`,
                    transform: `${
                        isHovering ? 'scale(1.2)' : 'scale(1)'
                    } rotate(${angle}deg)`
                }}
            />
        </a>
    )
            }

export default BootPrint