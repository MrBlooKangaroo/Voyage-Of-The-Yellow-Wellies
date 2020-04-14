import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHiking, faWindowClose, faSearchPlus } from '@fortawesome/free-solid-svg-icons'
import { assets } from '../../utils/constants';
import Modal from '../Modal';
import './styles.css'

const { binoculars, arrows, audio } = assets

const t = {
    goTo1: 'Click',
    goTo2: 'to',
    goTo3: 'Explore',
    prompt: 'Click on a boot print to investigate'
}

const closeSFX = new Audio(audio.close)
const zoomInSFX = new Audio(audio.zoomIn)
const exploreSFX = new Audio(audio.explore)

export default ({ name, photoUrl, linkUrl, selectedBootPrintId, setSelectedBootPrintId }) => {
    const [isFullScreen, setIsFullScreen] = useState(false)
    return ( 
        <section id='spotlight' style={{
            height: selectedBootPrintId ? '26rem' : '4.7rem',
            bottom: selectedBootPrintId ? '6rem' : '27.3rem'
        }}>
            <img id='spotlightBinoculars' src={binoculars.src} alt={binoculars.alt} />
            {selectedBootPrintId ? (
                <>
                    <img id='spotlightBootPrint' src={photoUrl} alt={name} />
                    <h3 id='spotlightName' style={{
                        fontSize: `${name.length > 20 ? 1.4 : 2}rem`
                    }}>{name}</h3>
                    <span id='spotlightGoTo1' className='goToText'>{t.goTo1}</span>
                    <span id='spotlightGoTo2' className='goToText'>{t.goTo2}</span>
                    <span id='spotlightGoTo3' className='goToText'>{t.goTo3}</span>
                    <img id='spotlightArrows' src={arrows.src} alt={arrows.alt} />
                    <a 
                        target='_blank' 
                        rel="noopener noreferrer"
                        href={linkUrl}
                    >
                        <FontAwesomeIcon 
                            id='spotlightIcon' 
                            icon={faHiking}
                            onClick={() => exploreSFX.play() }
                        />
                    </a>
                    <FontAwesomeIcon 
                        id='spotlightFullScreen' 
                        icon={faSearchPlus} 
                        onClick={() => {
                            setIsFullScreen(!isFullScreen)
                            zoomInSFX.play()
                        }}
                    />
                    <FontAwesomeIcon 
                        id='spotlightClose' 
                        icon={faWindowClose} 
                        onClick={() => {
                            setSelectedBootPrintId(null)
                            closeSFX.play()
                        }}
                    />
                </>
            ) : (
                <span id='spotlightPrompt'>{t.prompt}</span>
            )}
            {isFullScreen && <Modal photoUrl={photoUrl} setIsFullScreen={setIsFullScreen} />}
        </section>
    )
}