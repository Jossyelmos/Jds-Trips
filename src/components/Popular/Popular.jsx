import React, {useEffect} from 'react';
import './popular.css';
import './popular.scss';
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort, BsDot } from "react-icons/bs";


import Img from '../../images/image14.jpg';
import Img2 from '../../images/image2.jpg';
import Img3 from '../../images/image6.jpg';
import Img4 from '../../images/image4.jpg';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Data = [
  {
    id: 1,
    imgSrc: Img,
    destTitle: "Machu Picchu",
    location: 'Peru',
    grade: 'CULTURAL RELAX'
  },
  {
    id: 2,
    imgSrc: Img2,
    destTitle: "Guanajuato",
    location: 'Mexico',
    grade: 'CULTURAL RELAX'
  },
  {
    id: 3,
    imgSrc: Img3,
    destTitle: "Angkor Wat",
    location: 'Cambodia',
    grade: 'CULTURAL RELAX'
  },
  {
    id: 4,
    imgSrc: Img4,
    destTitle: "Taj Mahal",
    location: 'India',
    grade: 'CULTURAL RELAX'
  },
]

const Popular = () => {

  useEffect(() => {
    Aos.init({ duration: 2000})
  }, []);

  return (
    <section className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div data-aos="fade-right" data-aos-duration='2500' className="textDiv">
            <h2 className="secTitle">
              Popular Destination
            </h2>
            <p>From historical cities to natural speculators, come see the best of the world</p>
          </div>
          <div data-aos="fade-left" data-aos-duration='2500' className="iconsDiv flex">
            <BsArrowLeftShort className='icon leftIcon' />
            <BsArrowRightShort className='icon rightIcon' />
          </div>
        </div>
        <div className="mainContent grid">
            {
            Data.map(({ id, imgSrc, destTitle, location, grade }) => {
              return (
                <div data-aos="fade-up" className="singleDestination" key={id}>
                  <div className="destImage">
                    <img src={imgSrc} alt="ImageTitle" />
                    <div className="overlayInfo">
                      <h3>{destTitle}</h3>
                      <p>{location}</p>

                      <BsArrowRightShort className='icon' />
                    </div>
                  </div>

                  <div className="destFooter">
                    <div className="number">
                      0{id}
                    </div>
                    <div className="destText flex">
                      <h6>
                        {location}
                      </h6>
                      <span className="flex">
                        <span className="dot">
                          <BsDot className='icon' />
                        </span>
                        Jds
                      </span>
                    </div>
                  </div>
                </div>
              )
            })
            }
        </div>
      </div>
    </section>
  )
}

export default Popular