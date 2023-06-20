/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import blog01 from '../../assets/gallery/blog01.png';
import blog02 from '../../assets/gallery/blog02.png';
import blog03 from '../../assets/gallery/blog03.png';
import blog04 from '../../assets/gallery/blog04.png';
import blog05 from '../../assets/gallery/blog05.png';
import blog06 from '../../assets/gallery/blog06.png';
import close from '../../assets/svg/close.svg';
import { ReactSVG } from 'react-svg';
import { lockScroll, unlockScroll } from '../../js/ults';

const Gallery = () => {
  const [detailImage, setDetailImage] = useState(null);
  const [startY, setStartY] = useState(null);
  const [y, setY] = useState(null);
  const [opacity, setOpacity] = useState(1);
  const [top, setTop] = useState(0);

  const resetImage = () => {
    setStartY(null);
    setY(null);
    setOpacity(1);
    setTop(0);
  }

  const closeImage = () => {
    setDetailImage(null);
    resetImage()
  };

  const keydown = (e) => {
    if (e.keyCode === 27) {
      closeImage();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', keydown);
    return () => {
      document.removeEventListener('keydown', keydown);
      unlockScroll();
    };
  }, [keydown]);

  useEffect(() => {
    if (detailImage) {
      lockScroll();
      // window.screen.orientation.lock("portrait");
      // window.screen.requestFullscreen()
    } else {
      unlockScroll();
    }
  }, [detailImage]);

  useEffect(() => {
    if (y && startY) {
      const diff = y - startY;
      if (diff > 0) {
        setTop(diff);
        setOpacity((window.innerHeight / 8) / diff)
      }
    }
  }, [y, startY]);

  useEffect(() => {
    if (opacity < 0.3) {
      closeImage();
    }
  }, [opacity, closeImage]);

  return (
    <div className="gallery">
      <div className="gallery__content">
        <p className="gallery__title">Gallery Title</p>
        <div className="gallery__photo-box">
          <div
            className="gallery__photo"
            style={{ backgroundImage: `url("${blog01}")` }}
            onClick={() => setDetailImage(blog01)}
          />
          <div
            className="gallery__photo"
            style={{ backgroundImage: `url("${blog02}")` }}
            onClick={() => setDetailImage(blog02)}
          />
          <div
            className="gallery__photo"
            style={{ backgroundImage: `url("${blog03}")` }}
            onClick={() => setDetailImage(blog03)}
          />
          <div
            className="gallery__photo"
            style={{ backgroundImage: `url("${blog04}")` }}
            onClick={() => setDetailImage(blog04)}
          />
          <div
            className="gallery__photo"
            style={{ backgroundImage: `url("${blog05}")` }}
            onClick={() => setDetailImage(blog05)}
          />
          <div
            className="gallery__photo"
            style={{ backgroundImage: `url("${blog06}")` }}
            onClick={() => setDetailImage(blog06)}
          />
        </div>
      </div>
      {detailImage && (
        <div
        className="gallery__photo-detail" onClick={closeImage} 
              onTouchStart={(e) => {
                setStartY(e.touches[0].screenY)
              }}
              onTouchMove={(e) => setY(e.touches[0].screenY)}
              onTouchEnd={ () => detailImage ? resetImage() : {} }
              >
          <div className="gallery__photo-detail-close">
            <ReactSVG src={close} />
          </div>
          <div style={{ opacity: opacity }}>
            <div
              onClick={(e) => e.stopPropagation()}
              className="gallery__photo-detail-image fade-from-center"
              style={{
                backgroundImage: `url("${detailImage}")`,
                top: top,
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
