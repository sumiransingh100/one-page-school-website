import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT SCHOOL</h3>
        <h2>
        Where Curiosity Blossoms and Futures Begin</h2>
        <p>Our school is a nurturing, safe, and vibrant learning environment designed specifically for young children. We believe that the early years are critical for cognitive, social, and emotional development, and our mission is to support each child growth with a well-rounded curriculum.</p>
        <p>Through play, arts, and academics, we foster essential skills and a love for learning, guided by skilled teachers who nurture curiosity, creativity, and confidence.</p>
        <p>Our school is a place where children not only learn but also feel inspired, cared for, and valued.</p>
      </div>
    </div>
  )
}

export default About
