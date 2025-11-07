import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-blue-600">MonPortfolio</h1>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Accueil</Link>
          <Link to="/projects" className="text-gray-700 hover:text-blue-600">Projets</Link>
          <Link to="/skills" className="text-gray-700 hover:text-blue-600">Compétences</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
        </nav>

        {/* Menu mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      {/* Dropdown mobile */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md flex flex-col items-center space-y-4 py-4">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600">Accueil</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600">Projets</Link>
          <Link to="/skills" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600">Compétences</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600">Contact</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
