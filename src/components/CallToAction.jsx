import React from "react";

const CallToAction = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white p-8 text-center rounded-lg shadow-lg my-8 mx-4 sm:mx-8 lg:mx-16">
      <h2 className="text-3xl font-extrabold mb-6 sm:text-4xl">
        Ready to Take the Next Step?
      </h2>
      <p className="text-lg mb-6">
        Whether you have questions or need to schedule a consultation, we’re
        here to help.
      </p>
      <div className="space-y-4 mb-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Call Us:</h3>
          <p>
            <a
              href="tel:+0721361616"
              className="text-yellow-200 hover:text-white transition-colors">
              0721 361616
            </a>{" "}
            /{" "}
            <a
              href="tel:+0202132450"
              className="text-yellow-200 hover:text-white transition-colors">
              020 2132450
            </a>
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Email Us:</h3>
          <p>
            <a
              href="mailto:training@psychohealth.co.ke"
              className="text-yellow-200 hover:text-white transition-colors">
              training@psychohealth.co.ke
            </a>
          </p>
        </div>
      </div>
      <p className="text-lg font-semibold">
        We look forward to connecting with you!
      </p>
    </div>
  );
};

export default CallToAction;
