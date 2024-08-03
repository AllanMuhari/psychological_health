import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const ContactUs = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <ContactForm />
      </main>
      <Footer />
    </>
  );
};

export default ContactUs;
