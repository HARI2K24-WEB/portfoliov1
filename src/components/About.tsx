import { useEffect, useRef, useState } from 'react';

const About = () => {
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

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-slate-800">
            About Me
          </h2>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 hover:shadow-2xl transition-shadow duration-300">
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              UI/UX Designer with hands-on experience in designing user-friendly web and mobile interfaces using Figma.
              Skilled in wireframing, prototyping, and creating clean UI layouts with a strong focus on usability and user experience.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Passionate about solving real-world problems through design and collaborating with developers for smooth implementation.
              I believe in creating interfaces that not only look beautiful but also provide seamless user experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
