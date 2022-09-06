import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Image from 'next/image'
const fadeImages = [

  {
    url: '/images/flood-affectees-3.jpeg',
    caption: 'Second Slide'
    },
  {
    url: '/images/flood-affectees-4.jpg',
    caption: 'Second Slide'
    },
  {
  url: '/images/flood-affectees-2.png',
  caption: 'First Slide'
  },
  {
  url: '/images/flood-affectees-1.webp',
  caption: 'Second Slide'
  }
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade autoplay={true}>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container" style={{minWidth: '200px'}}>
              <Image src={fadeImage.url} layout="responsive" objectFit={'cover'} width={'auto'} height="100%" className="rounded-lg w-full" />
            </div>
          </div>
        ))}
      </Fade>
    </div>
  )
}
export default Slideshow