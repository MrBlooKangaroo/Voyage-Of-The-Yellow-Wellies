import React, { useState } from 'react'
import './styles.css'

import VideoPlayer from '../../components/VideoPlayer'
import BootPrint from '../../components/BootPrint'
import { rivers, assets, bootPrints, ekphrasis } from '../../utils/constants'
import Spotlight from '../../components/Spotlight';
import AudioPlayer from '../../components/AudioPlayer';
const { map, guide, umbrella, audio } = assets

const t = {
    titleVoyage: 'Voyage of the',
    titleWellies: 'Yellow Wellies',
    subtitle: 'An Exploration of the SuAsCo Watershed'
}

const soundScapeSFX = new Audio(audio.river)
const umbrellaSFX = new Audio(audio.umbrella)
const councilSFX = new Audio(audio.council)

const Home = () => {
    const [isSFXOn, toggleIsSFXOn] = useState(false)
    const [isSoundScapeOn, toggleIsSoundScapeOn] = useState(false)
    const [isFullScreen, setIsFullScreen] = useState(false)
    const [selectedBootPrintId, setSelectedBootPrintId] = useState(null)
    const selectedBootPrint = bootPrints.find(({id}) => id === selectedBootPrintId)
    isSoundScapeOn ? soundScapeSFX.play() : soundScapeSFX.pause()
    return (
        <main id='home'>
            <div id='wrapperLeft' className='wrapperHome'>
                <h1 id='hdrWellies'>{t.titleWellies}</h1>
                <h2 id='hdrVoyage'>{t.titleVoyage}</h2>
                <h3 id='hdrSubtitle'>{t.subtitle}</h3>

                <section id='ekphrasis'>
                    {ekphrasis.beginning1}
                    <br/><br/>
                    {ekphrasis.beginning2}
                    <a 
                        id='ekphrasisLink' 
                        href={ekphrasis.linkUrl}
                        target='_blank' 
                        rel="noopener noreferrer"
                        onClick={() => isSFXOn && councilSFX.play()}
                    >{ekphrasis.link}</a>
                    {ekphrasis.end}
                </section>
            </div>
            
            <img id='guide' src={guide.src} alt={guide.alt} />

            <div id='wrapperCenter' className='wrapperHome'>
                <section id='mapContainer'>
                    {rivers.map(river => <VideoPlayer {...river} key={river.id} />)}
                    <img id='map' src={map.src} alt={map.alt} />
                    {bootPrints.map(bootPrint => 
                        <BootPrint 
                        key={bootPrint.id}
                            selectedBootPrintId={selectedBootPrintId}
                            setSelectedBootPrintId={setSelectedBootPrintId}
                            isSFXOn={isSFXOn}
                            {...bootPrint} 
                        />
                    )}
                </section>
            </div>

            <div id='wrapperRight' className='wrapperHome'>
                <AudioPlayer 
                    isSFXOn={isSFXOn} toggleIsSFXOn={toggleIsSFXOn} 
                    isSoundScapeOn={isSoundScapeOn} toggleIsSoundScapeOn={toggleIsSoundScapeOn} 
                />
                <Spotlight 
                    isSFXOn={isSFXOn} 
                    isFullScreen={isFullScreen}
                    setIsFullScreen={setIsFullScreen}
                    selectedBootPrintId={selectedBootPrintId} 
                    setSelectedBootPrintId={setSelectedBootPrintId}
                    {...selectedBootPrint} 
                />
                <a 
                    id='ekphrasisLink' 
                    href={umbrella.linkUrl}
                    target='_blank' 
                    rel="noopener noreferrer"
                    onClick={() => isSFXOn && umbrellaSFX.play()}
                >
                    <img 
                        id='umbrella' 
                        src={umbrella.src} 
                        alt={umbrella.alt} 
                    />
                </a>
            </div>
            {isFullScreen && <div id='shadow' />}
        </main>
    )
}

export default Home

