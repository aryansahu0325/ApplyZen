import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeHero from './pages/HomeHero';
import ProductDetail from './pages/ProductDetail';
import Dashboard from './pages/Dashboard';
import Applications from './pages/Applications';
import Opportunities from './pages/Opportunities';
import Resumes from './pages/Resumes';
import Analytics from './pages/Analytics';
import WorkflowMonitor from './pages/WorkflowMonitor';
import CompanyProfile from './pages/CompanyProfile';
import UserProfile from './pages/UserProfile';
import Settings from './pages/Settings';
import Notifications from './pages/Notifications';
import HelpCenter from './pages/HelpCenter';
import ApplicationStatus from './pages/ApplicationStatus';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import EnhancedLanding from './pages/EnhancedLanding';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomeHero />} />
          <Route path="/landing-v2" element={<EnhancedLanding />} />

          {/* Guest Only Routes (Login/SignUp) */}
          <Route path="/login" element={
            <ProtectedRoute publicOnly>
              <Login />
            </ProtectedRoute>
          } />
          <Route path="/signup" element={
            <ProtectedRoute publicOnly>
              <SignUp />
            </ProtectedRoute>
          } />

          {/* Protected Dashboard/App Routes with common Layout */}
          <Route element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/opportunities" element={<Opportunities />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/status" element={<ApplicationStatus />} />
            <Route path="/resumes" element={<Resumes />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/workflow" element={<WorkflowMonitor />} />
            <Route path="/company-profile" element={<CompanyProfile />} />
            <Route path="/career-profile" element={<UserProfile />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;

