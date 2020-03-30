import React from 'react'
import './styles.css'

// import VideoPlayer from '../../components/VideoPlayer'
import BootPrint from '../../components/BootPrint'
import { videos, assets, rivers } from '../../utils/constants'
const { map } = assets
const { bootPrints } = rivers[0]

const t = {
    titleVoyage: 'Voyage of the',
    titleWellies: 'Yellow Wellies',
    subtitle: '(An Exploration of the SuAsCo Watershed)'
}

const Home = props => (
    <div className='home'>
        <h1 id='hdrWellies'>{t.titleWellies}</h1>
        <h2 id='hdrVoyage'>{t.titleVoyage}</h2>
        <h3 id='hdrSubtitle'>{t.subtitle}</h3>
        {/* {videos.map(video => <VideoPlayer {...video} key={video.id} />)} */}
        <img id='map' src={map.src} alt={map.alt} />
        {/* <BootPrint {...bootPrints[0]} /> */}
    </div>
)

export default Home

