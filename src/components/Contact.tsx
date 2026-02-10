import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Contact = () => {
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

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'harkprasanth@gmail.com',
      href: 'mailto:harkprasanth@gmail.com',
      color: 'from-blue-600 to-teal-600',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 97500 34897',
      href: 'tel:+919750034897',
      color: 'from-teal-600 to-blue-600',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Getticheviyur, Erode',
      href: null,
      color: 'from-blue-500 to-teal-500',
    },
    {
      icon: ExternalLink,
      label: 'Portfolio',
      value: 'honprasanths.netify.app',
      href: 'https://honprasanths.netify.app',
      color: 'from-teal-500 to-blue-500',
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-4 bg-white/50">
      <div className="max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-slate-800">
            Get In Touch
          </h2>

          <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((contact, index) => (
              contact.href ? (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${contact.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <contact.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium mb-1">{contact.label}</p>
                      <p className="text-slate-800 font-semibold">{contact.value}</p>
                    </div>
                  </div>
                </a>
              ) : (
                <div
                  key={index}
                  className={`bg-white rounded-2xl shadow-lg p-6 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${contact.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <contact.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium mb-1">{contact.label}</p>
                      <p className="text-slate-800 font-semibold">{contact.value}</p>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl shadow-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Let's Create Something Amazing Together
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Ready to bring your ideas to life with beautiful design
            </p>
            <a
              href="mailto:harkprasanth@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <Mail size={20} />
              Send Me an Email
            </a>
          </div>
        </div>
      </div>

      <footer className="mt-20 text-center text-slate-600">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mb-8"></div>
        <p className="text-sm">
          Designed & Built by Hariprasanth S
        </p>
        <p className="text-sm mt-2">
          2024 - All rights reserved
        </p>
      </footer>
    </section>
  );
};

export default Contact;
