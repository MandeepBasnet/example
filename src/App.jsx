import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { CampaignDetail } from './pages/CampaignDetail';

// Import Dashboard Layout and Pages
import { DashboardLayout } from './layouts/DashboardLayout';
import { Overview as DashboardOverview } from './pages/dashboard/Overview';
import { MyCampaigns } from './pages/dashboard/MyCampaigns';
import { Finances } from './pages/dashboard/Finances';
import { Profile } from './pages/dashboard/Profile';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          
          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardOverview />} />
            <Route path="campaigns" element={<MyCampaigns />} />
            <Route path="finances" element={<Finances />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          {/* Public Routes */}
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
