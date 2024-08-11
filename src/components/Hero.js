import React from 'react';
import '../App.css';

function Hero() {
  return (
    <section id="hero">
      <div className="hero-content">
        <h1>Selamat Datang di RupaNusantara!</h1>
        <p>Jelajahi sejarah, budaya, dan perjuangan kemerdekaan Nusantara dengan cara yang modern dan menarik.</p>
        <a href="#history" className="cta-button">Mulai Eksplorasi</a> {}
      </div>
    </section>
  );
}

export default Hero;
