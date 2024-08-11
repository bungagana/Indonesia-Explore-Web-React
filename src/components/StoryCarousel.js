import React, { useState } from 'react';
import './css/corousel.css';

function StoryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    "https://sketchfab.com/models/84f5b344957540a295743def72f1db66/embed",
    "https://sketchfab.com/3d-models/pahlawan-indonesia-5ab854a8e7604b7292951b38e1bb34d8/embed",
    "https://sketchfab.com/3d-models/indonesia-folksloreroro-kuning-c083d4cde37e483cb4b2b1bfc058ee3d/embed"
  ];

  const scrollCarousel = (direction) => {
    const newIndex = Math.max(0, Math.min(items.length - 1, currentIndex + direction));
    setCurrentIndex(newIndex);
  };

  return (
    <section id="story">
      <h2>Alur Kemerdekaan Indonesia</h2>
      <div className="carousel">
        <div className="carousel-item">
          <iframe title={`Indonesia 3D Model ${currentIndex + 1}`} src={items[currentIndex]} frameBorder="0" allowFullScreen allow="autoplay; fullscreen; vr"></iframe>
        </div>
      </div>
      <div className="carousel-nav">
        <button className="arrow-button" disabled={currentIndex === 0} onClick={() => scrollCarousel(-1)}>
          <i className="bi bi-arrow-left"></i>
        </button>
        <button className="arrow-button" disabled={currentIndex === items.length - 1} onClick={() => scrollCarousel(1)}>
          <i className="bi bi-arrow-right"></i>
        </button>
      </div>
    </section>
  );
}

export default StoryCarousel;
