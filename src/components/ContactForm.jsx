import React from "react";

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    // Get form data
    const formData = new FormData(event.target);

    // Google Form URL
    const formUrl = "https://docs.google.com/forms/d/e/FORM_ID/formResponse";

    // Fetch API to submit form data
    fetch(formUrl, {
      method: "POST",
      body: new URLSearchParams(formData),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Thank you for your message!");
        } else {
          alert("There was an error. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("There was an error. Please try again.");
      });
  };

  return (
    <form
      className="space-y-6 max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg"
      onSubmit={handleSubmit}>
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          id="name"
          name="entry.1234567890"
          type="text"
          placeholder="John Doe"
          className="block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          id="email"
          name="entry.0987654321"
          type="email"
          placeholder="you@example.com"
          className="block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number
        </label>
        <input
          id="phone"
          name="entry.1122334455"
          type="tel"
          placeholder="+254 712345678"
          className="block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-700 mb-1">
          Subject
        </label>
        <input
          id="subject"
          name="entry.5566778899"
          type="text"
          placeholder="Subject of your message"
          className="block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="entry.6677889900"
          rows="4"
          placeholder="Your message here..."
          className="block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-3 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
