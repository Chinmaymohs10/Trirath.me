import React from 'react';
import { Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Tribikram Rath
              </span>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Technology leader with 30+ years of experience driving digital transformation and innovation. Passionate about building solutions that create real business value.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-cyan-500 text-gray-400 hover:text-white transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-cyan-500 text-gray-400 hover:text-white transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-cyan-500 text-gray-400 hover:text-white transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-cyan-500 text-gray-400 hover:text-white transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  About Me
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  Experience
                </a>
              </li>
              <li>
                <a href="#expertise" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  Expertise
                </a>
              </li>
              <li>
                <a href="#travel" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  Travel Journey
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:contact@example.com" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  contact@example.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  +91 (123) 456-7890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  Bhubaneswar, Odisha, India
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Tribikram Rath. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <p className="text-gray-500 text-sm text-center md:text-left">
              Designed by <b><a href="https://mohs10.io/">Mohs10 Technologies</a></b>
          </p>
          </div>
        </div>
      </div>
    </footer>
  );
}