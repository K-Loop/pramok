import { Link } from 'react-router-dom';
import { FaWhatsapp, FaInstagram, FaYoutube } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Pramok Art Academy"
                   className="w-11 h-11 rounded-full object-contain bg-white border border-gray-700 shadow" />
              <div>
                <span className="font-serif text-base font-bold text-white block">PRAMOK</span>
                <span className="text-[0.6rem] text-gray-500 tracking-widest uppercase font-semibold">Art Academy</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Realistic Transformations to Your Art Journey. Master graphite shading, hyper-realistic portraits, and fine art skills.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 pt-1">
              {[
                { href: 'https://wa.me/918754314927', icon: <FaWhatsapp />, hover: 'hover:bg-emerald-600' },
                { href: 'https://instagram.com', icon: <FaInstagram />, hover: 'hover:bg-pink-600' },
                { href: 'https://youtube.com', icon: <FaYoutube />, hover: 'hover:bg-red-600' },
              ].map(({ href, icon, hover }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                   className={`w-9 h-9 rounded-full bg-gray-800 ${hover} flex items-center justify-center text-white transition-colors`}>
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-white text-sm font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Home', to: '/' },
                { label: 'All Courses', to: '/courses' },
                { label: 'Enroll Now', to: '/enroll' },
                { label: 'Student Portal', to: '/student/dashboard' },
                { label: 'Admin Login', to: '/admin' },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-3">
            <h4 className="font-serif text-white text-sm font-semibold">Programs</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Beginner Course', to: '/course/beginner' },
                { label: 'Advanced Course', to: '/course/advanced' },
                { label: 'Realism Masterclass', to: '/course/masterclass' },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="font-serif text-white text-sm font-semibold">Contact</h4>
            <div className="space-y-3 text-sm">
              <a href="https://wa.me/918754314927" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                <FaWhatsapp className="text-emerald-400" /> +91 87543 14927
              </a>
              <a href="mailto:contact@pramokart.com"
                 className="flex items-center gap-2 hover:text-white transition-colors">
                <HiMail className="text-blue-400" /> contact@pramokart.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-600 gap-4">
          <p>© {new Date().getFullYear()} Pramok Art Academy. All rights reserved.</p>
          <p className="font-script text-base text-gray-500">Realistic Transformations to Your Art Journey</p>
        </div>
      </div>
    </footer>
  );
}
