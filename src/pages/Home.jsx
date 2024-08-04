import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from "../components/Header";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import backgroundImage from "../assets/background.jpg";
import serviceImage1 from "../assets/service1.jpg";
import serviceImage2 from "../assets/service2.jpg";
import serviceImage3 from "../assets/service3.jpg";
import serviceImage4 from "../assets/service4.jpg";
import testimonialImage1 from "../assets/testimonial1.jpg";
import testimonialImage2 from "../assets/testimonial2.jpg";
import testimonialImage3 from "../assets/testimonial3.jpg";
import testimonialImage4 from "../assets/testimonial4.jpg";
import ContactForm from "../components/ContactForm";

const clients = [
  "Retirement Benefits Authority",
  "Public Service Commission",
  "KEMSA",
  "CMA",
  "IRA",
  "Church Commissioner of Kenya (CCK)",
  "Anglican Church of Kenya",
  "National Intelligence Service",
  "Fairtrade Africa",
  "KIPPRA",
  "KICC",
  "KPA",
  "MTRH",
  "VIVO Energy",
  "KEBS",
  "KISE",
  "KENGEN",
  "Panalpina",
  "Kenya Hotel and Caterers Association",
  "WOW Beverages",
  "Sports Stadia",
  "Utalii Hotel",
  "Kenya Forestry Research Institute",
  "Unilever Tea Kericho",
  "NHIF",
  "DT Dobie",
  "KURA",
  "Eldoret Water and Sewerage Company",
  "National Housing Corporation",
  "Kenya Revenue Authority",
  "National Irrigation Board",
  "Mombasa Water Supply and Sanitation Company Limited",
  "Kenya Airways",
  "ICPAK",
  "Britam Insurance Company",
  "Mediamax",
  "National Oil Corporation of Kenya (NOCK)",
  "KENHA (Cheptiret-Baraton-Kimondi Road)",
  "James Finlay’s (K) Ltd",
  "Agro-Chemical & Food Company (ACFC)",
  "Brand Kenya Board",
  "Barclays Bank",
  "Kimfay",
  "Kenya Dairy Board",
  "KETRACO",
  "Nzoia Sugar",
  "Posta Kenya",
  "Tourism Fund",
  "HELB",
  "ICEA Lion",
  "Serena Hotels",
  "APA",
  "Jubilee",
  "ICIPE",
  "Fairtrade Africa",
];

const testimonials = [
  {
    name: "Jane Doe",
    comment:
      "The individual counseling I received was life-changing. I feel more empowered and in control of my life.",
    image: testimonialImage1,
  },
  {
    name: "John Smith",
    comment:
      "Group counseling was a great experience. It was comforting to share and learn from others in similar situations.",
    image: testimonialImage2,
  },
  {
    name: "Emily Johnson",
    comment:
      "Teletherapy provided me with the support I needed from the comfort of my home. Highly recommended!",
    image: testimonialImage3,
  },
  {
    name: "Michael Brown",
    comment:
      "Family counseling helped us resolve long-standing issues and improve our communication. We’re grateful for the guidance.",
    image: testimonialImage4,
  },
];

