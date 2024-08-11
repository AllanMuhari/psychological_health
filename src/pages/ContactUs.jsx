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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8503520894387!2d36.8224386!3d-1.2621193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f171bdb71cc6b%3A0x645feec039f44849!2s3rd%20Park%20Hospital!5e0!3m2!1sen!2sde!4v1722962836189!5m2!1sen!2sde"
              width="500"
              height="450"
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" 
            ></iframe>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactUs;
