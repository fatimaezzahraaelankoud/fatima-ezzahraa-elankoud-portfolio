import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer.jsx';

const Home = () => <div className="pt-24 text-center">Bienvenue sur mon portfolio 👋</div>;
const Projects = () => <div className="pt-24 text-center">Mes projets</div>;
const Skills = () => <div className="pt-24 text-center">Mes compétences</div>;
const Contact = () => <div className="pt-24 text-center">Contactez-moi</div>;

function App() {
  return (
    <Router>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

