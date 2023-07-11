import React from 'react'

import heroImg01 from '../assets/images/hero-img01.png'
import heroImg02 from '../assets/images/hero-img02.png'
import heroImg03 from '../assets/images/hero-img03.png'

import icon01 from '../assets/images/icon01.png'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'

import { Link } from 'react-router-dom'
import { BsArrowRight} from 'react-icons/bs'
import About from '../components/About/About'

import ServiceList from '../components/Services/ServiceList'

const Home = () => {
  return (
    <>

      {/* hero section */} 

      <section className='hero__section pt-[60px] 2xl:h-[800px]'>
        <div className="container">
          <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
            
            <div>
              <div className='lg:w-[570px]'>
                <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] 
                md:text-[60px] md:leading-[70px]'>
                Take care of your body 
                , its the only place you have to live.
                </h1>
                <p className='text__para'>
                Finding doctors online at any time offers convenience,
                immediate access, and a broader range of expertise.
                 It saves time, eliminates travel, and enables timely 
                 medical consultations, diagnosis, and treatment. 
                 This accessibility empowers individuals to prioritize 
                 their well-being and seek expert healthcare advice with 
                 ease and convenience.
                </p>
                <button className='btn'>
                Request An Appointment
                </button>
              </div>

              <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 
                 lg:gap-[30px]'>       
                  <div>
                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
                   text-headingColor'>
                    20+
                   </h2>
                   <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                   <p className='text__para'>Years Of Experience</p>
                  </div>

                  <div>
                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
                   text-headingColor'>
                    10+
                   </h2>
                   <span className='w-[100px] h-2 bg-purple-300 rounded-full block mt-[-14px]'></span>
                   <p className='text__para'>Clinic Location</p>
                  </div>

                  <div>
                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
                   text-headingColor'>
                    100%
                   </h2>
                   <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
                   <p className='text__para'>Patient Satisfaction</p>
                  </div>

                 </div>

            </div> 

            <div className='flex gap-[30px] justify-end'>
              <div>
                <img className='w-full' src={heroImg01} alt="" />
              </div>
              <div className='mt-[30px]'>
                <img src={heroImg02}  alt="" className='w-full mb-[30px]'/>
                <img src={heroImg03} alt="" className='w-full' />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How It Work section */} 

      <section>
        <div className="container">
          <div className='lg:w-[470px] mx-auto'>
            <h2 className='heading text-center'>Providing The Best Medical Services</h2>
            <p className='text__para text-center'>
              World-Class Care For Everyone. 
              Our health System Offers Unmatched,
              Expert Health Care.</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] 
          mt-[30px] lg:mt-[55px]'>

            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon01} alt="" />
                </div>

                <div className='mt-[30px]'>
                  <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                    Find A Doctor
                  </h2>
                  <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                    World-Class Care For Everyone. Our Health System Offers 
                    Unmatched, Expert Health Care. From The Lab To The Clinic.
                  </p>


                  <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center group
                   hover:bg-primaryColor hover:border-none justify-center'>
                    <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                   </Link>
                </div>
            </div>

            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon02} alt="" />
                </div>

                <div className='mt-[30px]'>
                  <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                    Find A Location
                  </h2>
                  <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                    World-Class Care For Everyone. Our Health System Offers 
                    Unmatched, Expert Health Care. From The Lab To The Clinic.
                  </p>


                  <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center group
                   hover:bg-primaryColor hover:border-none justify-center'>
                    <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                   </Link>
                </div>
            </div>

            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon03} alt="" />
                </div>

                <div className='mt-[30px]'>
                  <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                    Book Appointment
                  </h2>
                  <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                    World-Class Care For Everyone. Our Health System Offers 
                    Unmatched, Expert Health Care. From The Lab To The Clinic.
                  </p>


                  <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center group
                   hover:bg-primaryColor hover:border-none justify-center'>
                    <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                   </Link>
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* About section */} 

      <About/>

      {/* About section */} 

      <section>
        <div className="container">
          <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>Our Medical Services</h2>
            <p className='text__para text-center'>World-Class Care For Everyone. Our Health System Offers Unmatched,
              Expert Health Care.
            </p>
          </div>


          <ServiceList />
        </div>
      </section>

    </>
  )
}

export default Home