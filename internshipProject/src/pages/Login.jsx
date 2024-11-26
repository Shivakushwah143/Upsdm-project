// // src/pages/Login.jsx
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await fetch('http://localhost:5000/api/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         localStorage.setItem('token', data.token);
//         navigate('/profile'); // Redirect to profile page
//       } else {
//         alert(data.message);
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md">
//         <h2 className="text-2xl font-bold mb-6">Login</h2>
//         <input
//           type="email"
//           className="mb-4 p-2 border rounded w-full"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           className="mb-4 p-2 border rounded w-full"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit" className="w-full p-2 bg-red-500 text-white rounded">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa'; // Import icons
import { AiFillEye } from 'react-icons/ai'; // Eye Icon
import { assets } from '../assets/assets';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        navigate('/profile'); // Redirect to profile page
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <div className="text-center mb-6">
          <img 
            src={assets.logo2} // Replace with your logo
            alt="Logo"
            className="mx-auto mb-4"
          /> 
      
          <h2 className="text-2xl font-bold text-red-700">Candidate Login</h2>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Username</label>
          <div className="relative">
            <FaUser className="absolute top-2 left-2 text-gray-400" />
            <input
              type="email"
              className="pl-8 p-2 border rounded w-full"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Password</label>
          <div className="relative">
            <FaLock className="absolute top-2 left-2 text-gray-400" />
            <input
              type="password"
              className="pl-8 p-2 border rounded w-full"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <AiFillEye className="absolute top-2 right-2 text-gray-400 cursor-pointer" />
          </div>
        </div>
        <button type="submit" className="w-full p-2 bg-red-500 text-white rounded mt-4">
          SIGN IN
        </button>
        <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
          <a href="/website" className="text-red-500">Go to website</a>
          <a href="/forgot-password" className="text-red-500">Forgot Password</a>
        </div>
        <div className="mt-4 text-xs text-gray-500">
          <p>
            ⚠️ By logging in, you agree to abide by its Terms of Use. Violations could lead to restriction of portal privileges and/or disciplinary action.
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
