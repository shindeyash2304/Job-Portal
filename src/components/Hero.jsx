import React from 'react';

const Hero = () => (
  <section className="bg-white py-12 px-6">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">Find Your Dream Job</h2>
    <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
      <input type="text" placeholder="Job title or keywords" className="border rounded px-3 py-2 focus:outline-none"/>
      <input type="text" placeholder="Location" className="border rounded px-3 py-2 focus:outline-none"/>
      <input type="text" placeholder="Company" className="border rounded px-3 py-2 focus:outline-none"/>
      <button className="bg-purple-600 text-white rounded px-4 py-2 hover:bg-purple-700">
        Search
      </button>
    </div>
    <div className="flex flex-wrap justify-center gap-2">
      {['Designer', 'Developer', 'Tester'].map((kw) => (
        <button key={kw} className="text-purple-600 border border-purple-600 rounded-full px-3 py-1 hover:bg-purple-50">
          {kw}
        </button>
      ))}
    </div>
  </section>
);

export default Hero;
