import React, { useState } from 'react';
import { Linkedin, Twitter, Calendar, Mail, Send } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to transform your digital vision into reality? I'm here to discuss innovative solutions and strategic partnerships.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Get in Touch Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Get in Touch
                </h2>
                <p className="text-gray-400 text-sm">Send me a message</p>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none text-white placeholder-gray-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none text-white placeholder-gray-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or idea..."
                  rows="5"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none text-white placeholder-gray-500 resize-none transition"
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/30"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Connect Section */}
          <div className="space-y-6">
            {/* Schedule Call Card */}
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-8 rounded-2xl shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Schedule a Call
                </h2>
              </div>
              <p className="text-white/90 mb-6 leading-relaxed">
                Book a consultation to discuss your technology needs, digital transformation strategy, or potential collaboration opportunities.
              </p>
              <button className="w-full bg-white hover:bg-gray-100 text-cyan-600 font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center gap-2 shadow-lg">
                <Calendar className="w-5 h-5" />
                Book Appointment
              </button>
            </div>

            {/* Info Card */}
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-3">
                Let's Build Something Great
              </h3>
              <p className="text-gray-400 leading-relaxed">
                With over 30 years of experience in technology leadership, I'm passionate about helping organizations navigate digital transformation and build innovative solutions that drive real business value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}