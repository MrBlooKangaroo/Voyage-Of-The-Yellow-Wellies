import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs } from '@fortawesome/free-solid-svg-icons'
import './styles.css'
import { camelize } from '../../utils/common';
import BootPrint from '../BootPrint';
import { assets, bootPrints } from '../../utils/constants';
import Modal from '../Modal';
const { phonograph, audio } = assets

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