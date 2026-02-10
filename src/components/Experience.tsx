import { useEffect, useRef, useState } from 'react';
import { Briefcase, Award } from 'lucide-react';

const Experience = () => {
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

  const internships = [
    {
      role: 'Web Development Intern',
      company: 'Nucaza Innovations Pvt. Ltd',
      description: 'Worked on basic frontend development and UI implementation.',
      color: 'from-blue-600 to-teal-600',
    },
    {
      role: 'Full Stack Web Development Intern',
      company: 'Duodev Technologies',
      description: 'Gained exposure to frontend and backend development concepts.',
      color: 'from-teal-600 to-blue-600',
    },
    {
      role: 'Cloud Computing Intern',
      company: 'Novitech R&D Pvt. Ltd, Coimbatore',
      description: 'Learned fundamentals of cloud services and deployment models.',
      color: 'from-blue-500 to-teal-500',
    },
  ];

  const activities = [
    'Participated in 48-hour Robotics Workshop - MIT Chennai',
    'Attended Web Development Workshop - Karpagam College',
    'Attended Cyber Security Workshop (Phishing Attacks) - SNS College',
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-20 px-4 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-slate-800">
            Experience
          </h2>

          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 flex items-center gap-3">
              <Briefcase className="text-blue-600" size={32} />
              Internships
            </h3>

            <div className="space-y-6">
              {internships.map((internship, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${internship.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <Briefcase className="text-white" size={24} />
                    </div>

                    <div className="flex-1">
                      <h4 className="text-xl md:text-2xl font-bold text-slate-800 mb-1">
                        {internship.role}
                      </h4>
                      <p className="text-lg text-blue-600 font-semibold mb-2">
                        {internship.company}
                      </p>
                      <p className="text-slate-600">
                        {internship.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 flex items-center gap-3">
              <Award className="text-teal-600" size={32} />
              Co-Curricular Activities
            </h3>

            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-2xl transition-shadow duration-300">
              <ul className="space-y-4">
                {activities.map((activity, index) => (
                  <li
                    key={index}
                    className={`flex items-start gap-3 text-slate-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                    style={{ transitionDelay: `${(internships.length + index) * 150}ms` }}
                  >
                    <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mt-2"></div>
                    <span className="text-lg">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
