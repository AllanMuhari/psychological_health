import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from "../components/Header";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <section className="text-center my-8">
          <h1 className="text-3xl font-bold">
            Welcome to Psychological Health Services
          </h1>
          <p className="mt-4 text-lg leading-relaxed">
            Psychological Health Services is one of the leading institutions in
            the provision of preventive health education through psychotherapy,
            training, research, and policy advisory services.
          </p>
        </section>

        {/* Clients Carousel Section */}
        <section className="my-8">
          <h2 className="text-2xl font-bold text-center mb-6">
            Our Clients and Partners
          </h2>
          <div className="mx-auto p-4 bg-white rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/2">
            <Carousel
              showThumbs={false}
              infiniteLoop
              autoPlay
              interval={3000}
              showStatus={false}
              className="rounded-lg overflow-hidden">
              <div className="flex items-center justify-center">
                <img
                  src="https://via.placeholder.com/150?text=Client+1"
                  alt="Client 1"
                  className="max-h-48"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://via.placeholder.com/150?text=Client+2"
                  alt="Client 2"
                  className="max-h-48"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://via.placeholder.com/150?text=Client+3"
                  alt="Client 3"
                  className="max-h-48"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://via.placeholder.com/150?text=Client+4"
                  alt="Client 4"
                  className="max-h-48"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://via.placeholder.com/150?text=Client+5"
                  alt="Client 5"
                  className="max-h-48"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://via.placeholder.com/150?text=Client+6"
                  alt="Client 6"
                  className="max-h-48"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://via.placeholder.com/150?text=Client+7"
                  alt="Client 7"
                  className="max-h-48"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://via.placeholder.com/150?text=Client+8"
                  alt="Client 8"
                  className="max-h-48"
                />
              </div>
            </Carousel>
          </div>
        </section>
      </main>
      <CallToAction />
      <Footer />
    </>
  );
};

export default Home;
