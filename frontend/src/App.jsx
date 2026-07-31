import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/common/ProtectedRoute';
import Layout from './components/layout/Layout';
import ErrorBoundary from './components/common/ErrorBoundary';

const HomeHero = React.lazy(() => import('./pages/HomeHero'));
const ProductDetail = React.lazy(() => import('./pages/ProductDetail'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Applications = React.lazy(() => import('./pages/Applications'));
const Opportunities = React.lazy(() => import('./pages/Opportunities'));
const Resumes = React.lazy(() => import('./pages/Resumes'));
const Analytics = React.lazy(() => import('./pages/Analytics'));
const WorkflowMonitor = React.lazy(() => import('./pages/WorkflowMonitor'));
const CompanyProfile = React.lazy(() => import('./pages/CompanyProfile'));
const UserProfile = React.lazy(() => import('./pages/UserProfile'));
const Settings = React.lazy(() => import('./pages/Settings'));
const Notifications = React.lazy(() => import('./pages/Notifications'));
const HelpCenter = React.lazy(() => import('./pages/HelpCenter'));
const CommunityForum = React.lazy(() => import('./pages/CommunityForum'));
const Troubleshoot = React.lazy(() => import('./pages/Troubleshoot'));
const ApplicationStatus = React.lazy(() => import('./pages/ApplicationStatus'));
const Login = React.lazy(() => import('./pages/Login'));
const SignUp = React.lazy(() => import('./pages/SignUp'));
const EnhancedLanding = React.lazy(() => import('./pages/EnhancedLanding'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <AuthProvider>
          <Suspense fallback={
            <div className="flex min-h-screen items-center justify-center bg-slate-50">
              <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          }>
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
                <Route path="/forum" element={<CommunityForum />} />
                <Route path="/troubleshoot" element={<Troubleshoot />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/workflow" element={<WorkflowMonitor />} />
                <Route path="/company-profile" element={<CompanyProfile />} />
                <Route path="/career-profile" element={<UserProfile />} />
              </Route>

              {/* Catch-all Route for 404 Not Found */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </AuthProvider>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
