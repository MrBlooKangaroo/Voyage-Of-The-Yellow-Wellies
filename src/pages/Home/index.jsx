import React from 'react'
import './styles.css'

import VideoPlayer from '../../components/VideoPlayer'
import BootPrint from '../../components/BootPrint'
import { assets, rivers } from '../../utils/constants'
const { map, guide } = assets

const t = {
    titleVoyage: 'Voyage of the',
    titleWellies: 'Yellow Wellies',
    subtitle: '(An Exploration of the SuAsCo Watershed)'
}

const Home = () => (
    <main id='home'>
        <h1 id='hdrWellies'>{t.titleWellies}</h1>
        <h2 id='hdrVoyage'>{t.titleVoyage}</h2>
        <h3 id='hdrSubtitle'>{t.subtitle}</h3>

        
        <img id='guide' src={guide.src} alt={guide.alt} />
        <section id='mapContainer'>
            {rivers.map(river => <VideoPlayer {...river} key={river.id} />)}
            <img id='map' src={map.src} alt={map.alt} />
            {rivers[0].bootPrints.map(bootPrint=>
                <BootPrint {...bootPrint} key={bootPrint.id}/>
            )}
            {rivers[1].bootPrints.slice(0, 3).map(bootPrint=>
                <BootPrint {...bootPrint} key={bootPrint.id}/>
            )}
        </section>
    </main>
)

export default Home

