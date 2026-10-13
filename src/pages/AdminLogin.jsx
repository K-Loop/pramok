import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('admin@pramokart.com');
  const [password, setPassword] = useState('password123');
  const [remember, setRemember] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/admin/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      {/* White card matching Screen 07 */}
      <div className="max-w-sm w-full bg-white rounded-2xl border border-gray-200 shadow-lg p-8 space-y-6">

        {/* Brand header */}
        <div className="text-center space-y-2">
          <Link to="/" className="inline-block group">
            <img src="/logo.png" alt="Pramok Art Academy"
                 className="w-16 h-16 rounded-full object-contain bg-white border-2 border-gray-200 shadow mx-auto group-hover:scale-105 transition-transform" />
          </Link>
          <div className="pt-1">
            <h2 className="font-serif text-xl font-bold text-gray-900 leading-none">PRAMOK</h2>
            <span className="text-[0.58rem] text-gray-400 uppercase tracking-[0.22em] font-semibold">ART ACADEMY</span>
          </div>
          <div className="pt-2">
            <h1 className="font-serif text-2xl font-bold text-gray-900">Admin Login</h1>
            <p className="text-xs text-gray-400 mt-0.5">Access your admin dashboard</p>
          </div>
        </div>

        {/* Form matching Screen 07 */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">Email Address</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@pramokart.com" className="form-input" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">Password</label>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••" className="form-input" />
          </div>
          {/* Remember me matching reference */}
          <div className="flex items-center gap-2">
            <input type="checkbox" id="remember" checked={remember} onChange={(e) => setRemember(e.target.checked)}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
            <label htmlFor="remember" className="text-xs text-gray-600 cursor-pointer">Remember me</label>
          </div>
          <button type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-md shadow-blue-600/25 cursor-pointer text-sm">
            Login
          </button>
        </form>

        <div className="text-center border-t border-gray-100 pt-4">
          <Link to="/" className="text-xs text-gray-400 hover:text-blue-600 transition-colors">
            ← Back to Public Website
          </Link>
        </div>
      </div>
    </div>
  );
}
