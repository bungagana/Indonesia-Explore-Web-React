import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Sejarah.css';

function Sejarah() {
  const [filter, setFilter] = useState('all');

  const articles = {
    all: [
      {
        id: 1,
        title: 'Proklamasi Kemerdekaan Indonesia',
        content: 'Proklamasi kemerdekaan Indonesia pada 17 Agustus 1945 adalah momen bersejarah yang menandai berakhirnya penjajahan di Indonesia...',
        imageUrl: 'https://1.bp.blogspot.com/-cB5Ye9mS6jg/X3PXW2ER25I/AAAAAAAENn0/tBl-Mpl1oZARMUIN2gdat8s7MqGHoPpBACLcBGAsYHQ/s1024/Proklamasi%2B17.8.1945.jpg',
        link: '/sejarah/proklamasi-kemerdekaan',
        category: 'sejarah',
      },
      {
        id: 2,
        title: 'Pertempuran Surabaya 1945',
        content: 'Pertempuran Surabaya adalah pertempuran besar antara pejuang Indonesia dan pasukan Inggris yang terjadi pada November 1945...',
        imageUrl: 'https://asset.kompas.com/crops/yz6SdRxyzhq7XEdDAkpVDkzH68g=/0x100:470x413/750x500/data/photo/2022/01/11/61dd74993ca51.jpg',
        link: '/sejarah/pertempuran-surabaya',
        category: 'sejarah',
      },
      {
        id: 3,
        title: 'Perjanjian Linggarjati',
        content: 'Perjanjian Linggarjati adalah perjanjian antara Indonesia dan Belanda yang disepakati pada 25 Maret 1947, untuk mengakui kedaulatan Indonesia...',
        imageUrl: 'https://th.bing.com/th/id/OIP.0J4MIUf0cP_cfV0FivufCwHaFL?rs=1&pid=ImgDetMain',
        link: '/sejarah/perjanjian-linggarjati',
        category: 'sejarah',
      },
      {
        id: 4,
        title: 'Serangan Umum 1 Maret 1949',
        content: 'Serangan Umum 1 Maret 1949 adalah serangan militer besar yang dilakukan oleh Tentara Nasional Indonesia (TNI) untuk merebut kembali Yogyakarta...',
        imageUrl: 'https://th.bing.com/th/id/OIP.CyKV0hpSTRfKW5j73zrspQHaE8?rs=1&pid=ImgDetMain',
        link: '/sejarah/serangan-umum',
        category: 'sejarah',
      },
      {
        id: 5,
        title: 'Pembentukan BPUPKI',
        content: 'BPUPKI (Badan Penyelidik Usaha Persiapan Kemerdekaan Indonesia) adalah badan yang dibentuk oleh pemerintah pendudukan Jepang untuk mempersiapkan kemerdekaan Indonesia...',
        imageUrl: 'https://jagad.id/wp-content/uploads/2020/12/3b.jpg',
        link: '/sejarah/pembentukan-bpupki',
        category: 'sejarah',
      },
      {
        id: 6,
        title: 'Perang Diponegoro',
        content: 'Perang Diponegoro (1825-1830) adalah perang besar antara Pangeran Diponegoro dari Yogyakarta dan pemerintah kolonial Belanda...',
        imageUrl: 'https://www.harapanrakyat.com/wp-content/uploads/2020/08/Biografi-Pangeran-Diponegoro.jpg',
        link: '/sejarah/perang-diponegoro',
        category: 'sejarah',
      },
      {
        id: 7,
        title: 'Tari Kecak',
        content: 'Tari Kecak adalah tarian tradisional Bali yang terkenal dengan gerakan tangan dan suara "cak" yang dilakukan oleh sekelompok penari...',
        imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.XkH0NkcD_Jo_lWJXG4vJ5wHaE8&pid=Api&P=0&h=180',
        link: '/budaya/tari-kecak',
        category: 'budaya',
      },
      {
        id: 8,
        title: 'Batik',
        content: 'Batik adalah seni pewarnaan kain dengan teknik mencanting dan meresap yang menghasilkan pola-pola khas pada kain, merupakan warisan budaya Indonesia...',
        imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.uUZvYBAtjC9iAaLWX8xsjgHaE7&pid=Api&P=0&h=180',
        link: '/budaya/batik',
        category: 'budaya',
      },
      {
        id: 9,
        title: 'Gamelan',
        content: 'Gamelan adalah ansambel musik tradisional Indonesia yang terdiri dari berbagai instrumen logam dan kayu, sering dimainkan dalam acara adat dan upacara...',
        imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.fg2pMu2ZwExwCJn2u39lngHaE9&pid=Api&P=0&h=180',
        link: '/budaya/gamelan',
        category: 'budaya',
      },
    ],
    sejarah: [
      // Filtered Sejarah articles
      {
        id: 1,
        title: 'Proklamasi Kemerdekaan Indonesia',
        content: 'Proklamasi kemerdekaan Indonesia pada 17 Agustus 1945 adalah momen bersejarah yang menandai berakhirnya penjajahan di Indonesia...',
        imageUrl: 'https://1.bp.blogspot.com/-cB5Ye9mS6jg/X3PXW2ER25I/AAAAAAAENn0/tBl-Mpl1oZARMUIN2gdat8s7MqGHoPpBACLcBGAsYHQ/s1024/Proklamasi%2B17.8.1945.jpg',
        link: '/sejarah/proklamasi-kemerdekaan',
        category: 'sejarah',
      },
      {
        id: 2,
        title: 'Pertempuran Surabaya 1945',
        content: 'Pertempuran Surabaya adalah pertempuran besar antara pejuang Indonesia dan pasukan Inggris yang terjadi pada November 1945...',
        imageUrl: 'https://asset.kompas.com/crops/yz6SdRxyzhq7XEdDAkpVDkzH68g=/0x100:470x413/750x500/data/photo/2022/01/11/61dd74993ca51.jpg',
        link: '/sejarah/pertempuran-surabaya',
        category: 'sejarah',
      },
      {
        id: 3,
        title: 'Perjanjian Linggarjati',
        content: 'Perjanjian Linggarjati adalah perjanjian antara Indonesia dan Belanda yang disepakati pada 25 Maret 1947, untuk mengakui kedaulatan Indonesia...',
        imageUrl: 'https://th.bing.com/th/id/OIP.0J4MIUf0cP_cfV0FivufCwHaFL?rs=1&pid=ImgDetMain',
        link: '/sejarah/perjanjian-linggarjati',
        category: 'sejarah',
      },
      {
        id: 4,
        title: 'Serangan Umum 1 Maret 1949',
        content: 'Serangan Umum 1 Maret 1949 adalah serangan militer besar yang dilakukan oleh Tentara Nasional Indonesia (TNI) untuk merebut kembali Yogyakarta...',
        imageUrl: 'https://th.bing.com/th/id/OIP.CyKV0hpSTRfKW5j73zrspQHaE8?rs=1&pid=ImgDetMain',
        link: '/sejarah/serangan-umum',
        category: 'sejarah',
      },
      {
        id: 5,
        title: 'Pembentukan BPUPKI',
        content: 'BPUPKI (Badan Penyelidik Usaha Persiapan Kemerdekaan Indonesia) adalah badan yang dibentuk oleh pemerintah pendudukan Jepang untuk mempersiapkan kemerdekaan Indonesia...',
        imageUrl: 'https://jagad.id/wp-content/uploads/2020/12/3b.jpg',
        link: '/sejarah/pembentukan-bpupki',
        category: 'sejarah',
      },
      {
        id: 6,
        title: 'Perang Diponegoro',
        content: 'Perang Diponegoro (1825-1830) adalah perang besar antara Pangeran Diponegoro dari Yogyakarta dan pemerintah kolonial Belanda...',
        imageUrl: 'https://www.harapanrakyat.com/wp-content/uploads/2020/08/Biografi-Pangeran-Diponegoro.jpg',
        link: '/sejarah/perang-diponegoro',
        category: 'sejarah',
      },
    ],
    budaya: [
      // Filtered Budaya articles
      {
        id: 7,
        title: 'Tari Kecak',
        content: 'Tari Kecak adalah tarian tradisional Bali yang terkenal dengan gerakan tangan dan suara "cak" yang dilakukan oleh sekelompok penari...',
        imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.XkH0NkcD_Jo_lWJXG4vJ5wHaE8&pid=Api&P=0&h=180',
        link: '/budaya/tari-kecak',
        category: 'budaya',
      },
      {
        id: 8,
        title: 'Batik',
        content: 'Batik adalah seni pewarnaan kain dengan teknik mencanting dan meresap yang menghasilkan pola-pola khas pada kain, merupakan warisan budaya Indonesia...',
        imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.uUZvYBAtjC9iAaLWX8xsjgHaE7&pid=Api&P=0&h=180',
        link: '/budaya/batik',
        category: 'budaya',
      },
      {
        id: 9,
        title: 'Gamelan',
        content: 'Gamelan adalah ansambel musik tradisional Indonesia yang terdiri dari berbagai instrumen logam dan kayu, sering dimainkan dalam acara adat dan upacara...',
        imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.fg2pMu2ZwExwCJn2u39lngHaE9&pid=Api&P=0&h=180',
        link: '/budaya/gamelan',
        category: 'budaya',
      },
    ],
  };

  const filteredArticles = filter === 'all' ? articles.all : articles[filter];

  return (
    <div className="sejarah-container">
      <h1>Sejarah dan Budaya Indonesia</h1>
      <div className="filter-buttons">
        <button onClick={() => setFilter('all')} className={`filter-button ${filter === 'all' ? 'active' : ''}`}>Semua</button>
        <button onClick={() => setFilter('sejarah')} className={`filter-button ${filter === 'sejarah' ? 'active' : ''}`}>Sejarah</button>
        <button onClick={() => setFilter('budaya')} className={`filter-button ${filter === 'budaya' ? 'active' : ''}`}>Budaya</button>
      </div>
      <div className="cards-container">
        {filteredArticles.map((article) => (
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
