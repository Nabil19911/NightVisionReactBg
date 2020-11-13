import React from 'react'

export default function Card(props) {
    // props.DATA is coming from sectionOne.js 
    const {img, heading, description} = props.data;
    return (
        <div className="card">
            <img src={img} alt='Card' className='card-image'/>
            <h3 className='card-h'>{heading}</h3>
            <p className='card-p'>{description}</p>
        </div>
    )
}
