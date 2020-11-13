import React from 'react'

export default function Card(props) {
    // props.DATA is coming from sectionThree.js 
    const {img, heading, description} = props.data;
    return (
        <div className="team-card">
            <img src={img} alt='Card' className='team-card-image'/>
            <h3 className='team-card-h'>{heading}</h3>
            <p className='team-card-p'>{description}</p>
        </div>
    )
}