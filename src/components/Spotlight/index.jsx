import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHiking, faWindowClose, faSearchPlus } from '@fortawesome/free-solid-svg-icons'
import './styles.css'
import { camelize } from '../../utils/common';
import BootPrint from '../BootPrint';
import { assets, bootPrints } from '../../utils/constants';
import Modal from '../Modal';
const { binoculars, arrows } = assets

const t = {
    goTo1: 'Click',
    goTo2: 'to',
    goTo3: 'Explore',
    prompt: 'Click a boot print to explore'
}

export default ({ id, name, photoUrl, linkUrl, selectedBootPrintId, setSelectedBootPrintId }) => {
    const [isFullScreen, setIsFullScreen] = useState(false)
    return ( 
        <section id='spotlight' style={{
            height: selectedBootPrintId ? '26rem' : '5rem',
            bottom: selectedBootPrintId ? '8rem' : '29rem'
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
                        />
                    </a>
                    <FontAwesomeIcon 
                        id='spotlightFullScreen' 
                        icon={faSearchPlus} 
                        onClick={() => setIsFullScreen(!isFullScreen)}
                    />
                    <FontAwesomeIcon 
                        id='spotlightClose' 
                        icon={faWindowClose} 
                        onClick={() => setSelectedBootPrintId(null)}
                    />
                </>
            ) : (
                <span id='spotlightPrompt'>{t.prompt}</span>
            )}
            {isFullScreen && <Modal photoUrl={photoUrl} setIsFullScreen={setIsFullScreen} />}
        </section>
    )
}