const Home = () => {
  return (
    <>
      <Header />
      <main>
        {/* Welcome Section */}
        <section
          className="text-center my-8 bg-cover bg-center flex items-center justify-center w-full"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            height: "800px",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <div className="bg-black bg-opacity-60 p-10 rounded-lg flex justify-center items-center flex-col w-full max-w-4xl mx-auto">
            <h1 className="text-5xl font-extrabold text-white mb-6">
              Welcome to Psychological Health Services
            </h1>
            <p className="mt-4 text-lg text-white leading-relaxed max-w-3xl mx-auto">
              Psychological Health Services is one of the leading institutions
              in the provision of preventive health education through
              psychotherapy, training, research, and policy advisory services.
              It comprises an organization of highly skilled professionals with
              decades of ascertained expertise.
            </p>
            <p className="mt-4 text-lg text-white leading-relaxed max-w-3xl mx-auto">
              We offer a unique approach towards establishing excellence and
              competence in our services by ensuring we offer only the best. Our
              services focus on mental health, which is a crucial part of our
              health today. Our trainings focus on improving individual
              well-being so that one functions better and realizes their
              potential.
            </p>
          </div>
        </section>

        {/* Highlighted Services Section */}
        <section className="container mx-auto my-16 px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

          {/* Service 1 */}
          <div className="flex flex-col md:flex-row items-center mb-12">
            <img
              src={serviceImage1}
              alt="Service 1"
              className="w-full md:w-1/2 h-auto object-cover rounded-lg mb-6 md:mb-0"
            />
            <div className="md:ml-8">
              <h3 className="text-2xl font-bold mb-4">Individual Counseling</h3>
              <p className="text-lg">
                Discover a safe space to explore your feelings, navigate through
                challenging memories, and identify areas in your life you wish
                to change. Our individual counseling sessions are tailored to
                help you set and achieve personal goals, empowering you to take
                control of your mental health journey.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center mb-12">
            <img
              src={serviceImage2}
              alt="Service 2"
              className="w-full md:w-1/2 h-auto object-cover rounded-lg mb-6 md:mb-0"
            />
            <div className="md:mr-8">
              <h3 className="text-2xl font-bold mb-4">Group Counseling</h3>
              <p className="text-lg">
                You don't have to go through it alone. Our group counseling
                sessions bring people together, fostering a community of support
                and understanding. Whether you’re dealing with feelings of
                isolation, depression, or behavioral issues, these sessions
                offer a unique opportunity to connect and heal collectively.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="flex flex-col md:flex-row items-center mb-12">
            <img
              src={serviceImage3}
              alt="Service 3"
              className="w-full md:w-1/2 h-auto object-cover rounded-lg mb-6 md:mb-0"
            />
            <div className="md:ml-8">
              <h3 className="text-2xl font-bold mb-4">Teletherapy</h3>
              <p className="text-lg">
                Get the support you need, wherever you are. With our teletherapy
                services, you can access professional mental health care from
                the comfort of your own space, ensuring that help is always
                within reach.
              </p>
            </div>
          </div>

          {/* Service 4 */}
          <div className="flex flex-col md:flex-row-reverse items-center">
            <img
              src={serviceImage4}
              alt="Service 4"
              className="w-full md:w-1/2 h-[20rem] object-cover rounded-lg mb-6 md:mb-0"
            />
            <div className="md:mr-8">
              <h3 className="text-2xl font-bold mb-4">
                Family/Couples Counseling
              </h3>
              <p className="text-lg">
                Strengthen your relationships with professional guidance. Our
                family and couples counseling sessions provide a safe
                environment to improve communication, resolve conflicts, and
                build stronger, healthier relationships.
              </p>
            </div>
          </div>
        </section>

        {/* Clients Carousel Section */}
        <section className="container mx-auto py-16 px-4 bg-gray-50">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our Clients and Partners
          </h2>
          <div className="mx-auto p-6 bg-white rounded-lg shadow-xl w-full h-80 md:w-3/4 lg:w-2/3">
            <Carousel
              showThumbs={false}
              infiniteLoop
              autoPlay
              interval={3000}
              showStatus={false}
              className="rounded-lg overflow-hidden h-full">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="flex items-center justify-start p-6 bg-gray-100 h-full rounded-lg">
                  <img
                    src={serviceImage3}
                    alt="Client"
                    className="w-32 h-32 object-cover rounded-full border border-gray-300"
                  />
                  <p className="ml-6 text-lg font-semibold text-gray-700 flex-grow">
                    {client}
                  </p>
                </div>
              ))}
            </Carousel>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="mx-auto p-6 bg-white rounded-lg shadow-xl w-full md:w-3/4 lg:w-2/3">
            <Carousel
              showThumbs={false}
              infiniteLoop
              autoPlay
              interval={5000}
              showStatus={false}
              className="rounded-lg overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-6 bg-gray-100 rounded-lg">
                  <div className="w-32 h-32 flex items-center justify-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover rounded-full border border-gray-300"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-lg italic text-gray-600 mb-4">
                      "{testimonial.comment}"
                    </p>
                    <p className="text-lg font-semibold text-gray-800">
                      - {testimonial.name}
                    </p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </section>
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
      </main>
      <CallToAction />
      <Footer />
    </>
  );
};

export default Home;
