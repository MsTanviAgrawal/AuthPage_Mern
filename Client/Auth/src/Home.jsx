
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 p-4">
      <h1 className="text-4xl font-bold text-white mb-4 text-center">Welcome to the Home Page</h1>
      <p className="text-lg text-gray-100 mb-8 text-center max-w-2xl">This is the home page of our application. Feel free to explore and navigate through different sections.</p>
      <div className="flex flex-col gap-4 w-full max-w-sm">
        <Link to="/dashboard" className="w-full">
          <button className="w-full bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-200">Go to Dashboard</button>
        </Link>
        <Link to="/login" className="w-full">
          <button className="w-full bg-gray-200 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition duration-200">Go to login</button>
        </Link>
        <Link to="/register" className="w-full">
          <button className="w-full bg-gray-200 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition duration-200">Go to register</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
