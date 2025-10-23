// App.jsx
import React from "react";
import Navbar from "./components/Navbar"; 
import HeroSection from "./components/HeroSection";
import AboutSection from './components/AboutSection';
import Gallery from './components/GallerySection';
import ExperienceSection from "./components/ExperienceSection";
import TravelSection from './components/TravelSection.jsx';
import ContactSection from './components/ContactSection.jsx';

const App = () => (
  <div>
    <Navbar />
    <HeroSection/>
    <AboutSection/>
    <Gallery/>
    <ExperienceSection/>
    <TravelSection/>
    <ContactSection/>
  </div>
);

export default App;
