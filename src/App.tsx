import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import QuoteForm from './components/QuoteForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Collections from './pages/Collections';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Services />
            <Gallery />
            <QuoteForm />
            <Contact />
          </>
        } />
        <Route path="/collections" element={<Collections />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;