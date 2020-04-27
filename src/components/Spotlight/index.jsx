import React from 'react'
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

export default ({ id, name, photoUrl, linkUrl, isSFXOn, isFullScreen, setIsFullScreen, selectedBootPrintId, setSelectedBootPrintId }) =>
    <section id='spotlight' style={{
        height: selectedBootPrintId ? '37vh' : 'unset',
        minHeight: selectedBootPrintId ? '16rem' : 'unset'
    }}>
        <img id='spotlightWellies' src={wellies.src} alt={wellies.alt} />
        {selectedBootPrintId ? (
            <>
                <img id='spotlightBootPrint' src={photoUrl} alt={name} style={{
                    transform: `scaleX(${
                        [26, 27].includes(selectedBootPrintId) ? '-1' : '1'
                    })`
                }}/>
                <FontAwesomeIcon 
                    id='spotlightFullScreen' 
                    icon={faSearchPlus} 
                    onClick={() => {
                        setIsFullScreen(!isFullScreen)
                        isSFXOn && zoomInSFX.play()
                    }}
                />
                
                <h3 id='spotlightName' style={{
                    fontSize: `${name.length > 20 ? 2 : 2.5}vmin`
                }}>{name}</h3>
                
                
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
                <span id='spotlightExplore' className='goToText'>{t.explore}</span>
                <FontAwesomeIcon 
                    id='spotlightClose' 
                    icon={faWindowClose} 
                    onClick={() => {
                        setSelectedBootPrintId(null)
                        isSFXOn && closeSFX.play()
                    }}
                />
            </>
        ) : (
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