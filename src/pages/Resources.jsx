import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaBookOpen, FaVideo, FaFileAlt } from "react-icons/fa";

import resource1 from "../assets/resource1.jpg";
import resource2 from "../assets/resource2.jpg";
import resource3 from "../assets/resource3.jpg";
import resource4 from "../assets/resource4.jpg";
import resource5 from "../assets/resource5.jpg";
import resource6 from "../assets/resource6.jpg";

const resources = {
  articles: [
    {
      title: "Mental Health Tips",
      url: "/resources/articles/mental-health-tips",
      image: resource1,
      description:
        "Discover valuable tips to maintain and improve your mental health.",
    },
    {
      title: "Stress Management",
      url: "/resources/articles/stress-management",
      image: resource2,
      description:
        "Learn effective strategies to manage and reduce stress in your daily life.",
    },
    {
      title: "Workplace Wellness",
      url: "/resources/articles/workplace-wellness",
      image: resource3,
      description:
        "Explore ways to promote wellness in the workplace for a healthier work environment.",
    },
  ],
  ebooks: [
    {
      title: "Self-Care Guide",
      url: "/resources/ebooks/self-care-guide",
      image: resource4,
      description:
        "A comprehensive guide to help you prioritize self-care in your life.",
    },
    {
      title: "Resilience Building",
      url: "/resources/ebooks/resilience-building",
      image: resource5,
      description:
        "Build resilience and learn how to bounce back from life’s challenges.",
    },
  ],
  webinars: [
    {
      title: "Mental Health Awareness",
      url: "/resources/webinars/mental-health-awareness",
      image: resource6,
      description:
        "Join our webinar to raise awareness about the importance of mental health.",
    },
    {
      title: "Stress Management Strategies",
      url: "/resources/webinars/stress-management-strategies",
      image: resource1,
      description:
        "Learn practical strategies for managing stress effectively in this webinar.",
    },
  ],
};

const ResourceCard = ({ icon, title, items }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
    <div className="flex items-center mb-4">
      {icon}
      <h2 className="text-xl font-bold ml-3">{title}</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item, index) => (
        <a
          key={index}
          href={item.url}
          className="block relative rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
          style={{ height: "250px" }}>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${item.image})` }}></div>
          <div className="absolute inset-0 bg-black bg-opacity-70 transition-opacity duration-200 hover:bg-opacity-50"></div>
          <div className="relative z-10 h-full flex flex-col justify-center text-center text-white p-4">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm">{item.description}</p>
          </div>
        </a>
      ))}
    </div>
  </div>
);

const Resources = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8">Resources</h1>

        <ResourceCard
          icon={<FaFileAlt className="text-green-500 text-4xl" />}
          title="Articles"
          items={resources.articles}
        />

        <ResourceCard
          icon={<FaBookOpen className="text-blue-500 text-4xl" />}
          title="E-books"
          items={resources.ebooks}
        />

        <ResourceCard
          icon={<FaVideo className="text-red-500 text-4xl" />}
          title="Webinars"
          items={resources.webinars}
        />
      </main>
      <Footer />
    </>
  );
};

export default Resources;
