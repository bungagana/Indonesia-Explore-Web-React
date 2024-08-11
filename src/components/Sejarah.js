// src/pages/Sejarah.js
import React from 'react';
import { Link } from 'react-router-dom';
import './css/Sejarah.css';

function Sejarah() {
  const articles = [
    {
      id: 1,
      title: 'Proklamasi Kemerdekaan Indonesia',
      content: 'Proklamasi kemerdekaan Indonesia pada 17 Agustus 1945 adalah momen bersejarah yang menandai berakhirnya penjajahan di Indonesia...',
      imageUrl: 'https://asset.kompas.com/crops/yz6SdRxyzhq7XEdDAkpVDkzH68g=/0x100:470x413/750x500/data/photo/2022/01/11/61dd74993ca51.jpg',
      link: '/sejarah/proklamasi-kemerdekaan',
    },
    {
      id: 2,
      title: 'Pertempuran Surabaya 1945',
      content: 'Pertempuran Surabaya adalah pertempuran besar antara pejuang Indonesia dan pasukan Inggris yang terjadi pada November 1945...',
      imageUrl: 'https://asset.kompas.com/crops/yz6SdRxyzhq7XEdDAkpVDkzH68g=/0x100:470x413/750x500/data/photo/2022/01/11/61dd74993ca51.jpg',
      link: '/sejarah/pertempuran-surabaya',
    },
    {
      id: 3,
      title: 'Perjanjian Linggarjati',
      content: 'Perjanjian Linggarjati adalah perjanjian antara Indonesia dan Belanda yang disepakati pada 25 Maret 1947, untuk mengakui kedaulatan Indonesia...',
      imageUrl: 'https://asset.kompas.com/crops/yz6SdRxyzhq7XEdDAkpVDkzH68g=/0x100:470x413/750x500/data/photo/2022/01/11/61dd74993ca51.jpg',
      link: '/sejarah/perjanjian-linggarjati',
    },
    {
      id: 4,
      title: 'Serangan Umum 1 Maret 1949',
      content: 'Serangan Umum 1 Maret 1949 adalah serangan militer besar yang dilakukan oleh Tentara Nasional Indonesia (TNI) untuk merebut kembali Yogyakarta...',
      imageUrl: 'https://example.com/serangan-umum.jpg',
      link: '/sejarah/serangan-umum',
    },
    {
      id: 5,
      title: 'Pembentukan BPUPKI',
      content: 'BPUPKI (Badan Penyelidik Usaha Persiapan Kemerdekaan Indonesia) adalah badan yang dibentuk oleh pemerintah pendudukan Jepang untuk mempersiapkan kemerdekaan Indonesia...',
      imageUrl: 'https://example.com/bpupki.jpg',
      link: '/sejarah/pembentukan-bpupki',
    },
    {
      id: 6,
      title: 'Perang Diponegoro',
      content: 'Perang Diponegoro (1825-1830) adalah perang besar antara Pangeran Diponegoro dari Yogyakarta dan pemerintah kolonial Belanda...',
      imageUrl: 'https://example.com/perang-diponegoro.jpg',
      link: '/sejarah/perang-diponegoro',
    },
  ];

  return (
    <div className="sejarah-container">
      <h1>Sejarah Indonesia</h1>
      <div className="cards-container">
        {articles.map((article) => (
          <Link to={article.link} key={article.id} className="card-link-wrapper">
            <div className="card">
              <img src={article.imageUrl} alt={article.title} className="card-image" />
              <div className="card-content">
                <h2>{article.title}</h2>
                <p>{article.content}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sejarah;
