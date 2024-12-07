import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-black flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="wave"></div>
      </div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm <span className="text-red-500">Aymen</span> Boumezbeur
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Fullstack Developer & Volleyball Player
          </p>
          <div className="flex space-x-4">
            <a 
              href="#contact"
              className="bg-red-500 text-white px-8 py-3 rounded-full hover:bg-red-600 transition-colors"
            >
              Contact Me
            </a>
            <a 
              href="#about"
              className="border border-red-500 text-red-500 px-8 py-3 rounded-full hover:bg-red-500 hover:text-white transition-all"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-8 h-8 text-red-500" />
      </div>
    </section>
  );
};

export default Hero;