import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

const MyComponent = () => {
    const [suc, setSuc] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3001/dashboard', { withCredentials: true })
            .then(res => {
                if (res.data.message === 'Success') {
                    setSuc("Succeeded OK");
                } else {
                    navigate('/login');
                }
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center p-4">
            <button
                onClick={handleBack}
                className="absolute top-4 left-4 bg-white text-blue-600 p-2 rounded-full hover:bg-gray-100 transition duration-200 flex items-center justify-center shadow-md"
                aria-label="Go back"
            >
                <IoArrowBack size={24} />
            </button>
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
                <h1 className="text-3xl font-bold text-blue-600 mb-4">Dashboard</h1>
                <p className="text-gray-700 text-lg">This is the dashboard</p>
                {suc && <p className="mt-4 text-green-600 font-semibold">{suc}</p>}
            </div>
        </div>
    );
};

export default MyComponent;
