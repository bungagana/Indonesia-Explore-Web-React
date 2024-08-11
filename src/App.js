import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import StoryCarousel from './components/StoryCarousel';
import HistoryCultureSection from './components/HistoryCultureSection';
import Chatbot from './components/Chatbot';
import Game from './components/Game';
import Quiz from './components/Quiz';
import Sejarah from './components/Sejarah';
import Guide from './components/Guide';
import Footer from './components/Footer';
import ArticleDetail from './components/Detail';
import './App.css';

function App() {
  const fullArticle = {
    id: 1,
    title: 'Proklamasi Kemerdekaan Indonesia',
    content: `
      Pada tanggal 17 Agustus 1945, Soekarno dan Mohammad Hatta, atas nama bangsa Indonesia, 
      memproklamasikan kemerdekaan Indonesia. Peristiwa ini menandai berakhirnya penjajahan 
      di Indonesia yang telah berlangsung selama lebih dari tiga setengah abad. Proklamasi ini 
      dibacakan oleh Soekarno di kediamannya, Jalan Pegangsaan Timur No. 56, Jakarta. 
      
      Proklamasi ini merupakan puncak dari perjuangan panjang rakyat Indonesia dalam 
      merebut kemerdekaan dari tangan penjajah. Sejak saat itu, Indonesia secara de facto 
      menjadi negara yang merdeka dan berdaulat.
      
      Setelah proklamasi, perjuangan belum berhenti. Rakyat Indonesia terus berjuang untuk 
      mempertahankan kemerdekaan yang baru diraih, melawan berbagai tantangan dari dalam 
      dan luar negeri. Pertempuran-pertempuran besar terjadi di berbagai daerah, termasuk 
      Pertempuran Surabaya yang terkenal, di mana arek-arek Surabaya mempertahankan kota 
      mereka dari serangan pasukan sekutu.
      
      Kini, setiap tanggal 17 Agustus, rakyat Indonesia merayakan Hari Kemerdekaan untuk 
      mengenang jasa para pahlawan dan perjuangan bangsa dalam merebut kemerdekaan.
    `,
    imageUrl: 'https://1.bp.blogspot.com/-cB5Ye9mS6jg/X3PXW2ER25I/AAAAAAAENn0/tBl-Mpl1oZARMUIN2gdat8s7MqGHoPpBACLcBGAsYHQ/s1024/Proklamasi%2B17.8.1945.jpg',
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <main>  
          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <Hero />
                  <StoryCarousel />
                  <HistoryCultureSection />
                  <div className="sejarah-full-article">
                    <h2>{fullArticle.title}</h2>
                    <div className="full-article-container">
                      <img src={fullArticle.imageUrl} alt={fullArticle.title} className="full-article-image" />
                      <div className="full-article-content">
                        <p>{fullArticle.content}</p>
                      </div>
                    </div>
                    <Link to="/sejarah">
                      <button className="lihat-selengkapnya-btn">Lihat Selengkapnya</button>
                    </Link>
                  </div>
                  <Chatbot />
                </>
              } 
            />
            <Route path="/game" element={<Game />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/sejarah" element={<Sejarah />} />
            <Route path="/sejarah/:slug" element={<ArticleDetail />} />
            <Route path="/budaya/:slug" element={<ArticleDetail />} />
            <Route path="/guide" element={<Guide />} />
          </Routes>
        </main> 
        <Footer />
      </div>
    </Router>
  );
}

export default App;
