import React from 'react';
import '../App.css';

function Hero() {
  return (
    <section id="hero">
      <div className="hero-content">
        <h1>Selamat Datang di IndPlore!</h1>
        <p>Indonesia Explore! Jelajahi sejarah, budaya, dan perjuangan kemerdekaan Nusantara dengan cara yang modern dan menarik.</p>
        <a href="#history" className="cta-button">Mulai Eksplorasi</a> {}
      </div>
    </section>
  );
}

export default Hero;
