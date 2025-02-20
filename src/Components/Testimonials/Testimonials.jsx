import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
import user_5 from '../../assets/user-5.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Anshul Singh</h3>
                            <span>Rura, U.P.</span>
                        </div>
                    </div>
                    <p>"Honestly, I thought school was just about lunch breaks and dodgeball. Sports day was like a mini-Olympics—hilarious races, epic falls, and teachers cheering us on. Pure gold memories!” <b>- Anshul Singh</b></p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Sumiran Singh</h3>
                            <span>Kanpur, U.P.</span>
                        </div>
                    </div>
                    <p>“This school provided me with incredible support and opportunities that shaped my personal and academic growth. I'm grateful for the amazing community and valuable lessons I learned here.”
                    - <b>Sumiran singh</b>
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Sahil Yadav</h3>
                            <span>Barra, U.P.</span>
                        </div>
                    </div>
                    <p>"This school turned me from a lost kid into a less lost adult! Teachers made boring stuff fun, and my friends were quirky and awesome. If we survived school, we can survive anything!" - <b>Sahil Yadav</b></p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Promish Tiwari</h3>
                            <span>Ramadevi, U.P.</span>
                        </div>
                    </div>
                    <p>
                    “School was like a comedy show—endless laughs, great teachers, and the best kind of crazy friends. If we survived school, we can handle anything!”<b>- Promish Tiwari</b></p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_5} alt="" />
                        <div>
                            <h3>Sachin Gupta</h3>
                            <span>P Road, U.P.</span>
                        </div>
                    </div>
                    <p>
                    "School cafeteria food was a wild ride—some days a mystery, other days a comedy. But those meals gave us the best laughs and legendary memories!" <b>- Sachin Gupta</b></p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
