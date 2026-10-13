import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Enroll from './pages/Enroll';
import PaymentSuccess from './pages/PaymentSuccess';
import StudentDashboard from './pages/StudentDashboard';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import EnrollmentDetail from './pages/EnrollmentDetail';
import './index.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -14 }}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

function MainLayout() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Public pages inside main layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/courses" element={<PageWrapper><Courses /></PageWrapper>} />
          <Route path="/course/:id" element={<PageWrapper><CourseDetail /></PageWrapper>} />
          <Route path="/course" element={<PageWrapper><CourseDetail /></PageWrapper>} />
          <Route path="/enroll" element={<PageWrapper><Enroll /></PageWrapper>} />
          <Route path="/enroll/:courseId" element={<PageWrapper><Enroll /></PageWrapper>} />
          <Route path="/payment-success" element={<PageWrapper><PaymentSuccess /></PageWrapper>} />
        </Route>

        {/* Student portal */}
        <Route path="/student/dashboard" element={<PageWrapper><StudentDashboard /></PageWrapper>} />
        <Route path="/student" element={<PageWrapper><StudentDashboard /></PageWrapper>} />

        {/* Admin portal */}
        <Route path="/admin" element={<PageWrapper><AdminLogin /></PageWrapper>} />
        <Route path="/admin/dashboard" element={<PageWrapper><AdminDashboard /></PageWrapper>} />
        <Route path="/admin/enrollment/:id" element={<PageWrapper><EnrollmentDetail /></PageWrapper>} />
        <Route path="/admin/enrollment" element={<PageWrapper><EnrollmentDetail /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatedRoutes />
    </Router>
  );
}
