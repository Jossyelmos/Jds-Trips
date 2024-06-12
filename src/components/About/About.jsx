import React, {useEffect} from 'react';
import './about.css';
import './about.scss';

import Img from '../../images/mountain2.jpeg';
import Img2 from '../../images/climbing.jpeg';
import Img3 from '../../images/customer.png';

import video from '../../images/video.mov';

import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {

  useEffect(() => {
    Aos.init({ duration: 2000})
  }, []);

  return (
    <section className="about section">
      <div className="secContainer">

        <h2 className="title">
          Why Hikings?
        </h2>

        <div className="mainContent container grid">
          <div data-aos="fade-up" data-aos-duration='2000' className="singleItem">
            <img src={Img} alt="ImgName" />

            <h3>100+ Mountains</h3>

            <p>Research shows that a chance to break away from from the normal rythms of daily life reduces stress and improves health and well-being</p>
          </div>
          <div data-aos="fade-up" data-aos-duration='2500' className="singleItem">
            <img src={Img2} alt="ImgName" />

            <h3>1000+ Hikings</h3>

            <p>Research shows that a chance to break away from from the normal rythms of daily life reduces stress and improves health and well-being</p>
          </div>
          <div data-aos="fade-up" data-aos-duration='3000' className="singleItem">
            <img src={Img3} alt="ImgName" />

            <h3>20000+ Customers</h3>

            <p>Research shows that a chance to break away from from the normal rythms of daily life reduces stress and improves health and well-being</p>
          </div>
        </div>

        <div className="videoCard container">
          <div className="cardContent grid">
            <div data-aos="fade-right" data-aos-duration='2000' className="cardText">
              <h2>
                Wonderful house experience in there!
              </h2>

              <p>Th adventure subranking is based on an equally weighted average of scores from five countries</p>
            </div>
            
            <div data-aos="fade-left" data-aos-duration='2000' className="cardVideo">
              <video src={video} autoPlay loop muted type='video/mp4'></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;