import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { CampaignDetail } from './pages/CampaignDetail';
import { CreatorDashboard } from './pages/CreatorDashboard';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<CreatorDashboard />} />
          <Route path="/*" element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={
                  <>
                    <HomePage />
                    <Footer />
                  </>
                } />
                <Route path="/campaign/:id" element={
                  <>
                    <CampaignDetail />
                    <Footer />
                  </>
                } />
              </Routes>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}
