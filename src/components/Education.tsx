import { useEffect, useRef, useState } from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';

const Education = () => {
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

  const education = [
    {
      icon: GraduationCap,
      degree: 'M.Tech Computer Science and Engineering',
      institution: 'Erode Sengunthar Engineering College, Perundurai',
      duration: '2022 - 2027',
      score: 'CGPA: 6.34 (Upto 5th Semester)',
      color: 'from-blue-600 to-teal-600',
    },
    {
      icon: BookOpen,
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Government Model Higher Secondary School, Getticheviyur',
      duration: '2020 - 2022',
      score: '54.5%',
      color: 'from-teal-600 to-blue-600',
    },
    {
      icon: BookOpen,
      degree: 'Secondary School Leaving Certificate (SSLC)',
      institution: 'Government Model Higher Secondary School, Getticheviyur',
      duration: '2019 - 2020',
      score: '67.2%',
      color: 'from-blue-500 to-teal-500',
    },
  ];

  return (
    <section id="education" ref={sectionRef} className="py-20 px-4 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-slate-800">
            Education
          </h2>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${edu.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <edu.icon className="text-white" size={32} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-slate-600 mb-2">{edu.institution}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="px-4 py-1 bg-blue-50 text-blue-700 rounded-full font-medium">
                        {edu.duration}
                      </span>
                      <span className="px-4 py-1 bg-teal-50 text-teal-700 rounded-full font-medium">
                        {edu.score}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
