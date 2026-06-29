import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeHero from './pages/HomeHero';
import ProductDetail from './pages/ProductDetail';
import Dashboard from './pages/Dashboard';
import Applications from './pages/Applications';
import Resumes from './pages/Resumes';
import Analytics from './pages/Analytics';
import WorkflowMonitor from './pages/WorkflowMonitor';
import CompanyProfile from './pages/CompanyProfile';
import ApplicationStatus from './pages/ApplicationStatus';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import EnhancedLanding from './pages/EnhancedLanding';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

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

          {/* Protected Dashboard/App Routes */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/product/:id" element={
            <ProtectedRoute>
              <ProductDetail />
            </ProtectedRoute>
          } />
          <Route path="/applications" element={
            <ProtectedRoute>
              <Applications />
            </ProtectedRoute>
          } />
          <Route path="/resumes" element={
            <ProtectedRoute>
              <Resumes />
            </ProtectedRoute>
          } />
          <Route path="/analytics" element={
            <ProtectedRoute>
              <Analytics />
            </ProtectedRoute>
          } />
          <Route path="/workflow" element={
            <ProtectedRoute>
              <WorkflowMonitor />
            </ProtectedRoute>
          } />
          <Route path="/company-profile" element={
            <ProtectedRoute>
              <CompanyProfile />
            </ProtectedRoute>
          } />
          <Route path="/status" element={
            <ProtectedRoute>
              <ApplicationStatus />
            </ProtectedRoute>
          } />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;

