import React from 'react';
import ReactSwipe from 'react-swipe';
import slide1 from '../../assets/slideImage1.png';
import slide2 from '../../assets/slideImage2.png';
import slide3 from '../../assets/slideImage3.png';
import slide4 from '../../assets/slideImage4.png';
import ArrowLeft from '../../assets/arrow-left.png';
import ArrowRight from '../../assets/arrow-right.png';
import {
  ButtonWrapper,
  CarouselWrapper
} from './CarouselStyles';

const imageArray = [
  { src: slide1, alt: 'first slide image' },
  { src: slide2, alt: 'second slide image' },
  { src: slide3, alt: 'third slide image' },
  { src: slide4, alt: 'fourth slide image' },
];

const paneNodes = imageArray.map(({ src, alt }) => (
  <div key={alt}>
    <img
      alt={alt}
      src={src}
    />
  </div>
));
const startSlide = 0;
const swipeOptions = {
  startSlide: startSlide < paneNodes.length && startSlide >= 0 ? startSlide : 0,
  auto: 5000,
  speed: 700,
  disableScroll: true,
  continuous: true,
};

const Carousel = () => {
  let reactSwipeEl;

  return (
    <CarouselWrapper>
      <ReactSwipe
        className="carousel"
        childCount={2}
        swipeOptions={swipeOptions}
        ref={(el) => (reactSwipeEl = el)}
      >
        {paneNodes}
      </ReactSwipe>
      <ButtonWrapper>
        <button type="button" onClick={() => reactSwipeEl.prev()}><img src={ArrowLeft} alt="arrow left" /></button>
        <button type="button" onClick={() => reactSwipeEl.next()}><img src={ArrowRight} alt="arrow right" /></button>
      </ButtonWrapper>
    </CarouselWrapper>
  );
};
export default Carousel;
