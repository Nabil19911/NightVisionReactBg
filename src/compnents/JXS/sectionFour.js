import React from 'react'

const SectionFour = () => {
    return(
    <>
        <hr className='devider' />
        <section className='location'>
            
            <div className='opening-time'>
                <img src={'images/container/sega-mega-drive.png'} className='location-img'/>
                <div className='table-conatiner'>
                    <h1>OPENING HOURS</h1><br/>
                    <table className='time-table'>
                        <tr>
                            <td className='weekdays'>Friday:</td>
                            <td>2pm - 12am</td>
                        </tr>
                        <tr>
                            <td className='weekdays'>Saturday:</td>
                            <td>9am - 12am</td>
                        </tr>
                        <tr>
                            <td className='weekdays'>Sunday:</td>
                            <td>9am - 12am</td>
                        </tr>
                        <tr>
                            <td className='weekdays'>Monday:</td>
                            <td>9am - 12am</td>
                        </tr>
                        <tr>
                            <td className='weekdays'>Tuesday:</td>
                            <td>9am - 12am</td>
                        </tr>
                        <tr>
                            <td className='weekdays'>Wednesday:</td>
                            <td>9am - 12am</td>
                        </tr>
                        <tr>
                            <td className='weekdays'>Thursday:</td>
                            <td>9am - 12am</td>
                        </tr>
                    </table>
                </div>
            </div>

            <div className='map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.313094342128!2d53.73056651550666!3d23.66475878463161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e67678695711ee3%3A0x26a7acddea0ceb36!2sNight%20Vision%20Gaming%20center%20LLC!5e0!3m2!1sen!2sae!4v1605237963618!5m2!1sen!2sae" width="600" height="450" frameborder="0" allowfullscreen="false" aria-hidden="false" tabindex="0"></iframe>
            </div>
        </section>
    </>
    );
}

export default SectionFour;