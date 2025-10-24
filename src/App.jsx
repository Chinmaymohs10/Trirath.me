// App.jsx
import React from "react";
import Navbar from "./components/Navbar"; 
import HeroSection from "./components/HeroSection";
import AboutSection from './components/AboutSection';
import Gallery from './components/GallerySection';
import ExperienceSection from "./components/ExperienceSection";
import TravelSection from './components/TravelSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from "./components/Footer.jsx";
import ScrollToTopButton from "./components/ScrollToTopButton.jsx";

const App = () => (
  <div>
    <Navbar />
    <HeroSection/>
    <AboutSection/>
    <Gallery/>
    <ExperienceSection/>
    <TravelSection/>
    <ContactSection/>
    <Footer/>
    <ScrollToTopButton /> 
  </div>
);

export default App;
