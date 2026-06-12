import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Aurora Dream Vivid Bloom */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 70% 20%, rgba(175, 109, 255, 0.85), transparent 68%),
            radial-gradient(ellipse 70% 60% at 20% 80%, rgba(255, 100, 180, 0.75), transparent 68%),
            radial-gradient(ellipse 60% 50% at 60% 65%, rgba(255, 235, 170, 0.98), transparent 68%),
            radial-gradient(ellipse 65% 40% at 50% 60%, rgba(120, 190, 255, 0.3), transparent 68%),
            linear-gradient(180deg, #f7eaff 0%, #fde2ea 100%)
          `,
        }}
      />
      {/* Your content goes here */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-5xl font-bold text-gray-800 mb-6 text-center drop-shadow-lg">Welcome to the Home Page</h1>
        <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl drop-shadow-md">This is the home page of our application. Feel free to explore and navigate through different sections.</p>
        <div className="flex flex-col gap-4 w-full max-w-sm">
          <Link to="/dashboard" className="w-full">
            <button className="w-full bg-linear-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition duration-200 shadow-lg">Go to Dashboard</button>
          </Link>
          <Link to="/login" className="w-full">
            <button className="w-full bg-linear-to-r from-teal-500 to-teal-300 text-white px-6 py-3 rounded-lg font-semibold hover:from-teal-600 hover:to-green-600 transition duration-200 shadow-lg">Go to login</button>
          </Link>
          <Link to="/register" className="w-full">
            <button className="w-full bg-linear-to-r from-pink-500 to-pink-400 text-white px-6 py-3 rounded-lg font-semibold hover:from-pink-500 hover:to-pink-800 transition duration-200 shadow-lg">Go to register</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
