// Version: 1.0

import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
 
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  axios .defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', { email, password })
      .then(res => {
        if (res.data.status === 'Success') {  // Assuming the response data has a status field
          if (res.data.role === 'admin') {
            alert('Login Successful as Admin');
            navigate('/dashboard');
          } else {
            alert('Login Successful as User');
            navigate('/');
          }
        }
      })
      .catch(err => alert(err.response.data));
  }

return (
<div className="bg-blue-700 h-screen w-screen flex justify-center items-center">
      <div>
        <div className="bg-white p-4 rounded" style={{ width: "400px" }}>
          <h2 className="text-black text-center text-2xl font-bold " >Login</h2>
          <form onSubmit={handleSubmit}>
          
            <div className="mb-3">
              <label htmlFor="email">
                <strong className="text-black" >Email</strong>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                autoComplete="off"
                name="email"
                className="border border-gray-300 rounded px-3 py-2 w-full text-black"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password">
                <strong className="text-black" >Password</strong>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                autoComplete="off"
                name="password"
                className="border border-gray-300 rounded px-3 py-2 w-full text-black "
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700">
              Login
            </button>
            <p className="mt-3 text-center text-sm text-gray-600">Already Have an Account? If not
               <Link to="/register" className="block border border-gray-300 bg-gray-100 rounded w-full text-decoration-none px-4 py-2 mt-2 text-center text-black hover:bg-gray-200">
              Sign Up
            </Link>
            </p>
           
          </form>
        </div>
      </div>
    </div>

);
}

export default Login;