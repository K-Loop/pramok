import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const screens = [
  { id: '01', name: 'Home / Hero', path: '/' },
  { id: '02', name: 'Course Catalogue', path: '/courses' },
  { id: '03', name: 'Course Detail', path: '/course/masterclass' },
  { id: '04', name: 'Checkout', path: '/enroll' },
  { id: '05', name: 'Payment Success', path: '/payment-success' },
  { id: '06', name: 'Student Dashboard', path: '/student/dashboard' },
  { id: '07', name: 'Admin Login', path: '/admin' },
  { id: '08', name: 'Admin Dashboard', path: '/admin/dashboard' },
  { id: '09', name: 'Enrollment Detail', path: '/admin/enrollment/1' },
  { id: '10', name: 'Mobile Preview', path: '/mobile-preview' },
  { id: 'ALL', name: '✨ 10-Screen Collage', path: '/collage' },
];

export default function ScreenSwitcher() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#060e1a] border-b border-white/10 text-white select-none">
      <div className="max-w-[1600px] mx-auto px-2 sm:px-4 h-10 flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
        {/* Brand Tag */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
          <span className="font-serif text-xs font-bold tracking-wider text-slate-200 uppercase">
            PRAMOK 10-SCREEN SYSTEM
          </span>
        </div>

        {/* Screen Switch Buttons */}
        <div className="flex items-center gap-1 shrink-0 overflow-x-auto py-1">
          {screens.map((screen) => {
            const isActive =
              location.pathname === screen.path ||
              (screen.path === '/admin/enrollment/1' && location.pathname.startsWith('/admin/enrollment'));

            return (
              <Link
                key={screen.id}
                to={screen.path}
                className={`text-[11px] font-medium px-2.5 py-1 rounded transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-blue-600 text-white font-semibold shadow-sm'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white'
                }`}
              >
                <span className="opacity-60 text-[10px] font-mono">[{screen.id}]</span>
                <span>{screen.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
