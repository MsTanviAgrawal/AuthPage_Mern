import { useState } from "react";
import axios from "axios";
import { Link , useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {

    if (!name || !email || !password) {
      alert("Please fill in all fields");
      return;
  }

    e.preventDefault();
    // Example usage of the state values
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    
    axios.post('http://localhost:3001/register', { name, email, password })
    .then(() => {
      alert("Registered Successfully");
      navigate('/login');
    })
    .catch(err => {
      if (err.response && err.response.data && err.response.data.error) {
        alert(err.response.data.error); // Display the server error message
      } else {
        console.log(err);
      }
    });
  };


  return (
    <div className="bg-blue-700 h-screen w-screen flex justify-center items-center">
      <div>
        <div className="bg-white p-4 rounded" style={{ width: "400px" }}>
          <h2 className="text-black text-center text-2xl font-bold " >Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name">
                <strong className="text-black"  >Name</strong>
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                autoComplete="off"
                name="name"
                className="border border-gray-300 rounded px-3 py-2 w-full text-black"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
                className="border border-gray-300 rounded px-3 py-2 w-full text-black"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700">
              Register
            </button>
            <p className="mt-3 text-center text-sm text-gray-600">Already Have an Account?</p>
            <Link to="/login" className="block border border-gray-300 bg-gray-100 rounded w-full text-decoration-none px-4 py-2 mt-2 text-center text-black hover:bg-gray-200">
              Login
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
