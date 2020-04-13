import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHiking } from '@fortawesome/free-solid-svg-icons'
import './styles.css'
import { camelize } from '../../utils/common';
import BootPrint from '../BootPrint';
import { assets, bootPrints } from '../../utils/constants';
const { binoculars, arrows } = assets

const t = {
    goTo1: 'Click',
    goTo2: 'to',
    goTo3: 'Explore',
}

export default ({ id, name, photoUrl, linkUrl }) => {
    const [isHovering, setIsHovering] = useState(false)
    return ( 
        <section id='spotlight'>
            <img id='spotlightBinoculars' src={binoculars.src} alt={binoculars.alt} />
            <img id='spotlightBootPrint' src={photoUrl} alt={name} />
            <h3 id='spotlightName'>{name}</h3>
            <div id='exploreContainer'>
            <span id='spotlightGoTo1' className='goToText'>{t.goTo1}</span>
            <span id='spotlightGoTo2' className='goToText'>{t.goTo2}</span>
            <span id='spotlightGoTo3' className='goToText'>{t.goTo3}</span>
                <img id='spotlightArrows' src={assets.arrows.src} alt={assets.arrows.alt} />
                <a 
                    target='_blank' 
                    rel="noopener noreferrer"
                    href={linkUrl}
                >
                    <FontAwesomeIcon 
                        id='spotlightIcon' 
                        icon={faHiking} 
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    />
                </a>
            </div>
        </section>
    )
}