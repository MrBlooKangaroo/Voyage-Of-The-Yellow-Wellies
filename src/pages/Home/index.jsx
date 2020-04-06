import React from 'react'
import './styles.css'

import VideoPlayer from '../../components/VideoPlayer'
import BootPrint from '../../components/BootPrint'
import { assets, rivers } from '../../utils/constants'
const { map } = assets
const { bootPrints } = rivers[0]

const t = {
    titleVoyage: 'Voyage of the',
    titleWellies: 'Yellow Wellies',
    subtitle: '(An Exploration of the SuAsCo Watershed)'
}

const Home = () => (
    <main className='home'>
        <h1 id='hdrWellies'>{t.titleWellies}</h1>
        <h2 id='hdrVoyage'>{t.titleVoyage}</h2>
        <h3 id='hdrSubtitle'>{t.subtitle}</h3>
        {rivers.map(river => <VideoPlayer {...river} key={river.id} />)}
        <section id='mapContainer'>
            <img id='map' src={map.src} alt={map.alt} />
            {bootPrints
                .slice(0, 2)
                .map(bootPrint => <BootPrint {...bootPrint} key={bootPrint.id}/>)
            }
        </section>
    </main>
)

export default Home

