import React from 'react';

function JobCard({ job }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm">
      <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
      <p className="text-gray-600 mb-1"><strong>Company:</strong> {job.company}</p>
      <p className="text-gray-600 mb-1"><strong>Location:</strong> {job.location}</p>
      <p className="text-gray-600 mb-4"><strong>Salary:</strong> {job.salary}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Apply Now
      </button>
    </div>
  );
}

export default JobCard;
