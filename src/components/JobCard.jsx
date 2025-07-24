import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-5 m-3 w-full max-w-md">
      <h2 className="text-xl font-bold text-gray-800">{job.title}</h2>
      <p className="text-sm text-gray-500">{job.company} • {job.location}</p>
      <p className="mt-2 text-gray-700">Type: {job.type}</p>
      <p className="text-gray-700">Salary: {job.salary}</p>
      <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;
