import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);

  // Configure axios defaults
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  useEffect(() => {
    const loadUser = async () => {
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        // Assume backend runs on port 5000
        const res = await axios.get('http://localhost:5000/api/users/me');
        setUser(res.data);
      } catch (error) {
        console.error('Failed to load user', error);
        logout();
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [token]);

  const login = async (email, password) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('refreshToken', res.data.refreshToken);
      setToken(res.data.token);
      setUser(res.data.user);
      return res.data;
    } catch (error) {
      throw error.response?.data?.message || 'Login failed';
    }
  };

  const register = async (name, email, password, role) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', { name, email, password, role });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('refreshToken', res.data.refreshToken);
      setToken(res.data.token);
      setUser(res.data.user);
      return res.data;
    } catch (error) {
      throw error.response?.data?.message || 'Registration failed';
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    setToken(null);
    setUser(null);
    delete axios.defaults.headers.common['Authorization'];
  };

  const updateProfile = async (data) => {
    try {
      const res = await axios.put('http://localhost:5000/api/users/me', data);
      setUser(res.data);
      return res.data;
    } catch (error) {
      throw error.response?.data?.message || 'Profile update failed';
    }
  };

  const changePassword = async (currentPassword, newPassword) => {
    try {
      const res = await axios.put('http://localhost:5000/api/users/change-password', { currentPassword, newPassword });
      return res.data;
    } catch (error) {
       throw error.response?.data?.message || 'Password update failed';
    }
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, register, logout, updateProfile, changePassword }}>
      {children}
    </AuthContext.Provider>
  );
};
