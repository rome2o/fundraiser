import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
  {
  url: 'https://picsum.photos/800/800',
  caption: 'First Slide'
  },
  {
  url: 'https://picsum.photos/800/800',
  caption: 'Second Slide'
  },
  {
  url: 'https://picsum.photos/800/800',
  caption: 'Third Slide'
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade autoplay={true}>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container" style={{minWidth: '200px'}}>
              <img src={fadeImage.url} className="rounded-lg w-full" />
            </div>
          </div>
        ))}
      </Fade>
    </div>
  )
}
export default Slideshow