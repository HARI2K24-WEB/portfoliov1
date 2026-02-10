import { useEffect, useRef, useState } from 'react';
import { Plane, Globe, Truck } from 'lucide-react';

const Projects = () => {
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

  const projects = [
    {
      title: 'Revive Holidays',
      subtitle: 'Travel App',
      description: 'Designed a clean and intuitive travel app UI to simplify trip planning and improve user experience.',
      icon: Plane,
      color: 'from-blue-600 to-teal-600',
      status: 'Completed',
      statusColor: 'bg-teal-100 text-teal-700',
    },
    {
      title: 'Webastic.in',
      subtitle: 'Startup Website',
      description: 'Designed and developed a modern, responsive startup website with a focus on clean UI and usability.',
      icon: Globe,
      color: 'from-teal-600 to-blue-600',
      status: 'Completed',
      statusColor: 'bg-teal-100 text-teal-700',
    },
    {
      title: 'Transport Business Website',
      subtitle: 'Business Website',
      description: 'Currently designing UI/UX for a transport business website with responsive user flow optimization.',
      icon: Truck,
      color: 'from-blue-500 to-teal-500',
      status: 'Ongoing',
      statusColor: 'bg-blue-100 text-blue-700',
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-slate-800">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  <project.icon className="text-white" size={80} strokeWidth={1.5} />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-500">{project.subtitle}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${project.statusColor}`}>
                      {project.status}
                    </span>
                  </div>

                  <p className="text-slate-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
