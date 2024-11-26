import React, { useState } from 'react';

const AddCenter = () => {
  const [centerData, setCenterData] = useState({
    centerType: '',
    centerName: '',
    district: '',
    tehsil: '',
    pincode: '',
    address: '',
    contactName: '',
    mobile1: '',
    mobile2: '',
    email: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCenterData({ ...centerData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await fetch('http://localhost:5000/api/centers/add', { // Ensure the URL matches your backend route
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(centerData),
      });

      if (!response.ok) {
        throw new Error('Failed to add center');
      }

      const data = await response.json();
      setSuccessMessage(data.message || 'Center added successfully');
      
      // Clear the form after successful submission
      setCenterData({
        centerType: '',
        centerName: '',
        district: '',
        tehsil: '',
        pincode: '',
        address: '',
        contactName: '',
        mobile1: '',
        mobile2: '',
        email: '',
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl mb-6 font-bold">Add New Center</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Render form fields */}
        {Object.keys(centerData).map((field) => (
          <div key={field}>
            <label className="block font-medium text-gray-700">{field}</label>
            <input
              type="text"
              name={field}
              value={centerData[field]}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
        ))}
        <button
          type="submit"
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          disabled={loading}
        >
          {loading ? 'Adding Center...' : 'Submit'}
        </button>
      </form>
      {successMessage && <div className="mt-4 text-green-500">{successMessage}</div>}
      {error && <div className="mt-4 text-red-500">{error}</div>}
    </div>
  );
};

export default AddCenter;
