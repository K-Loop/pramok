import { Link } from 'react-router-dom';

export default function CollageOverview() {
  return (
    <div className="min-h-screen bg-[#070d17] text-white pt-14 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Master Top Banner from Reference */}
      <div className="max-w-[1680px] mx-auto mb-8 border border-white/10 rounded-2xl bg-gradient-to-r from-[#0a1628] via-[#0d1d35] to-[#0a1628] p-6 lg:p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
          {/* Logo & Brand */}
          <div className="flex items-center gap-5">
            <img
              src="/logo.png"
              alt="Pramok Logo"
              className="w-16 h-16 rounded-full object-contain bg-white shadow-xl ring-2 ring-white/20"
            />
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-wider text-white">
                PRAMOK
              </h1>
              <span className="text-xs sm:text-sm tracking-[0.3em] uppercase text-slate-300 font-semibold block">
                ART ACADEMY
              </span>
            </div>
          </div>

          {/* Script Tagline */}
          <div className="text-center">
            <p className="font-script text-2xl sm:text-3xl text-slate-200">
              Realistic Transformations to Your Art Journey
            </p>
          </div>

          {/* Right Header Subtitle & Keywords */}
          <div className="text-center lg:text-right space-y-1">
            <p className="text-xs sm:text-sm font-semibold tracking-wider text-slate-300 uppercase">
              GRAPHITE PENCIL ART MASTERCLASSES FOR EVERY ARTIST
            </p>
            <p className="text-[10px] tracking-[0.25em] text-slate-400 font-medium uppercase">
              OBSERVE · PRACTICE · IMPROVE · CREATE · GROW
            </p>
          </div>
        </div>
      </div>

      {/* Grid of All 10 Screens */}
      <div className="max-w-[1680px] mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-serif text-2xl font-bold text-white">Full System Architecture · 10 Screens</h2>
            <p className="text-xs text-slate-400 mt-0.5">Click any screen preview to enter that live functional page.</p>
          </div>
          <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            10 / 10 Active Modules
          </span>
        </div>

        {/* Top Row: Screens 01, 02, 03 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 01 HOME / HERO PAGE */}
          <Link
            to="/"
            className="group block rounded-2xl overflow-hidden border border-white/10 bg-[#0a1628] hover:border-blue-500/50 transition-all shadow-xl hover:-translate-y-1"
          >
            <div className="bg-blue-600 px-4 py-2 flex items-center justify-between">
              <span className="text-xs font-bold tracking-wider uppercase text-white font-mono">
                01 HOME / HERO PAGE
              </span>
              <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded text-white font-semibold">Open Live →</span>
            </div>
            <div className="p-4 space-y-3">
              <div className="rounded-lg overflow-hidden border border-white/10 aspect-[16/10] bg-[#060e1a] relative">
                <img src="/images/hero-portrait.jpg" alt="Hero Art" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 flex flex-col justify-end">
                  <span className="text-[9px] uppercase tracking-wider text-blue-400 font-bold">Realistic Transformations</span>
                  <h3 className="font-serif text-lg font-bold text-white">MASTER THE ART OF REALISM</h3>
                  <p className="text-[10px] text-slate-300 line-clamp-1">Step by step graphite pencil art masterclasses.</p>
                  <div className="mt-2 flex gap-2">
                    <span className="bg-blue-600 text-white text-[10px] px-3 py-1 rounded-full font-semibold">Explore Masterclasses</span>
                    <span className="border border-white/30 text-white text-[10px] px-3 py-1 rounded-full">Enroll Now</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center text-[11px] text-slate-400 pt-1">
                <span>Theme: Cinematic Dark Navy</span>
                <span className="text-blue-400 font-semibold group-hover:underline">Visit Page</span>
              </div>
            </div>
          </Link>

          {/* 02 COURSE CATALOGUE PAGE */}
          <Link
            to="/courses"
            className="group block rounded-2xl overflow-hidden border border-white/10 bg-white text-slate-900 hover:border-blue-500/50 transition-all shadow-xl hover:-translate-y-1"
          >
            <div className="bg-blue-600 px-4 py-2 flex items-center justify-between text-white">
              <span className="text-xs font-bold tracking-wider uppercase font-mono">
                02 COURSE CATALOGUE PAGE
              </span>
              <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded font-semibold">Open Live →</span>
            </div>
            <div className="p-4 space-y-3 bg-[#f8fafc]">
              <div className="text-center py-1">
                <span className="text-[10px] uppercase font-bold text-blue-600 tracking-wider">Our Courses</span>
                <h4 className="font-serif text-base font-bold text-slate-900">Learn Graphite Art Step by Step</h4>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-white p-2 rounded-lg border border-slate-200 shadow-sm text-center">
                  <img src="/images/gallery-eye.jpg" alt="Course" className="w-full h-14 object-cover rounded mb-1" />
                  <span className="text-[8px] bg-blue-600 text-white px-1.5 py-0.5 rounded font-bold uppercase block w-fit mx-auto">Beginner</span>
                  <p className="text-[10px] font-bold text-slate-900 mt-1">₹2,999</p>
                </div>
                <div className="bg-white p-2 rounded-lg border border-slate-200 shadow-sm text-center">
                  <img src="/images/course-advanced.jpg" alt="Course" className="w-full h-14 object-cover rounded mb-1" />
                  <span className="text-[8px] bg-blue-600 text-white px-1.5 py-0.5 rounded font-bold uppercase block w-fit mx-auto">Advanced</span>
                  <p className="text-[10px] font-bold text-slate-900 mt-1">₹4,999</p>
                </div>
                <div className="bg-white p-2 rounded-lg border border-slate-200 shadow-sm text-center">
                  <img src="/images/course-masterclass.jpg" alt="Course" className="w-full h-14 object-cover rounded mb-1" />
                  <span className="text-[8px] bg-[#0a1628] text-white px-1.5 py-0.5 rounded font-bold uppercase block w-fit mx-auto">Master</span>
                  <p className="text-[10px] font-bold text-slate-900 mt-1">₹7,999</p>
                </div>
              </div>
              <div className="flex justify-between items-center text-[11px] text-slate-500 pt-1">
                <span>Theme: Pure Clean Light</span>
                <span className="text-blue-600 font-semibold group-hover:underline">Visit Page</span>
              </div>
            </div>
          </Link>

          {/* 03 COURSE DETAIL PAGE */}
          <Link
            to="/course/masterclass"
            className="group block rounded-2xl overflow-hidden border border-white/10 bg-white text-slate-900 hover:border-blue-500/50 transition-all shadow-xl hover:-translate-y-1"
          >
            <div className="bg-blue-600 px-4 py-2 flex items-center justify-between text-white">
              <span className="text-xs font-bold tracking-wider uppercase font-mono">
                03 COURSE DETAIL PAGE
              </span>
              <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded font-semibold">Open Live →</span>
            </div>
            <div className="p-4 space-y-3 bg-[#f8fafc]">
              <div className="grid grid-cols-2 gap-3 items-center">
                <div className="relative rounded-lg overflow-hidden border border-slate-200">
                  <img src="/images/course-masterclass.jpg" alt="Detail Preview" className="w-full h-28 object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow">
                      <div className="w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-6 border-l-blue-600 ml-0.5" />
                    </div>
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] bg-[#0a1628] text-white px-2 py-0.5 rounded font-bold uppercase">Masterclass</span>
                  <h4 className="font-serif text-sm font-bold text-slate-900">Realism Masterclass</h4>
                  <div className="flex items-baseline gap-2">
                    <span className="text-base font-bold text-slate-900">₹7,999</span>
                    <span className="text-[10px] text-slate-400 line-through">₹9,999</span>
                    <span className="text-[9px] bg-blue-100 text-blue-700 font-bold px-1 rounded">20% OFF</span>
                  </div>
                  <div className="bg-blue-600 text-white text-[10px] font-semibold text-center py-1 rounded">
                    Enroll Now
                  </div>
                </div>
              </div>
              <div className="text-[10px] text-slate-600 bg-white p-2 rounded border border-slate-200 space-y-1">
                <p className="font-semibold text-slate-800">What You'll Learn: 6 Key Pillars</p>
                <p>✓ Realistic portrait drawing · ✓ Skin texture & wrinkles</p>
              </div>
              <div className="flex justify-between items-center text-[11px] text-slate-500 pt-1">
                <span>Curriculum + Instructor Profile</span>
                <span className="text-blue-600 font-semibold group-hover:underline">Visit Page</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Second Row: Screens 04, 05, 06 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 04 CHECKOUT PAGE */}
          <Link
            to="/enroll"
            className="group block rounded-2xl overflow-hidden border border-white/10 bg-white text-slate-900 hover:border-blue-500/50 transition-all shadow-xl hover:-translate-y-1"
          >
            <div className="bg-blue-600 px-4 py-2 flex items-center justify-between text-white">
              <span className="text-xs font-bold tracking-wider uppercase font-mono">
                04 STUDENT REGISTRATION / CHECKOUT
              </span>
              <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded font-semibold">Open Live →</span>
            </div>
            <div className="p-4 space-y-3 bg-[#f8fafc]">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white p-2.5 rounded-lg border border-slate-200 space-y-1.5 text-[10px]">
                  <p className="font-bold text-slate-900">Complete Your Enrollment</p>
                  <div className="h-5 bg-slate-100 rounded border border-slate-200 flex items-center px-2 text-slate-400">Full Name</div>
                  <div className="h-5 bg-slate-100 rounded border border-slate-200 flex items-center px-2 text-slate-400">Email Address</div>
                  <div className="h-5 bg-slate-100 rounded border border-slate-200 flex items-center px-2 text-slate-400">Phone Number</div>
                </div>
                <div className="bg-white p-2.5 rounded-lg border border-slate-200 space-y-1.5 text-[10px]">
                  <p className="font-bold text-slate-900">Secure Payment</p>
                  <p className="text-[9px] text-emerald-600 font-semibold">Powered by Razorpay</p>
                  <div className="p-1 rounded bg-blue-50 border border-blue-200 text-blue-700 font-medium text-[9px]">
                    🔘 UPI (GPay, PhonePe)
                  </div>
                  <div className="bg-blue-600 text-white text-[10px] font-bold text-center py-1.5 rounded">
                    Pay ₹7,999 with Razorpay →
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center text-[11px] text-slate-500 pt-1">
                <span>SSL Encrypted · 4 Trust Badges</span>
                <span className="text-blue-600 font-semibold group-hover:underline">Visit Page</span>
              </div>
            </div>
          </Link>

          {/* 05 PAYMENT SUCCESS PAGE */}
          <Link
            to="/payment-success"
            className="group block rounded-2xl overflow-hidden border border-white/10 bg-white text-slate-900 hover:border-blue-500/50 transition-all shadow-xl hover:-translate-y-1"
          >
            <div className="bg-blue-600 px-4 py-2 flex items-center justify-between text-white">
              <span className="text-xs font-bold tracking-wider uppercase font-mono">
                05 PAYMENT SUCCESS PAGE
              </span>
              <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded font-semibold">Open Live →</span>
            </div>
            <div className="p-4 space-y-3 bg-[#f8fafc] text-center">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center text-xl font-bold">
                ✓
              </div>
              <div>
                <h4 className="font-serif text-base font-bold text-slate-900">Payment Successful!</h4>
                <p className="text-[10px] text-slate-500">Your enrollment has been confirmed.</p>
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-slate-200 text-left text-[10px] space-y-1 text-slate-600">
                <div className="flex justify-between"><span>Order ID:</span><span className="font-mono font-bold text-slate-900">#PM20261013-7842</span></div>
                <div className="flex justify-between"><span>Razorpay ID:</span><span className="font-mono text-slate-700">pay_29F8k3hj9S</span></div>
                <div className="flex justify-between"><span>Amount:</span><span className="font-bold text-emerald-600">₹7,999</span></div>
              </div>
              <div className="bg-blue-600 text-white text-[10px] font-bold py-1.5 rounded">
                Go to My Dashboard →
              </div>
            </div>
          </Link>

          {/* 06 STUDENT DASHBOARD */}
          <Link
            to="/student/dashboard"
            className="group block rounded-2xl overflow-hidden border border-white/10 bg-white text-slate-900 hover:border-blue-500/50 transition-all shadow-xl hover:-translate-y-1"
          >
            <div className="bg-blue-600 px-4 py-2 flex items-center justify-between text-white">
              <span className="text-xs font-bold tracking-wider uppercase font-mono">
                06 STUDENT DASHBOARD
              </span>
              <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded font-semibold">Open Live →</span>
            </div>
            <div className="p-4 space-y-3 bg-[#f8fafc]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs">
                  AS
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs leading-none">Welcome Back, Arjun</h4>
                  <p className="text-[9px] text-slate-500">Continue your art journey.</p>
                </div>
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-slate-200 space-y-2">
                <div className="flex justify-between items-center text-[10px]">
                  <span className="font-bold text-slate-900">Realism Masterclass</span>
                  <span className="font-bold text-blue-600">65%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-1.5">
                  <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '65%' }} />
                </div>
                <div className="bg-blue-600 text-white text-[10px] font-semibold text-center py-1 rounded">
                  Continue Learning →
                </div>
              </div>
              <div className="flex justify-between items-center text-[11px] text-slate-500 pt-1">
                <span>Recent Lessons + Video Player</span>
                <span className="text-blue-600 font-semibold group-hover:underline">Visit Page</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Third Row: Screens 07, 08, 09, 10 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 07 ADMIN LOGIN */}
          <Link
            to="/admin"
            className="group block rounded-2xl overflow-hidden border border-white/10 bg-white text-slate-900 hover:border-blue-500/50 transition-all shadow-xl hover:-translate-y-1"
          >
            <div className="bg-blue-600 px-4 py-2 flex items-center justify-between text-white">
              <span className="text-xs font-bold tracking-wider uppercase font-mono">
                07 ADMIN LOGIN
              </span>
              <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded font-semibold">Open →</span>
            </div>
            <div className="p-4 space-y-3 bg-[#f8fafc] text-center">
              <img src="/logo.png" alt="Logo" className="w-10 h-10 rounded-full mx-auto shadow" />
              <div>
                <h4 className="font-serif text-sm font-bold text-slate-900">Admin Login</h4>
                <p className="text-[9px] text-slate-500">Access your admin dashboard</p>
              </div>
              <div className="space-y-1.5 text-left text-[10px]">
                <div className="h-6 bg-white rounded border border-slate-200 px-2 flex items-center text-slate-600">
                  admin@pramokart.com
                </div>
                <div className="h-6 bg-white rounded border border-slate-200 px-2 flex items-center text-slate-600">
                  ••••••••••••
                </div>
              </div>
              <div className="bg-blue-600 text-white text-[10px] font-bold py-1.5 rounded">
                Login
              </div>
            </div>
          </Link>

          {/* 08 ADMIN DASHBOARD */}
          <Link
            to="/admin/dashboard"
            className="group block rounded-2xl overflow-hidden border border-white/10 bg-white text-slate-900 hover:border-blue-500/50 transition-all shadow-xl hover:-translate-y-1"
          >
            <div className="bg-blue-600 px-4 py-2 flex items-center justify-between text-white">
              <span className="text-xs font-bold tracking-wider uppercase font-mono">
                08 ADMIN DASHBOARD
              </span>
              <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded font-semibold">Open →</span>
            </div>
            <div className="p-4 space-y-3 bg-[#f8fafc]">
              <div className="grid grid-cols-2 gap-2 text-center">
                <div className="bg-white p-1.5 rounded border border-slate-200">
                  <span className="text-[8px] text-slate-500 uppercase block">Enrollments</span>
                  <span className="text-xs font-bold text-slate-900">248</span>
                </div>
                <div className="bg-white p-1.5 rounded border border-slate-200">
                  <span className="text-[8px] text-slate-500 uppercase block">Revenue</span>
                  <span className="text-xs font-bold text-blue-600">₹12,48,502</span>
                </div>
              </div>
              <div className="bg-white p-2 rounded border border-slate-200 text-[9px] space-y-1">
                <div className="flex justify-between font-bold text-slate-800 border-b pb-1">
                  <span>Name</span>
                  <span>Course</span>
                  <span>Status</span>
                </div>
                <div className="flex justify-between">
                  <span>Arjun S</span>
                  <span>Masterclass</span>
                  <span className="text-emerald-600 font-bold">Paid</span>
                </div>
                <div className="flex justify-between">
                  <span>Divya R</span>
                  <span>Masterclass</span>
                  <span className="text-emerald-600 font-bold">Paid</span>
                </div>
              </div>
              <div className="text-[10px] text-blue-600 font-semibold text-center">
                Full Live Search Table →
              </div>
            </div>
          </Link>

          {/* 09 ENROLLMENT DETAIL */}
          <Link
            to="/admin/enrollment/1"
            className="group block rounded-2xl overflow-hidden border border-white/10 bg-white text-slate-900 hover:border-blue-500/50 transition-all shadow-xl hover:-translate-y-1"
          >
            <div className="bg-blue-600 px-4 py-2 flex items-center justify-between text-white">
              <span className="text-xs font-bold tracking-wider uppercase font-mono">
                09 ENROLLMENT DETAIL
              </span>
              <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded font-semibold">Open →</span>
            </div>
            <div className="p-4 space-y-3 bg-[#f8fafc]">
              <div className="bg-white p-2.5 rounded-lg border border-slate-200 text-[10px] space-y-1">
                <p className="font-bold text-slate-900">Arjun S</p>
                <p className="text-slate-500">arjun@example.com</p>
                <div className="pt-1 flex justify-between">
                  <span className="text-slate-600">Course:</span>
                  <span className="font-semibold text-slate-800">Masterclass</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Fee:</span>
                  <span className="font-bold text-emerald-600">₹7,999</span>
                </div>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 text-[9px] font-semibold p-1.5 rounded flex items-center gap-1">
                <span>✓</span> Verified via Razorpay
              </div>
              <div className="flex gap-1.5">
                <div className="w-1/2 border border-slate-300 text-center text-[9px] py-1 rounded">Re-send Email</div>
                <div className="w-1/2 border border-red-200 text-red-600 text-center text-[9px] py-1 rounded">Refund</div>
              </div>
            </div>
          </Link>

          {/* 10 MOBILE RESPONSIVE PREVIEW */}
          <Link
            to="/mobile-preview"
            className="group block rounded-2xl overflow-hidden border border-white/10 bg-[#0a1628] text-white hover:border-blue-500/50 transition-all shadow-xl hover:-translate-y-1"
          >
            <div className="bg-blue-600 px-4 py-2 flex items-center justify-between text-white">
              <span className="text-xs font-bold tracking-wider uppercase font-mono">
                10 MOBILE PREVIEW
              </span>
              <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded font-semibold">Open →</span>
            </div>
            <div className="p-4 flex flex-col items-center justify-center space-y-2">
              <div className="w-24 h-44 bg-black rounded-2xl border-2 border-slate-600 p-1 flex flex-col justify-between overflow-hidden shadow-md">
                <div className="w-8 h-1 bg-slate-700 rounded-full mx-auto" />
                <img src="/images/hero-portrait.jpg" alt="Mobile Hero" className="w-full h-20 object-cover rounded" />
                <div className="text-[6px] text-center text-blue-400 font-bold">MASTER THE ART OF REALISM</div>
                <div className="w-12 h-2.5 bg-blue-600 rounded-full mx-auto" />
              </div>
              <p className="text-[10px] text-slate-400">Interactive iPhone Shell</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
