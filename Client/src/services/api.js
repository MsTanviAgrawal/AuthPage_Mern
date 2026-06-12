import axios from 'axios';

// Create a configured central Axios instance
const api = axios.create({
  baseURL: 'http://localhost:3001',
  withCredentials: true, 
});

// Auth API Endpoints
export const registerUser = (userData) => api.post('/register', userData);
export const loginUser = (credentials) => api.post('/login', credentials);
export const verifySession = () => api.get('/verify');
export const getUserProfile = () => api.get('/profile');
export const getDashboard = () => api.get('/dashboard');

export default api;
