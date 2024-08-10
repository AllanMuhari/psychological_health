import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Resources from "./pages/Resources";
import ContactUs from "./pages/ContactUs";
import ClinicalServices from "./pages/ClinicalServices";
import TrainingServices from "./pages/TrainingServices";
import ResearchServices from "./pages/ResearchServices";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/services/clinical" element={<ClinicalServices />} />
        <Route path="/services/training" element={<TrainingServices />} />
        <Route path="/services/research" element={<ResearchServices />} />
      </Routes>
    </Router>
  );
}

export default App;
