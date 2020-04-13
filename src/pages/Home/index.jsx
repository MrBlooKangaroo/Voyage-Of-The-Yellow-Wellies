import React, { useState } from 'react'
import './styles.css'

import VideoPlayer from '../../components/VideoPlayer'
import BootPrint from '../../components/BootPrint'
import Modal from '../../components/Modal'
import { assets, bootPrints, rivers } from '../../utils/constants'
import Spotlight from '../../components/Spotlight';
const { map, guide } = assets

const t = {
    titleVoyage: 'Voyage of the',
    titleWellies: 'Yellow Wellies',
    subtitle: '(An Exploration of the SuAsCo Watershed)'
}

const Home = () => {
    const [selectedBootPrintId, setSelectedBootPrintId] = useState(null)
    const selectedBootPrint = bootPrints.find(({id}) => id === selectedBootPrintId)
    return (
        <main id='home'>
            <h1 id='hdrWellies'>{t.titleWellies}</h1>
            <h2 id='hdrVoyage'>{t.titleVoyage}</h2>
            <h3 id='hdrSubtitle'>{t.subtitle}</h3>
            <img id='guide' src={guide.src} alt={guide.alt} />
            <section id='mapContainer'>
                <img id='map' src={map.src} alt={map.alt} />
                {/* {rivers.map(river => <VideoPlayer {...river} key={river.id} />)} */}
                {bootPrints.map(bootPrint => 
                    <BootPrint 
                        key={bootPrint.id}
                        setSelectedBootPrintId={setSelectedBootPrintId}
                        {...bootPrint} 
                    />
                )}
            </section>
            <Spotlight {...selectedBootPrint} selectedBootPrintId={selectedBootPrintId} setSelectedBootPrintId={setSelectedBootPrintId}/>
            {/* {selectedBootPrintId && 
                <Modal {...selectedBootPrint} 
                    setSelectedBootPrintId={setSelectedBootPrintId} 
                />
            } */}
        </main>
    )
}

export default Home

