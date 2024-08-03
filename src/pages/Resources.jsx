import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaBookOpen, FaVideo, FaFileAlt } from "react-icons/fa";

const resources = {
  articles: [
    {
      title: "Mental Health Tips",
      url: "/resources/articles/mental-health-tips",
    },
    {
      title: "Stress Management",
      url: "/resources/articles/stress-management",
    },
    {
      title: "Workplace Wellness",
      url: "/resources/articles/workplace-wellness",
    },
  ],
  ebooks: [
    { title: "Self-Care Guide", url: "/resources/ebooks/self-care-guide" },
    {
      title: "Resilience Building",
      url: "/resources/ebooks/resilience-building",
    },
  ],
  webinars: [
    {
      title: "Mental Health Awareness",
      url: "/resources/webinars/mental-health-awareness",
    },
    {
      title: "Stress Management Strategies",
      url: "/resources/webinars/stress-management-strategies",
    },
  ],
};

const ResourceCard = ({ icon, title, items }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
    <div className="flex items-center mb-4">
      {icon}
      <h2 className="text-xl font-bold ml-3">{title}</h2>
    </div>
    <ul className="list-disc pl-5 space-y-2">
      {items.map((item, index) => (
        <li key={index}>
          <a href={item.url} className="text-blue-600 hover:underline">
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Resources = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-8">Resources</h1>

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
