import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX, HiArrowRight } from 'react-icons/hi';

export default function MobilePreview() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="min-h-screen bg-[#070e17] text-white pt-24 pb-16 flex flex-col items-center justify-center px-4">
      <div className="text-center mb-6">
        <span className="text-xs font-mono uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
          Screen 10 · Live Device Preview
        </span>
        <h1 className="font-serif text-3xl font-bold text-white mt-2">Mobile Responsive Experience</h1>
        <p className="text-xs text-slate-400 mt-1">
          Pixel-perfect rendering on mobile viewport with touch navigation.
        </p>
      </div>

      {/* Realistic Mobile Frame */}
      <div className="relative w-[340px] sm:w-[380px] h-[720px] bg-[#000000] rounded-[50px] p-3 shadow-[0_25px_70px_rgba(0,0,0,0.8)] border-[6px] border-[#222a35] overflow-hidden flex flex-col">
        {/* Dynamic Island / Speaker Notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-30 flex items-center justify-end px-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#111927] border border-slate-700" />
        </div>

        {/* Mobile Viewport Screen */}
        <div className="w-full h-full bg-[#0a1628] rounded-[40px] overflow-y-auto no-scrollbar flex flex-col relative text-white">
          {/* Mobile Status Bar */}
          <div className="pt-2 px-6 flex justify-between items-center text-[11px] text-slate-400 font-mono select-none">
            <span>09:41</span>
            <div className="flex gap-1.5 items-center">
              <span>5G</span>
              <div className="w-4 h-2 rounded-sm border border-slate-400" />
            </div>
          </div>

          {/* Mobile Top Nav */}
          <div className="px-5 py-3 flex items-center justify-between border-b border-white/5 bg-[#0a1628]/95 sticky top-0 z-20 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-8 h-8 rounded-full bg-white object-contain shadow"
              />
              <div>
                <span className="font-serif text-xs font-bold leading-none block">PRAMOK</span>
                <span className="text-[0.55rem] text-slate-400 uppercase tracking-widest leading-none block">
                  Art Academy
                </span>
              </div>
            </div>

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="text-white text-xl p-1 rounded hover:bg-white/10"
            >
              {mobileMenu ? <HiX /> : <HiMenu />}
            </button>
          </div>

          {/* Dropdown Menu on Mobile */}
          {mobileMenu && (
            <div className="bg-[#060e1a] px-6 py-4 space-y-3 border-b border-white/10 animate-fadeIn">
              <Link to="/" className="block text-xs text-slate-200 py-1 border-b border-white/5">
                Home
              </Link>
              <Link to="/courses" className="block text-xs text-slate-200 py-1 border-b border-white/5">
                Courses
              </Link>
              <Link to="/enroll" className="block text-xs text-slate-200 py-1 border-b border-white/5">
                Student Works
              </Link>
              <Link to="/enroll" className="btn-primary w-full text-xs py-2 mt-2">
                Enroll Now
              </Link>
            </div>
          )}

          {/* Mobile Hero Content */}
          <div className="p-5 flex-1 flex flex-col justify-between space-y-5">
            {/* Hero Artwork */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-lg">
              <img
                src="/images/hero-portrait.jpg"
                alt="Realistic graphite portrait"
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
            </div>

            {/* Typography */}
            <div className="space-y-3 text-center">
              <span className="text-[10px] tracking-widest uppercase font-semibold text-blue-400">
                Realistic Transformations
              </span>
              <h2 className="font-serif text-2xl font-bold leading-tight text-white">
                MASTER THE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
                  ART OF REALISM
                </span>
              </h2>
              <p className="text-[11px] text-slate-300 leading-relaxed max-w-xs mx-auto">
                Step by step graphite pencil art masterclasses for beginners to advanced artists.
              </p>
            </div>

            {/* CTA */}
            <div className="space-y-2">
              <Link
                to="/courses"
                className="btn-primary w-full py-3 text-xs justify-center shadow-lg shadow-blue-500/25 rounded-full"
              >
                Explore Masterclasses <HiArrowRight />
              </Link>
              <Link
                to="/enroll"
                className="btn-secondary w-full py-2.5 text-xs justify-center rounded-full"
              >
                Enroll Now
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/10 text-center">
              <div>
                <p className="font-serif text-base font-bold text-white">4200+</p>
                <p className="text-[9px] text-slate-400 uppercase">Students</p>
              </div>
              <div>
                <p className="font-serif text-base font-bold text-blue-400">3+</p>
                <p className="text-[9px] text-slate-400 uppercase">Years</p>
              </div>
              <div>
                <p className="font-serif text-base font-bold text-emerald-400">Global</p>
                <p className="text-[9px] text-slate-400 uppercase">Community</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
