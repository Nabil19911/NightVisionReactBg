import React from 'react'
import SectionOne from './sectionOne'
import SectionTwo from './sectionTwo'
import SectionThree from './sectionThree'
import SectionFour from './sectionFour'
import SectionFive from './sectionFive'

export default function MainSection() {
    return (
        <>
        <header className='header-wrapper'>
            <div className='nav-conatiner'>
                <img src={'/images/logo/logo.png'} alt='logo' className='logo'/>
            </div>
            <div className='hero-conatiner'>
                <h1 className='qoute-top qoute'>GAMERS DON'T DIE </h1>
                <h2 className='qoute-under qoute'>THEY RESPONE</h2>
            </div>
        </header>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        </>
    )
}
