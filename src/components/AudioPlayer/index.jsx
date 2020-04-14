import React from 'react'
import { assets } from '../../utils/constants';
import './styles.css'

const { phonograph } = assets

const t = {
    title: 'Audio Settings',
    SFX: 'Sound FX',
    soundscape: 'Soundscape'
}

export default ({ 
    isSFXOn, toggleIsSFXOn, 
    isSoundScapeOn, toggleIsSoundScapeOn 
}) => {
    return ( 
        <section id='audioPlayer'>
            <h2 id='audioTitle'>{t.title}</h2>
            <img id='audioIcon' src={phonograph.src} alt={phonograph.alt} />
            <button id='sfxButton' className={
                isSFXOn ? 'on' : 'off'
            } onClick={() => toggleIsSFXOn(!isSFXOn)}>{
                isSFXOn ? 'SFX On' : 'SFX Off'
            }</button>
            <button id='soundScapeButton' className={
                isSoundScapeOn ? 'on' : 'off'
            } onClick={() => toggleIsSoundScapeOn(!isSoundScapeOn)}>{
                isSoundScapeOn ? 'River On' : 'River Off'
            }</button>
        </section>
    )
}