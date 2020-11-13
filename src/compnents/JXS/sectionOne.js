import React from 'react'
import Card from '../compo/card'

import {data} from '../compo/cardData'

export default function SectionOne() {

    return (
        <section className='cards-holder'>
            {
                data.map((value)=>{
                    // The DATA={value} has been exported to card.js
                   return <Card key={value.id} data={value}/>
                })
            }
        </section>
    );
}
