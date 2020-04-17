import React from 'react'
import { assets } from '../../utils/constants';
import './styles.css'

const { duck, audio } = assets

const t = {
    title: 'Sound Settings',
}

const toggleSFX = new Audio(audio.toggle)
const quackSFX = new Audio(audio.quack)

export default ({ 
    isSFXOn, toggleIsSFXOn, 
    isSoundScapeOn, toggleIsSoundScapeOn 
}) => {
    return ( 
        <section id='audioPlayer'>
            <h2 id='audioTitle'>{t.title}</h2>

            <img 
                id='audioIcon' 
                src={duck.src} 
                alt={duck.alt} 
                onClick={() => isSFXOn && quackSFX.play()}
            />

            <button id='sfxButton' className={
                isSFXOn ? 'on' : 'off'
            } onClick={() => {
                toggleIsSFXOn(!isSFXOn)
                isSFXOn && toggleSFX.play()
            }}>{
                isSFXOn ? 'FX On' : 'FX Off'
            }</button>
            
            <button id='soundScapeButton' className={
                isSoundScapeOn ? 'on' : 'off'
            } onClick={() => {
                toggleIsSoundScapeOn(!isSoundScapeOn)
                isSFXOn && toggleSFX.play()
            }}>{
                isSoundScapeOn ? 'River On' : 'River Off'
            }</button>
        </section>
    )
}