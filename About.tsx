import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          About <span className="text-red-500">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg">
              I'm a passionate Fullstack Developer based in El-Milia, Jijel, Algeria. Currently pursuing my third year in Computer Science, I bring creativity and technical expertise to every project I undertake.
            </p>
            <p className="text-gray-300 text-lg">
              Beyond coding, I'm deeply involved in sports and leadership roles. As a volleyball player for OMK EL-MILIA and the Vice President of ESPERANZA CLUB, I've learned valuable lessons in teamwork and management that I apply to my development work.
            </p>
            <div className="grid grid-cols-2 gap-4 text-gray-300">
              <div>
                <p className="font-bold text-red-500">Age</p>
                <p>20 Years</p>
              </div>
              <div>
                <p className="font-bold text-red-500">Location</p>
                <p>El-Milia, Jijel, Algeria</p>
              </div>
              <div>
                <p className="font-bold text-red-500">Study</p>
                <p>Computer Science</p>
              </div>
              <div>
                <p className="font-bold text-red-500">Role</p>
                <p>Fullstack Developer</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Developer workspace"
              className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-red-500 rounded-full z-[-1]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;