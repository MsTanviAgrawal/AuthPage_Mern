import { useState } from "react";
import { registerUser } from "../services/api";
import { Link , useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill in all fields");
      return;
  }
  
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    
   registerUser({ name, email, password })
      .then(() => {
        alert("Registered Successfully");
        navigate('/login');
      })
      .catch(err => {
        if (err.response && err.response.data && err.response.data.error) {
          alert(err.response.data.error); 
        } else {
          console.log(err);
        }
      });
  };

  return (
    <div className="min-h-screen w-full bg-white relative">
      {/* Pink Glow Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #ec4899 100%)
          `,
          backgroundSize: "100% 100%",
        }}
      />
      {/* Your Content/Components */}
      <div className="relative z-10 flex justify-center items-center min-h-screen">
        <div>
          <div className="bg-white bg-opacity-95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl" style={{ width: "400px" }}>
            <h2 className="text-gray-800 text-center text-2xl font-bold mb-6">Register</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name">
                  <strong className="text-gray-700">Name</strong>
                </label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  autoComplete="off"
                  name="name"
                  className="border-2 border-pink-200 rounded-lg px-4 py-2 w-full text-gray-800 focus:outline-none focus:border-pink-500 transition"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email">
                  <strong className="text-gray-700">Email</strong>
                </label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  autoComplete="off"
                  name="email"
                  className="border-2 border-pink-200 rounded-lg px-4 py-2 w-full text-gray-800 focus:outline-none focus:border-pink-500 transition"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password">
                  <strong className="text-gray-700">Password</strong>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  autoComplete="off"
                  name="password"
                  className="border-2 border-pink-200 rounded-lg px-4 py-2 w-full text-gray-800 focus:outline-none focus:border-pink-500 transition"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded-lg w-full hover:bg-pink-600 transition font-semibold mb-4">
                Register
              </button>
              <p className="text-center text-gray-700 text-sm">Already have an account?</p>
              <Link to="/login" className="block border-2 border-pink-300 bg-pink-50 rounded-lg w-full text-pink-600 text-decoration-none px-4 py-2 mt-2 text-center font-semibold hover:bg-pink-100 transition">
                Login
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
