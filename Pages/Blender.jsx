import React, { useState, useEffect, useRef } from 'react';

function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollLeft = sliderRef.current.scrollLeft;
      const slideWidth = sliderRef.current.offsetWidth;
      setActiveIndex(Math.round(scrollLeft / slideWidth));
    };

    sliderRef.current.addEventListener('scroll', handleScroll);
    return () => sliderRef.current.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="slider-wrapper">
      <div className="slider" ref={sliderRef}>
        <img src="/assets/ProductRender2Items.jpg" alt="3D render of sunscreen packaging" />
        <img src="/assets/Generator-Render.jpg" alt="Rendering of a commercial generator" />
        <img src="/assets/Chess Render Hi Res.jpg" alt="Rendering of a chess board" />
      </div>
      <div className="slider-nav">
        {['slide-1', 'slide-2', 'slide-3'].map((_, index) => (
          <a
            key={index}
            href={`#slide-${index + 1}`}
            className={index === activeIndex ? 'active' : ''}
            aria-label={`Go to slide ${index + 1}`}
          ></a>
        ))}
      </div>
    </section>
  );
}

export default Slider;
