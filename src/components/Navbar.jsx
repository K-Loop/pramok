import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const navItems = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'courses', label: 'Courses', targetId: 'courses' },
  { id: 'gallery', label: 'Student Works', targetId: 'gallery' },
  { id: 'about', label: 'About', targetId: 'about' },
  { id: 'contact', label: 'Contact', targetId: 'contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';
  const inHero = isHome && !scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 120);

      if (location.pathname === '/') {
        const sections = ['contact', 'about', 'gallery', 'courses'];
        let current = 'home';
        for (const s of sections) {
          const el = document.getElementById(s);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 240) {
              current = s;
              break;
            }
          }
        }
        setActiveSection(current);
      } else if (location.pathname.startsWith('/course')) {
        setActiveSection('courses');
      } else {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNav = (item) => {
    setMobileOpen(false);
    setActiveSection(item.id);

    if (item.targetId) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document.getElementById(item.targetId)?.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        document.getElementById(item.targetId)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (item.path) {
      navigate(item.path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        background: inHero ? 'rgba(11, 17, 32, 0.88)' : 'rgba(255, 255, 255, 0.98)',
        backdropFilter: 'blur(12px)',
        borderBottom: inHero ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid #e5e7eb',
        boxShadow: inHero ? 'none' : '0 4px 20px -2px rgba(0, 0, 0, 0.06)',
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 py-3"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">

        {/* ── Brand ── */}
        <Link
          to="/"
          onClick={() => {
            setActiveSection('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 group flex-shrink-0"
        >
          <img
            src="/logo.png"
            alt="Pramok Art Academy"
            className={`w-10 h-10 rounded-full object-contain bg-white shadow-sm group-hover:scale-105 transition-all duration-300 border-2 ${
              inHero ? 'border-blue-400/30' : 'border-blue-100'
            }`}
          />
          <div className="leading-none">
            <span
              className={`font-serif text-base font-bold tracking-wide block transition-colors duration-300 ${
                inHero ? 'text-white' : 'text-gray-900'
              }`}
            >
              PRAMOK
            </span>
            <span
              className={`text-[0.58rem] tracking-[0.22em] uppercase font-semibold block mt-0.5 transition-colors duration-300 ${
                inHero ? 'text-blue-300' : 'text-gray-400'
              }`}
            >
              Art Academy
            </span>
          </div>
        </Link>

        {/* ── Desktop nav with Framer Motion Sliding Pill ── */}
        <nav className="hidden lg:flex items-center gap-1.5 flex-1 justify-center relative">
          {navItems.map((item) => {
            const active = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item)}
                className={`relative text-sm font-semibold px-4 py-2 rounded-full transition-colors cursor-pointer border-0 bg-transparent ${
                  active
                    ? 'text-white'
                    : inHero
                      ? 'text-gray-300 hover:text-white'
                      : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {active && (
                  <motion.div
                    layoutId="activeNavPill"
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    className="absolute inset-0 rounded-full bg-blue-600 shadow-md shadow-blue-500/30 -z-10"
                  />
                )}
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* ── Admin + CTA Buttons ── */}
        <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
          <Link
            to="/admin"
            className={`text-xs font-semibold px-3.5 py-2 rounded-lg border transition-all ${
              inHero
                ? 'text-gray-300 border-white/20 hover:text-white hover:border-white/40 hover:bg-white/10'
                : 'text-gray-700 border-gray-300 hover:text-blue-600 hover:border-blue-500 hover:bg-blue-50/50'
            }`}
          >
            Admin
          </Link>
          <Link
            to="/enroll"
            className="btn-primary text-sm px-5 py-2 rounded-lg shadow-md shadow-blue-600/30"
          >
            Enroll Now
          </Link>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden text-2xl p-1.5 rounded-md transition-colors ${
            inHero
              ? 'text-white hover:bg-white/10'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      {mobileOpen && (
        <div
          className={`lg:hidden px-4 py-4 space-y-1.5 shadow-lg transition-colors duration-200 border-t ${
            inHero
              ? 'bg-[#0b1120] border-white/10 text-white'
              : 'bg-white border-gray-100 text-gray-900'
          }`}
        >
          {navItems.map((item) => {
            const active = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item)}
                className={`block w-full text-left text-sm font-semibold px-4 py-2.5 rounded-lg transition-all ${
                  active
                    ? 'bg-blue-600 text-white shadow-sm'
                    : inHero
                      ? 'text-gray-200 hover:bg-white/10'
                      : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-3 flex gap-2">
            <Link
              to="/enroll"
              onClick={() => setMobileOpen(false)}
              className="btn-primary flex-1 text-center py-2.5 block text-sm"
            >
              Enroll Now
            </Link>
            <Link
              to="/admin"
              onClick={() => setMobileOpen(false)}
              className={`px-4 py-2.5 rounded-lg text-sm font-semibold border text-center ${
                inHero
                  ? 'border-white/20 text-white hover:bg-white/10'
                  : 'border-gray-200 text-gray-700 hover:bg-gray-100'
              }`}
            >
              Admin
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
