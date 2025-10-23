import React, { useState, useEffect } from 'react';
import { Award, Zap, Target, TrendingUp } from 'lucide-react';

export default function AboutSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  

  const achievements = [
    { label: '30+', text: 'Years of Experience', color: 'from-cyan-400 to-blue-500' },
    { label: '1000+', text: 'Projects Delivered', color: 'from-blue-400 to-purple-500' },
    { label: '50+', text: 'Team Members', color: 'from-purple-400 to-pink-500' },
    { label: '100%', text: 'Client Satisfaction', color: 'from-pink-400 to-red-500' }
  ];

  const expertise = [
    'Digital Transformation',
    'Cloud Architecture',
    'AI & Machine Learning',
    'Healthcare Tech',
    'EdTech Solutions',
    'Enterprise Solutions',
    'Team Leadership',
    'Innovation Strategy'
  ];

  return (
    <div className="w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center px-4 py-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Main Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black mb-2 tracking-tight">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h1>
            <p className="text-2xl text-cyan-300 font-light">Three Decades of Digital Excellence</p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-5">
            {/* Left - Story with Icons */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-white mb-6">My Journey</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  With over three decades of transformative experience in IT and Digital Innovation, I've built a career on solving complex challenges and creating meaningful impact.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed">
                  From revolutionizing healthcare delivery to empowering education for thousands of children, every project represents a commitment to excellence and social responsibility.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="space-y-3">
                {[
                  'Leading Mohs10 Technologies with innovative solutions',
                  'Pioneering digital transformation globally',
                  'Building teams that drive technological excellence',
                  'Committed to sustainable growth and social impact'
                ].map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition">
                    <div className="text-cyan-400 mt-1">✓</div>
                    <p className="text-gray-300">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Experience Circle */}
            <div className="flex justify-center items-center">
              <div className="relative w-80 h-80">
                {/* Rotating Background Circles */}
                <div className="absolute inset-0 rounded-full border-2 border-cyan-500/30 animate-spin" style={{ animationDuration: '20s' }}></div>
                <div className="absolute inset-8 rounded-full border-2 border-blue-500/30 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
                
                {/* Center Content */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-sm flex flex-col items-center justify-center border border-cyan-400/50">
                  <div className="text-center">
                    <div className="text-7xl font-black bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent mb-2">
                      30+
                    </div>
                    <p className="text-lg font-semibold text-cyan-300">Years of Innovation</p>
                    <p className="text-sm text-gray-300 mt-2">Transforming Industries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     

      {/* Stats Section */}
      <div className="py-1 px-0">
        <div className="max-w-6xl mx-auto">
          {/* <h2 className="text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Impact & Achievement
            </span>
          </h2> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((stat, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-xl p-8 bg-gradient-to-br from-slate-800 to-slate-700 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                <div className="relative z-10">
                  <div className={`text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3`}>
                    {stat.label}
                  </div>
                  <p className="text-gray-300 font-semibold">{stat.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}