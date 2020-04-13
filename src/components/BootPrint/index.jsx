import React, { useState } from 'react'
import './styles.css'

const BootPrint = ({ id, name, riverId, photoUrl, setSelectedBootPrintId, x, y, angle }) => {
    const [isHovering, setIsHovering] = useState(false)
    const isFlipped = riverId === 3 && [3, 4].includes(id)
    return ( 
        <img
            id={id}
            alt={name}
            src={photoUrl}
            className='bootPrint'
            onClick={() => setSelectedBootPrintId(id)}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}                
            style={{
                left: `${x}vh`,
                bottom: `${y}vh`,
                transform: `${
                    isHovering ? 'scale(1.2)' : 'scale(1)'
                } rotate(${angle}deg)${
                    isFlipped ? ' scaleX(-1)' : ''
                }`
            }}
        />
    )
}

export default BootPrint