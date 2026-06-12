import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../services/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser({ email, password })
      .then((res) => {
        if (res.data.status === "Success") {
          alert("Login Successful!");
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          alert(err.response.data);
        } else {
          alert("An error occurred during login.");
        }
      });
  };

  return (
    <div className="min-h-screen w-full bg-white relative">
      {/* Teal Glow Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #14b8a6 100%)
          `,
          backgroundSize: "100% 100%",
        }}
      />
      {/* Your Content/Components */}
      <div className="relative z-10 flex justify-center items-center min-h-screen">
        <div>
          <div
            className="bg-white bg-opacity-95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl"
            style={{ width: "400px" }}
          >
            <h2 className="text-gray-800 text-center text-2xl font-bold mb-6">
              Login
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email">
                  <strong className="text-gray-700">Email</strong>
                </label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  autoComplete="off"
                  name="email"
                  className="border-2 border-teal-200 rounded-lg px-4 py-2 w-full text-gray-800 focus:outline-none focus:border-teal-500 transition"
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
                  className="border-2 border-teal-200 rounded-lg px-4 py-2 w-full text-gray-800 focus:outline-none focus:border-teal-500 transition"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="bg-teal-500 text-white px-4 py-2 rounded-lg w-full hover:bg-teal-600 transition font-semibold mb-4"
              >
                Login
              </button>
              <p className="text-center text-gray-700 text-sm">
                Don't have an account?
                <Link
                  to="/register"
                  className="block border-2 border-teal-300 text-teal-600 bg-teal-50 rounded-lg w-full  text-decoration-none px-4 py-2 mt-2 text-center font-semibold hover:bg-teal-100 transition"
                >
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
