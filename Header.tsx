import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-black/90 text-white z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-red-500">AYMEN.dev</h1>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-red-500 transition-colors">Home</a>
            <a href="#about" className="hover:text-red-500 transition-colors">About</a>
            <a href="#skills" className="hover:text-red-500 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-red-500 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-red-500 transition-colors">Contact</a>
          </div>

          <div className="hidden md:flex space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 hover:text-red-500 transition-colors" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 hover:text-red-500 transition-colors" />
            </a>
            <a href="mailto:contact@example.com">
              <Mail className="w-6 h-6 hover:text-red-500 transition-colors" />
            </a>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#home" className="block hover:text-red-500 transition-colors">Home</a>
            <a href="#about" className="block hover:text-red-500 transition-colors">About</a>
            <a href="#skills" className="block hover:text-red-500 transition-colors">Skills</a>
            <a href="#projects" className="block hover:text-red-500 transition-colors">Projects</a>
            <a href="#contact" className="block hover:text-red-500 transition-colors">Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;