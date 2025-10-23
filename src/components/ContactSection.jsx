import React, { useState } from 'react';
import { Linkedin, Twitter, Calendar } from 'lucide-react';

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
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-cyan-500 mb-12">
          Let's Connect
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Get in Touch Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-6">
              Have a project in mind or want to discuss technology and innovation? I'd love to hear from you.
            </p>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  👤 Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ✉️ Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  💬 Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or idea..."
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none resize-none"
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-md transition duration-200 flex items-center justify-center gap-2"
              >
                Send Message
                <span>✈️</span>
              </button>
            </div>
          </div>

          {/* Connect Section */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Connect
              </h2>

              <div className="space-y-4">

                <button className="w-full flex items-center justify-center gap-3 p-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-md transition duration-200">
                  <Calendar className="w-5 h-5" />
                  Schedule a Call
                </button>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg shadow-sm text-white">
              <h3 className="text-xl font-bold mb-3">
                Let's Build Together
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Whether you're looking to transform your business, need guidance on digital strategy, or want to collaborate on innovative solutions, I'm here to help turn your vision into reality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}