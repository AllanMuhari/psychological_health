import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const ContactUs = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            <ContactForm />
          </div>

          <div className="w-full md:w-1/2 m-auto">
            <iframe
              className="w-full h-80 rounded-lg shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127649.42611620306!2d36.82194622642484!3d-1.292065851959406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1f5e0c89144b%3A0x24a6d4761ae04c34!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1682045155571!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"></iframe>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactUs;
