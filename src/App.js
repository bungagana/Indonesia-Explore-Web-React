import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import StoryCarousel from './components/StoryCarousel';
import HistoryCultureSection from './components/HistoryCultureSection';
import Chatbot from './components/Chatbot';
import Game from './components/Game';
import Quiz from './components/Quiz';
import Sejarah from './components/Sejarah';
import Footer from './components/Footer';
import ArticleDetail from './components/Detail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Hero />
                <StoryCarousel />
                <HistoryCultureSection />
                <Chatbot />
              </>
            } 
          />
          <Route path="/game" element={<Game />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/sejarah" element={<Sejarah />} />
          <Route path="/sejarah/:slug" element={<ArticleDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
