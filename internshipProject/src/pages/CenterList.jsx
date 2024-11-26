import React, { useEffect, useState } from 'react';

const CenterList = () => {
  const [centers, setCenters] = useState([]);
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);      
  
  // Fetch centers data from backend
  useEffect(() => {
    // Make sure to replace this with your actual API URL
    fetch('http://localhost:5000/api/centers')

      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setCenters(data);  
        setLoading(false); 
      })
      .catch(error => {
        setError(error.message);  
        setLoading(false);        
      });
  }, []);  

  if (loading) {
    return <div>Loading...</div>;  
  }

  // Show error state
  if (error) {
    return <div>Error: {error}</div>;  
  }

  return (
    <div className="p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl mb-6 font-bold">Center List</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-3">Center Name</th>
            <th className="border p-3">District</th>
            <th className="border p-3">Tehsil</th>
            <th className="border p-3">Pincode</th>
            <th className="border p-3">Contact</th>
          </tr>
        </thead>
        <tbody>
          {centers.length > 0 ? (
            centers.map((center, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border p-3">{center.centerName}</td>
                <td className="border p-3">{center.district}</td>
                <td className="border p-3">{center.tehsil}</td>
                <td className="border p-3">{center.pincode}</td>
                <td className="border p-3">{center.contactName}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="border p-3 text-center text-gray-500">
                No centers available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CenterList;
