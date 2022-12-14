import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import shoppingcart from '../../img/shoppingcart.png'
import expense from '../../img/expense.png'
import netflix from '../../img/netflix.png'
import booking from '../../img/booking.png'
import apiFetch from '../../img/apiFetch.png'
import MusicApp from '../../img/musicapp.png'
import tom from '../../img/tom.png'
import Exp from '../../img/Exp.png'
import 'swiper/css'
import { themeContext } from '../../Context'
import { useContext } from 'react';

const Portfolio = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
  return (
    <div className='portfolio'>
        {/* heading */}
        <span style={{color: darkMode? 'white':' '}}>Recent Projects</span>
        <span>Portfolio</span>

        {/* slider */}
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        >
            <SwiperSlide>
                <a href='https://netflixappreactjs.netlify.app'><img src={netflix} alt=''  /></a>
            </SwiperSlide>
            <SwiperSlide>
                <img src={shoppingcart} alt=''  />
            </SwiperSlide>
            <SwiperSlide>
                <a href='https://dhanarajb.github.io/Expense-udemy/'><img src={expense} alt=''  /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a href='https://ticketbookingreact.netlify.app'><img src={booking} alt=''  /></a>
            </SwiperSlide>
            <SwiperSlide>
                <img src={apiFetch} alt=''  />
            </SwiperSlide>
            <SwiperSlide>
                <img src={MusicApp} alt=''  />
            </SwiperSlide>
            <SwiperSlide>
                <img src={tom} alt=''  />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Exp} alt=''  />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio