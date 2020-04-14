import React, { useState } from 'react'
import './styles.css'

import { assets } from '../../utils/constants'

const { audio } = assets
const bootClickSFX = new Audio(audio.bootClick)
const bootHoverSFX = new Audio(audio.bootHover)

const BootPrint = ({ id, name, photoUrl, setSelectedBootPrintId, selectedBootPrintId, isSFXOn, x, y, angle }) => {
    const [isHovering, setIsHovering] = useState(false)
    const isFlipped = [26, 27].includes(id)
    const onBootPrintClick = () => {
        isSFXOn && bootClickSFX.play()
        setSelectedBootPrintId(id)
    }
    const onBootPrintHover = () => {
        isSFXOn && bootHoverSFX.play()
        setIsHovering(true)
    }
    return ( 
        <div id='bootPrintContainer'>
            <img
                id={id}
                alt={name}
                src={photoUrl}
                className={`bootPrint${
                    id === selectedBootPrintId ? ' selected' : ''
                }`}
                onClick={onBootPrintClick}
                onMouseEnter={onBootPrintHover}
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
        </div>
    )
}

export default BootPrint