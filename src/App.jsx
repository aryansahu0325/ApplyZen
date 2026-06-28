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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeHero />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/resumes" element={<Resumes />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/workflow" element={<WorkflowMonitor />} />
        <Route path="/company-profile" element={<CompanyProfile />} />
        <Route path="/status" element={<ApplicationStatus />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/landing-v2" element={<EnhancedLanding />} />
      </Routes>
    </Router>
  );
}

export default App;
