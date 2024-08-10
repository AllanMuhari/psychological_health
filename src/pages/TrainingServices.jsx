import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaChalkboardTeacher } from "react-icons/fa";
import { Link } from "react-router-dom";

const TrainingServices = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          Training Services
        </h1>

        <section className="mb-12">
          <p className="text-lg mb-6 text-center max-w-4xl mx-auto">
            Our training services are designed to equip your team with the
            essential tools and skills necessary for both professional and
            personal growth. Whether you're seeking mental health awareness,
            stress management, or specialized skills training, we offer a range
            of programs tailored to your needs. Our experienced trainers bring
            practical knowledge and real-world insights to ensure impactful and
            sustainable learning experiences.
          </p>

          {/* Training Program Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Program 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Mental Health and Wellness"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">
                Mental Health and Wellness Program
              </h3>
              <p className="text-md mb-4">
                Raise awareness about mental health and reduce stigma, fostering
                a strong and healthy workplace culture. This program includes
                practical strategies for managing mental health, recognizing
                signs of distress in colleagues, and creating a supportive
                environment.
              </p>
              <p className="text-sm mb-4 text-gray-600">
                Duration: 2 days | Suitable for all employees
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                Learn More
              </button>
            </div>

            {/* Program 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Alcohol & Drug Abuse"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">
                Alcohol & Drug Abuse (ADA)
              </h3>
              <p className="text-md mb-4">
                Equip your team with the knowledge and skills necessary to
                manage and recover from drug and substance abuse. This program
                covers the impacts of addiction, intervention strategies, and
                resources for support and recovery.
              </p>
              <p className="text-sm mb-4 text-gray-600">
                Duration: 3 days | Suitable for HR professionals and managers
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                Learn More
              </button>
            </div>

            {/* Program 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Stress Management and Resilience"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">
                Stress Management and Resilience
              </h3>
              <p className="text-md mb-4">
                Help your team manage stress effectively and build resilience
                for better workplace performance. Participants will learn
                techniques for coping with stress, maintaining work-life
                balance, and enhancing overall well-being.
              </p>
              <p className="text-sm mb-4 text-gray-600">
                Duration: 1 day | Suitable for all employees
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                Learn More
              </button>
            </div>

            {/* Program 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Counseling Skills Training"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">
                Counseling Skills Training
              </h3>
              <p className="text-md mb-4">
                Develop self-help skills and assist others in navigating
                emotional difficulties. This program includes basic counseling
                techniques, active listening skills, and how to provide
                empathetic support.
              </p>
              <p className="text-sm mb-4 text-gray-600">
                Duration: 4 days | Suitable for HR professionals and managers
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                Learn More
              </button>
            </div>

            {/* Program 5 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Employee Assistance Program"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">
                Employee Assistance Program (EAP)
              </h3>
              <p className="text-md mb-4">
                Promote healthy behaviors and support employees dealing with
                distress, including access to treatment services. This program
                offers a comprehensive approach to employee wellness, including
                counseling, crisis intervention, and referral services.
              </p>
              <p className="text-sm mb-4 text-gray-600">
                Duration: Ongoing support | Suitable for all organizations
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                Learn More
              </button>
            </div>

            {/* Program 6 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Health and Wellness Training"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">
                Health and Wellness Training / Talks
              </h3>
              <p className="text-md mb-4">
                Enhance workplace health and wellness through insights on
                lifestyle diseases, infection prevention, and nutrition. This
                program focuses on promoting healthy living habits and reducing
                the risk of chronic illnesses among employees.
              </p>
              <p className="text-sm mb-4 text-gray-600">
                Duration: Half-day sessions | Suitable for all employees
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                Learn More
              </button>
            </div>

            {/* Program 7 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Occupational Safety and Health"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">
                Occupational Safety and Health
              </h3>
              <p className="text-md mb-4">
                Protect your team with training that covers all aspects of
                workplace safety and health. This program includes practical
                strategies for accident prevention, emergency preparedness, and
                compliance with safety regulations.
              </p>
              <p className="text-sm mb-4 text-gray-600">
                Duration: 2 days | Suitable for safety officers and managers
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-6">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <p className="text-md mb-4">
                "The mental health program was eye-opening and provided our team
                with the tools needed to create a supportive environment. We've
                seen a noticeable improvement in morale and productivity."
              </p>
              <p className="text-sm text-gray-600 font-semibold">
                - John D., HR Manager
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <p className="text-md mb-4">
                "The stress management workshop has been incredibly beneficial
                for our staff. The techniques we learned are simple yet
                effective, and we've seen a reduction in stress-related absences
                since implementing them."
              </p>
              <p className="text-sm text-gray-600 font-semibold">
                - Sarah K., Team Lead
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <p className="text-md mb-4">
                "Our employees found the Occupational Safety and Health training
                to be practical and relevant. The trainers were knowledgeable
                and engaging, making complex topics easy to understand."
              </p>
              <p className="text-sm text-gray-600 font-semibold">
                - Mike R., Operations Manager
              </p>
            </div>
          </div>
        </section>

        {/* Trainers Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-6">
            Meet Our Trainers
          </h2>
          <div className="flex justify-center space-x-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="Trainer 1"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-center">Jane Doe</h3>
              <p className="text-center text-sm text-gray-600">
                Jane has over 15 years of experience in mental health and
                wellness training. She is passionate about helping organizations
                foster supportive and healthy workplace environments.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="Trainer 2"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-center">John Smith</h3>
              <p className="text-center text-sm text-gray-600">
                John is an expert in occupational safety and health, with a
                focus on practical applications in the workplace. He has trained
                hundreds of professionals in best practices for maintaining
                safety and compliance.
              </p>
            </div>
          </div>
        </section>

        {/* Back to Services Button */}
        <div className="text-center">
          <Link to="/services">
            <button className="bg-gray-500 text-white px-4 py-2 rounded-md">
              Back to Services
            </button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TrainingServices;
