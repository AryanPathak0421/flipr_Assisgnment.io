import React from "react";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import OfferingsSection from "../components/OfferingsSection.jsx";
import StatsSection from "../components/StatsSection.jsx";
import CTASection from "../components/CTASection.jsx";
import Footer from "../components/Footer.jsx";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-lightBg flex flex-col">
      <Navbar />
      <Hero />
      <OfferingsSection />
      <StatsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default LandingPage