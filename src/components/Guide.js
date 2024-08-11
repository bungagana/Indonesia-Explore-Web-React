import React, { useState } from 'react';
import './css/Guide.css';

function Guide() {
  // State to manage which sections are expanded
  const [expandedSections, setExpandedSections] = useState({});

  // Function to toggle section visibility
  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="guide-container">
      <h1>Panduan RupaNusantara</h1>
      <p>RupaNusantara adalah nama yang menggambarkan wajah dan keanekaragaman budaya, sejarah, serta identitas bangsa Indonesia. Melalui website ini, pengunjung diajak menjelajahi kekayaan dan warisan Indonesia, mulai dari perjuangan kemerdekaan hingga keindahan budaya yang tersebar di seluruh Nusantara. Dengan fitur seperti eksplorasi 3D, alur kemerdekaan, dan artikel sejarah, RupaNusantara menjadi cermin yang menampilkan kekayaan warisan dan jati diri bangsa Indonesia.</p>

      <section className="developer-info">
        <h2>Pengembang</h2>
        <p>Website ini dikembangkan oleh: <strong>Bunga Laelatul Muna</strong></p>
        <p>Email: <a href="mailto:bungamagelang57@gmail.com">bungamagelang57@gmail.com</a></p>
        <p>Instagram: <a href="https://www.instagram.com/bun_gana/" target="_blank" rel="noopener noreferrer">bun_gana</a></p>
      </section>

      <section>
        <h2 onClick={() => toggleSection('3D')}>
          Fitur 3D <i className={`bi ${expandedSections['3D'] ? 'bi-chevron-up' : 'bi-chevron-down'}`} />
        </h2>
        {expandedSections['3D'] && (
          <p>Fitur ini memungkinkan Anda menjelajahi Indonesia dalam 3D, melihat berbagai budyaa, toko organisasi dan tempat bersejarah dengan detail yang mendalam. Fitur ini memanfaatkan asset 3dimensi free resource dari sketchfab</p>
        )}
      </section>

      <section>
        <h2 onClick={() => toggleSection('Kemerdekaan')}>
          Fitur Alur Kemerdekaan <i className={`bi ${expandedSections['Kemerdekaan'] ? 'bi-chevron-up' : 'bi-chevron-down'}`} />
        </h2>
        {expandedSections['Kemerdekaan'] && (
          <p>Pelajari bagaimana Indonesia mencapai kemerdekaan melalui alur interaktif yang mendalam dan informatif.</p>
        )}
      </section>

      <section>
        <h2 onClick={() => toggleSection('Chatbot')}>
          Fitur Chatbot: SakaBot <i className={`bi ${expandedSections['Chatbot'] ? 'bi-chevron-up' : 'bi-chevron-down'}`} />
        </h2>
        {expandedSections['Chatbot'] && (
          <p> <b>Saka Bot</b> menggabungkan arti "Saka," yang berarti "pilar" dalam bahasa Jawa, dengan "Bot," yang merujuk pada asisten digital. Nama ini mencerminkan fungsi SakaBot sebagai pilar informasi digital yang stabil dan kuat, menyediakan bantuan dan pengetahuan mendalam tentang sejarah dan budaya Indonesia.</p>
        )}
      </section>

      <section>
        <h2 onClick={() => toggleSection('Quiz')}>
          Fitur Quiz <i className={`bi ${expandedSections['Quiz'] ? 'bi-chevron-up' : 'bi-chevron-down'}`} />
        </h2>
        {expandedSections['Quiz'] && (
          <p>Uji pengetahuan Anda tentang sejarah dan budaya Indonesia dengan fitur Quiz. Pertanyaannya beragam dan dirancang untuk menguji wawasan sejarah Anda.</p>
        )}
      </section>

      <section>
        <h2 onClick={() => toggleSection('Game')}>
          Fitur Game <i className={`bi ${expandedSections['Game'] ? 'bi-chevron-up' : 'bi-chevron-down'}`} />
        </h2>
        {expandedSections['Game'] && (
          <p>Bermainlah dalam game mencari poin pancasila.</p>
        )}
      </section>

      <section>
        <h2 onClick={() => toggleSection('Sejarah')}>
          Fitur Sejarah <i className={`bi ${expandedSections['Sejarah'] ? 'bi-chevron-up' : 'bi-chevron-down'}`} />
        </h2>
        {expandedSections['Sejarah'] && (
          <p>Baca artikel-artikel mendalam tentang berbagai aspek sejarah  dan budaya Indonesia. Temukan fakta-fakta menarik yang belum banyak diketahui orang.</p>
        )}
      </section>

    </div>
  );
}

export default Guide;
