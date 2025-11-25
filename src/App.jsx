import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layouts
import { CreatorLayout } from './layouts/CreatorLayout';
import { AdminLayout } from './layouts/AdminLayout';
import { DashboardLayout } from './layouts/DashboardLayout'; // Backer Dashboard

// Components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { ForgotPassword } from './pages/auth/ForgotPassword';
import { StartCampaign } from './pages/campaigns/StartCampaign';
import { BrowseCampaigns } from './pages/campaigns/BrowseCampaigns';
import { CampaignDetail } from './pages/CampaignDetail';

// Creator Pages
import { Overview as CreatorOverview } from './pages/creator/Overview';
import { MyCampaigns } from './pages/creator/MyCampaigns';
import { Finances } from './pages/creator/Finances';

// Backer Pages (Dashboard)
import { BackerDashboard } from './pages/dashboard/BackerDashboard';
import { SupportedProjects } from './pages/dashboard/SupportedProjects';

// Shared Pages
import { Profile } from './pages/shared/Profile';
import { Messages } from './pages/shared/Messages';
import { Transactions } from './pages/shared/Transactions';

import { NotificationCenter } from './pages/shared/NotificationCenter';

// Admin Pages
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { CampaignQueue } from './pages/admin/CampaignQueue';
import { UserManagement } from './pages/admin/UserManagement';
import { Moderation } from './pages/admin/Moderation';
import { PlatformSettings } from './pages/admin/PlatformSettings';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900">
        <Routes>
          {/* Auth Routes (No Navbar) */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          
          {/* Public Routes (With Navbar & Footer) */}
          <Route path="/" element={<><Navbar /><HomePage /><Footer /></>} />
          <Route path="/start-campaign" element={<><Navbar /><StartCampaign /><Footer /></>} />
          <Route path="/campaigns" element={<><Navbar /><BrowseCampaigns /><Footer /></>} />
          <Route path="/campaigns/:id" element={<><Navbar /><CampaignDetail /><Footer /></>} />
          <Route path="/notifications" element={<><Navbar /><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"><NotificationCenter /></div><Footer /></>} />
          
          {/* Creator Dashboard Routes */}
          <Route path="/creator" element={<CreatorLayout />}>
            <Route index element={<CreatorOverview />} />
            <Route path="campaigns" element={<MyCampaigns />} />
            <Route path="finances" element={<Finances />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="messages" element={<Messages />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          {/* Backer Dashboard Routes (Main Dashboard) */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<BackerDashboard />} />
            <Route path="messages" element={<Messages />} />
            <Route path="supported" element={<SupportedProjects />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="campaigns" element={<CampaignQueue />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="moderation" element={<Moderation />} />
            <Route path="settings" element={<PlatformSettings />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
