import React, {useEffect} from 'react';
import './blog.css';
import './blog.scss';
import { BsArrowRightShort } from 'react-icons/bs';

import Img from '../../images/image5.jpg';
import Img2 from '../../images/image11.jpg';
import Img3 from '../../images/image10.jpg';
import Img4 from '../../images/image3.jpg';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Posts = [
  {
    id: 1,
    postImg: Img,
    title: 'Beautiful Morocco, Let us travel!',
    desc: 'The kingdom of Morocco is a muslim country in western North Africa, with coastlines on the Atlantic Ocean and Mediterranean Sea.'
  },
  {
    id: 2,
    postImg: Img2,
    title: 'Romantic moments under Eiffel Tower',
    desc: 'With vast swaths of desert on its east and west and the rich Nile River Valley at its heart, is site to one of the worlds earliest and greatest civilization.'
  },
  {
    id: 3,
    postImg: Img3,
    title: 'Let us have an adventure outside Tunisia',
    desc: 'Tunisia is small Arab country in North Africa that represent both the aspirations of freedom and struggle against terrorism that roil the region'
  },
  {
    id: 4,
    postImg: Img4,
    title: 'Best country in East Africa',
    desc: 'When Kenya claimed its independence from the U.K, in 1963, leaders of the newly formed republic promoted a sense of national unity using motto.'
  },
]

const Blog = () => {

  useEffect(() => {
    Aos.init({ duration: 2000})
  }, []);

  return (
    <section className="blog container section">
      
      <div className="secContainer">

        <div className="secIntro">
          <h2 data-aos="fade-up" data-aos-duration='2000' className="secTitle">
            Our Best Blog?
          </h2>
          <p data-aos="fade-up" data-aos-duration='2500'>
            An insight to the incredible experience in the world.
          </p>
        </div>

        <div className="mainContainer grid">
          {Posts.map(({ id, postImg, title, desc }) => {
            return (
              <div data-aos="fade-up" data-aos-duration='2000' className="singlePost grid" key={id}>
                <div className="imgDiv">
                  <img src={postImg} alt={title} />
                </div>

                <div className="postDetails">
                  <h3 data-aos="fade-up" data-aos-duration='3000'>
                    {title}
                  </h3>
                  <p data-aos="fade-up" data-aos-duration='4000'>
                   {desc}
                  </p>
                </div>

                <a href="!#" className="flex" data-aos="fade-up" data-aos-duration='4500'>
                  Read More
                  <BsArrowRightShort className='icon' />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Blog;