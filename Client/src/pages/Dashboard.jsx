import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { verifySession } from '../services/api';

const DashboardPage = () => {
    const [suc, setSuc] = useState("");
    const [userName, setUserName] = useState("");
    const [userRole, setUserRole] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        verifySession()
            .then(res => {
                if (res.data.message === 'Success') {
                    setIsAuthenticated(true);
                    setUserRole(res.data.role);
                    setUserName(res.data.name);
                    setSuc("Succeeded OK");
                } else {
                    alert("You can go to dashboard page only if you are logged in, so firstly login.");
                    navigate('/login');
                }
                setLoading(false);
            })
            .catch(err => {
                alert("You can go to dashboard page only if you are logged in, so firstly login.");
                console.log(err);
                setLoading(false);
                navigate('/login');
            });
    }, [navigate]);

    const handleBack = () => {
        navigate(-1);
    };

    if (loading) {
        return (
            <div className="min-h-screen w-full relative flex items-center justify-center p-4">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: `
                          radial-gradient(ellipse 80% 60% at 60% 20%, rgba(175, 109, 255, 0.50), transparent 65%),
                          radial-gradient(ellipse 70% 60% at 20% 80%, rgba(255, 100, 180, 0.45), transparent 65%),
                          radial-gradient(ellipse 60% 50% at 60% 65%, rgba(255, 235, 170, 0.43), transparent 62%),
                          radial-gradient(ellipse 65% 40% at 50% 60%, rgba(120, 190, 255, 0.48), transparent 68%),
                          linear-gradient(180deg, #f7eaff 0%, #fde2ea 100%)
                        `,
                    }}
                />
                <div className="relative z-10 bg-white bg-opacity-90 backdrop-blur-sm rounded-lg shadow-lg p-8 max-w-md w-full text-center">
                    <p className="text-gray-700 text-lg">Loading...</p>
                </div>
            </div>
        );
    }

    if (!isAuthenticated) {
        return null;
    }

    return (
        <div className="min-h-screen w-full relative">
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: `
                      radial-gradient(ellipse 80% 60% at 60% 20%, rgba(175, 109, 255, 0.50), transparent 65%),
                      radial-gradient(ellipse 70% 60% at 20% 80%, rgba(255, 100, 180, 0.45), transparent 65%),
                      radial-gradient(ellipse 60% 50% at 60% 65%, rgba(255, 235, 170, 0.43), transparent 62%),
                      radial-gradient(ellipse 65% 40% at 50% 60%, rgba(120, 190, 255, 0.48), transparent 68%),
                      linear-gradient(180deg, #f7eaff 0%, #fde2ea 100%)
                    `,
                }}
            />
            <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
                <button
                    onClick={handleBack}
                    className="absolute top-4 left-4 bg-white bg-opacity-80 text-purple-600 p-2 rounded-full hover:bg-opacity-100 transition duration-200 flex items-center justify-center shadow-lg"
                    aria-label="Go back"
                >
                    <IoArrowBack size={24} />
                </button>
                <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 max-w-md w-full">
                    <h1 className="text-3xl font-bold text-purple-600 mb-4">Dashboard</h1>
                    <p className="text-gray-700 text-lg mb-4">Welcome, {userName}!</p>
                    <p className="text-gray-700 text-lg">This is the dashboard</p>
                    {suc && <p className="mt-4 text-green-600 font-semibold">{suc}</p>}
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;