import { useEffect, useRef, useState } from 'react';
import { Wrench, Palette, Code } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Tools',
      icon: Wrench,
      skills: ['VS Code', 'Figma', 'Git & GitHub'],
      color: 'from-blue-600 to-blue-400',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700',
    },
    {
      title: 'Design Skills',
      icon: Palette,
      skills: ['UI/UX Design', 'User Research (Basic)', 'Wireframing & Prototyping', 'Responsive Design'],
      color: 'from-teal-600 to-teal-400',
      bgColor: 'bg-teal-50',
      textColor: 'text-teal-700',
    },
    {
      title: 'Frontend (Basic)',
      icon: Code,
      skills: ['HTML', 'CSS', 'Bootstrap'],
      color: 'from-slate-600 to-slate-400',
      bgColor: 'bg-slate-50',
      textColor: 'text-slate-700',
    },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-slate-800">
            Skills
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <category.icon className="text-white" size={32} />
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-6">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-4 py-2 ${category.bgColor} ${category.textColor} rounded-full text-sm font-medium transition-transform duration-200 hover:scale-105`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
