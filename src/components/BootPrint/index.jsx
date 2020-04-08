import React, { useState } from 'react'
import './styles.css'
import { camelize } from '../../utils/common';

const BootPrint = ({ id, name, riverName, photoUrl, linkUrl, x, y, angle }) => {
    const [isHovering, setIsHovering] = useState(false)
    const isFlipped = riverName === 'Concord' && [3, 4].includes(id)
    return ( 
        <a 
            href={linkUrl} 
            target='_blank' 
            rel="noopener noreferrer"
        >   
            <img
                id={`${camelize(riverName)}-${id}`}
                src={photoUrl}
                alt={name}
                className='bootPrintHover bootPrint'
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}                
                style={{
                    left: `${x}vh`,
                    bottom: `${y}vh`,
                    transform: `${
                        isHovering ? 'scale(1.2)' : 'scale(1)'
                    } rotate(${angle}deg) ${
                        isFlipped ? ' scaleX(-1)' : ''
                    }`
                }}
            />
        </a>
    )
            }

export default BootPrint