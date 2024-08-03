import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ClientsCarousel = () => {
  return (
    <div className="p-4 bg-gray-100">
      <h2 className="text-2xl font-bold my-6 text-center">Our Clients</h2>
      <Carousel
        infiniteLoop
        autoPlay
        showThumbs={false}
        showStatus={false}
        transitionTime={500}
        interval={3000}
        className="client-carousel">
        <div>
          <img
            src="assets/retirement-benefits-authority.jpeg"
            alt="Retirement Benefits Authority"
          />
          <p className="legend">Retirement Benefits Authority</p>
        </div>
        <div>
          <img
            src="assets/public-service-commission.jpeg"
            alt="Public Service Commission"
          />
          <p className="legend">Public Service Commission</p>
        </div>
        <div>
          <img src="assets/kemsa.jpeg" alt="KEMSA" />
          <p className="legend">KEMSA</p>
        </div>
        <div>
          <img src="assets/cma.jpeg" alt="CMA" />
          <p className="legend">CMA</p>
        </div>
        <div>
          <img src="assets/ira.jpeg" alt="IRA" />
          <p className="legend">IRA</p>
        </div>
      </Carousel>
    </div>
  );
};

export default ClientsCarousel;
