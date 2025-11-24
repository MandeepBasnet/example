import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X, Bell, User } from 'lucide-react';
import { Button, Input } from './ui';
import { FundoraLogo } from './FundoraLogo';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <FundoraLogo />
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search campaigns..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 bg-slate-50 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-4">
            <Link to="/" className="hidden md:block text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Explore
            </Link>
            <Link to="/dashboard" className="hidden md:block text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Dashboard
            </Link>
            
            <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>

            <Link to="/login" className="hidden sm:flex p-2 text-gray-700 hover:text-blue-600 transition-colors">
              <User className="w-5 h-5" />
            </Link>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={() => navigate('/dashboard')}>
              Start a Campaign
            </Button>

            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden border-t p-4 bg-white space-y-4 shadow-lg">
          <Link to="/" className="block text-sm font-medium hover:text-blue-600 p-2 rounded hover:bg-gray-50">Explore</Link>
          <Link to="/dashboard" className="block text-sm font-medium hover:text-blue-600 p-2 rounded hover:bg-gray-50">Dashboard</Link>
          <Link to="/login" className="block text-sm font-medium hover:text-blue-600 p-2 rounded hover:bg-gray-50">Login</Link>
          <Input type="search" placeholder="Search..." className="w-full" />
        </div>
      )}
    </nav>
  );
}
