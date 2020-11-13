import React from 'react';

import Card from '../compo/ourTeam'
import {teamData} from '../compo/ourTeamData'

const SectionThree = () => {
    return(
    <>
        <section className='our-team-holder'>
            <section className='sec-three-bg-container'>
                <div className='contant'>
                    <h1>Eat. Sleep. Game. Repeat</h1>
                </div>
            </section>

            <section className='our-team'>
                <h1><u>OUR TEAM</u></h1>
                <div className='team-members'>
                    {
                        teamData.map((value)=>{
                            // The DATA={value} has been exported to card.js
                        return <Card key={value.id} data={value}/>
                        })
                    }
                </div>
            </section>
        </section>
    </>
    );
}

export default SectionThree;