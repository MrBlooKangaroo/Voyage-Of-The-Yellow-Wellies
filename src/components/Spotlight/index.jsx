import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHiking, faWindowClose, faSearchPlus } from '@fortawesome/free-solid-svg-icons'
import { assets } from '../../utils/constants';
import Modal from '../Modal';
import './styles.css'

const { wellies, arrows, audio } = assets

const t = {
    explore: 'Explore',
    prompt: 'Click on a boot print to investigate'
}

const closeSFX = new Audio(audio.close)
const zoomInSFX = new Audio(audio.zoomIn)
const exploreSFX = new Audio(audio.explore)

export default ({ id, name, photoUrl, linkUrl, isSFXOn, isFullScreen, setIsFullScreen, selectedBootPrintId, setSelectedBootPrintId }) => {
    const getIsToolTipOn = () => selectedBootPrintId || (window.innerWidth > 1000 && !selectedBootPrintId)
    const [isToolTipOn, setIsToolTipOn] = useState(getIsToolTipOn())
    const handleResize = () => setIsToolTipOn(getIsToolTipOn())
    useEffect(() => window.addEventListener('resize', handleResize))
    const toolTipStyles = getIsToolTipOn() ? {} : {
        width: '0',
        background: 'none',
        border: 'none',
        boxShadow: 'none',
    }
    return ( 
        <section id='spotlight' style={{
            height: selectedBootPrintId ? '22.7rem' : '4.4rem',
            bottom: selectedBootPrintId ? '22.7rem' : '41rem',
            ...toolTipStyles
        }}>
            <img id='spotlightWellies' src={wellies.src} alt={wellies.alt} />
            {selectedBootPrintId ? (
                <>
                    <img id='spotlightBootPrint' src={photoUrl} alt={name} style={{
                        transform: `scaleX(${
                            [26, 27].includes(selectedBootPrintId) ? '-1' : '1'
                        })`
                    }}/>
                    <h3 id='spotlightName' style={{
                        fontSize: `${name.length > 20 ? 1.4 : 2}rem`
                    }}>{name}</h3>
                    <span id='spotlightExplore' className='goToText'>{t.explore}</span>
                    <img id='spotlightArrows' src={arrows.src} alt={arrows.alt} />
                    <a 
                        target='_blank' 
                        rel="noopener noreferrer"
                        href={linkUrl}
                    >
                        <FontAwesomeIcon 
                            id='spotlightIcon' 
                            icon={faHiking}
                            onClick={() => isSFXOn && exploreSFX.play() }
                        />
                    </a>
                    <FontAwesomeIcon 
                        id='spotlightFullScreen' 
                        icon={faSearchPlus} 
                        onClick={() => {
                            setIsFullScreen(!isFullScreen)
                            isSFXOn && zoomInSFX.play()
                        }}
                    />
                    <FontAwesomeIcon 
                        id='spotlightClose' 
                        icon={faWindowClose} 
                        onClick={() => {
                            setSelectedBootPrintId(null)
                            isSFXOn && closeSFX.play()
                        }}
                    />
                </>
            ) : isToolTipOn && (
                <span id='spotlightPrompt'>{t.prompt}</span>
            )}
            {isFullScreen && 
                <Modal 
                    id={id}
                    photoUrl={photoUrl} 
                    isSFXOn={isSFXOn}
                    setIsFullScreen={setIsFullScreen} 
                />
            }
        </section>
    )
}