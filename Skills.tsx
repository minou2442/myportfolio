import React from 'react';

const SkillCard = ({ name, icon, level }: { name: string; icon: string; level: number }) => (
  <div className="bg-gray-800 p-6 rounded-lg transform hover:scale-105 transition-all">
    <img src={icon} alt={name} className="w-16 h-16 mx-auto mb-4" />
    <h3 className="text-xl font-semibold text-white text-center mb-2">{name}</h3>
    <div className="w-full bg-gray-700 rounded-full h-2.5">
      <div 
        className="bg-red-500 h-2.5 rounded-full"
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

const Skills = () => {
  const skills = [
    { name: 'Angular', icon: '/angular.svg', level: 90 },
    { name: 'Next.js', icon: '/nextjs.svg', level: 85 },
    { name: 'Vue.js', icon: '/vue.svg', level: 80 },
    { name: 'React', icon: '/react.svg', level: 90 },
    { name: 'TypeScript', icon: '/typescript.svg', level: 85 },
    { name: 'PHP', icon: '/php.svg', level: 75 },
    { name: 'Python', icon: '/python.svg', level: 70 },
    { name: 'JavaScript', icon: '/javascript.svg', level: 90 },
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          My <span className="text-red-500">Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;