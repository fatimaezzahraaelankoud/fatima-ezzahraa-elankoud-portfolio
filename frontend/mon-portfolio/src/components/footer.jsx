import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-sm">© {new Date().getFullYear()} MonPortfolio. Tous droits réservés.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://github.com/ton-github" className="hover:text-blue-400">GitHub</a>
          <a href="https://linkedin.com/in/ton-linkedin" className="hover:text-blue-400">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
