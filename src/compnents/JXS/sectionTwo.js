import React, { useState } from 'react'

const SectionTwo = () => {
    return (
        <section className='detail-holder'>

            <div className='sec-two-bg-container'>
                <div className='contant'>
                    <h1>Keep calm and game on</h1>
                </div>
            </div>

            <div className='about-us-wrapper'>
                <img src={'images/container/gaming-mouse.png'} className='section-two-img'/>
                <div className='about-us'>
                    <h1><u>About Us.</u></h1><br />
                    <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.s</p>
                </div>
            </div>
        </section>
    );
}


export default SectionTwo;
