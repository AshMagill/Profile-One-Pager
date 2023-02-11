import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import AboutContainer from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, SetIsOpen] = useState(false);

  const toggle = () => {
    SetIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <AboutContainer />
      <FeaturesSection />
      <ServicesSection />
      <Footer />
    </>
  );
};

export default Home;
