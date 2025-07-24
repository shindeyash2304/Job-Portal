import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import JobCard from './components/JobCard';
import jobs from './data/jobs';
import './App.css';

function App() {
  return (
    <>
      <Header />

      {/* Search Bar */}
      <div className="max-w-md mx-auto my-6">
        <input
          type="text"
          placeholder="Search job titles..."
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Job Listings */}
      <div className="min-h-screen bg-gray-100 px-6 pb-10">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">🔍 Job Listings</h1>
        <div className="flex flex-wrap justify-center gap-6">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
  