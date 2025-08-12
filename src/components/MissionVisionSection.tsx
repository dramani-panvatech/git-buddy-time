import React from "react";

const MissionVisionSection = () => {
  return (
    <section className="max-w-4xl mx-auto py-16 px-6 text-center">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-2">Mission, Vision & Values</h2>
        <p className="text-sm text-blue-600 max-w-xl mx-auto">
          We connect with our clients, our communities, and our company. It makes us different. It
          makes us better.
        </p>
      </div>

      {/* Only the two center cards */}
      <div className="grid grid-cols-2 gap-6">
        {/* Our Culture */}
        <div className="bg-cyan-400 p-10 flex flex-col justify-center text-left text-blue-900 rounded-lg">
          <h3 className="text-xl font-semibold mb-6">Our Culture</h3>
          <ul className="space-y-4 mb-6">
            <li className="flex items-start">
              <span className="text-cyan-600 mt-1 mr-3">&#10003;</span>
              <p>We communicate clearly, because in a world crowded with over-the-top marketing, simple wins.</p>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-600 mt-1 mr-3">&#10003;</span>
              <p>We are not rock stars, ninjas or any other disingenuous buzz term. We are creative professionals.</p>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-600 mt-1 mr-3">&#10003;</span>
              <p>Before you can market a business, you need to know its story.</p>
            </li>
          </ul>
          <button className="bg-blue-900 text-white font-bold py-3 rounded hover:bg-blue-800 transition">
            Find out more
          </button>
        </div>

        {/* Our Commitment */}
        <div className="bg-blue-900 p-10 flex flex-col justify-center text-left text-white rounded-lg">
          <h3 className="text-xl font-semibold mb-6">Our Commitment</h3>
          <ul className="space-y-4 mb-6">
            <li className="flex items-start">
              <span className="text-red-400 mt-1 mr-3">&#10003;</span>
              <p>We’re the trusted partner that takes a proactive approach to your technology.</p>
            </li>
            <li className="flex items-start">
              <span className="text-red-400 mt-1 mr-3">&#10003;</span>
              <p>We’re the fellow small business owner that understand your day-to-day needs.</p>
            </li>
            <li className="flex items-start">
              <span className="text-red-400 mt-1 mr-3">&#10003;</span>
              <p>We’re the built-in IT support staff that’s always there when you need us.</p>
            </li>
          </ul>
          <button className="bg-cyan-400 text-blue-900 font-bold py-3 rounded hover:bg-cyan-300 transition">
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
