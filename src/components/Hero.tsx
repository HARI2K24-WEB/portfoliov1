import { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mb-6 inline-block">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-2xl animate-float">
              HS
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-teal-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
            HARIPRASANTH S
          </h1>

          <p className="text-2xl md:text-3xl text-slate-600 mb-8 font-light">
            UI/UX Designer
          </p>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Crafting beautiful, user-friendly interfaces with a passion for solving real-world problems through thoughtful design
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="mailto:harkprasanth@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Mail size={20} className="text-blue-600" />
              <span className="text-slate-700">harkprasanth@gmail.com</span>
            </a>
            <a href="tel:+919750034897" className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Phone size={20} className="text-teal-600" />
              <span className="text-slate-700">+91 97500 34897</span>
            </a>
            <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg">
              <MapPin size={20} className="text-slate-600" />
              <span className="text-slate-700">Erode, Tamil Nadu</span>
            </div>
          </div>

          <a
            href="https://honprasanths.netify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            View My Work
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
