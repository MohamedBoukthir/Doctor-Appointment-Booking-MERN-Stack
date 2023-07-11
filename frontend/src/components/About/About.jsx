import React from 'react'

import { Link } from 'react-router-dom'

import aboutImg from '../../assets/images/about.png'
import aboutCardImg from '../../assets/images/about-card.png'


function About() {
  return (
    <section>
        <div className="container">
            <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
                            
                <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:first-letter:order-1'>
                    <img src={aboutImg} alt="" />
                    <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]'>
                        <img src={aboutCardImg} alt="" />
                    </div>
                </div>

                <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
                    <h2 className='heading'>Proud To Be One Of The Nations Best</h2>
                    <p className='text__para'>Welcome To Our Doctor s Appointment App! Our Goal Is To Provide
                    Seamless Healthcare Access, Enabling You To Book Appointments,
                    Access Medical Records, And Receive Personalized Care, All In
                    One Place.</p>

                <p className="text__para mt-[30px]">Introducing Our Revolutionary Doctor s Appointment App!
                    Designed With Your Convenience in Mind, It Streamlines the Booking Process, Offers Real-Time
                    Availability, and Provides Secure Communication With Healthcare Professionals. Experience Hassle-Free
                    Healthcare at Your Fingertips!</p>

                    <Link to='/'>
                        <button className="btn">Learn More</button>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About