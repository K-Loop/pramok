import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  HiLockClosed,
  HiShieldCheck,
  HiLightningBolt,
  HiAcademicCap,
  HiUserGroup,
  HiCreditCard,
  HiDeviceMobile,
  HiLibrary,
  HiCurrencyRupee,
} from 'react-icons/hi';
import { courses, getCourseById } from '../data/courses';
import CustomDropdown from '../components/CustomDropdown';

const courseDropdownOptions = courses.map((c) => ({
  value: c.id,
  label: `${c.title} — ₹${c.price.toLocaleString('en-IN')}`,
}));

export default function Enroll() {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    selectedId: courseId || 'masterclass',
  });
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [loading, setLoading] = useState(false);

  const course = getCourseById(form.selectedId) || courses[2];

  const handlePay = (e) => {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.phone) {
      alert('Please fill in all required fields.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      navigate('/payment-success', {
        state: {
          studentName: form.fullName,
          courseName: course.title,
          amount: course.price,
          orderId: '#PM20261013-7842',
          razorpayId: 'pay_29F8k3hj9S',
          date: '13 Oct 2026, 02:45 PM',
        },
      });
    }, 900);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pt-10 pb-8 text-center max-w-xl mx-auto space-y-2"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Admissions</span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
            Complete Your Enrollment
          </h1>
          <p className="text-sm text-gray-500">
            Fill in your details and proceed to secure payment.
          </p>
        </motion.div>

        {/* ── 2-column layout matching reference Screen 04 ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto"
        >

          {/* ── LEFT: Student Form ── */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8 space-y-5">
            <h2 className="font-serif text-lg font-bold text-gray-900">Student Registration</h2>

            <form onSubmit={handlePay} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Full Name *
                </label>
                <input type="text" required placeholder="Enter your full name"
                  value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  className="form-input" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Email Address *
                </label>
                <input type="email" required placeholder="you@example.com"
                  value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="form-input" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Phone Number *
                </label>
                <input type="tel" required placeholder="+91 98765 43210"
                  value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="form-input" />
              </div>

              {/* Course selector with Custom Dropdown */}
              <CustomDropdown
                label="Select Course *"
                options={courseDropdownOptions}
                value={form.selectedId}
                onChange={(val) => setForm({ ...form, selectedId: val })}
                placeholder="Choose a masterclass course"
              />

              {/* Selected course preview */}
              <div className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 bg-gray-50">
                <img src={course.image} alt={course.title}
                     className="w-12 h-12 rounded-lg object-cover border border-gray-200 shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="font-serif text-sm font-bold text-gray-900 truncate">{course.title}</p>
                  <p className="text-xs text-gray-500">Lifetime Access · 40+ Lessons</p>
                </div>
                <span className="font-serif text-base font-bold text-gray-900 shrink-0">
                  ₹{course.price.toLocaleString('en-IN')}
                </span>
              </div>
            </form>
          </div>

          {/* ── RIGHT: Razorpay Payment box ── */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8 space-y-5">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div className="flex items-center gap-2">
                <HiShieldCheck className="text-emerald-600 text-lg" />
                <h2 className="font-serif text-base font-bold text-gray-900">Secure Payment</h2>
              </div>
              <span className="text-xs text-gray-500">
                Powered by{' '}
                <span className="font-bold text-blue-700">Razorpay</span>
              </span>
            </div>

            {/* Payment methods */}
            <div className="space-y-2.5">
              {[
                {
                  id: 'upi',
                  icon: <HiDeviceMobile className="text-xl text-blue-600" />,
                  label: 'UPI (GPay, PhonePe, Paytm)',
                  desc: 'Instant 0% fee transfer',
                },
                {
                  id: 'cards',
                  icon: <HiCreditCard className="text-xl text-indigo-600" />,
                  label: 'Cards (Credit / Debit)',
                  desc: 'Visa, MasterCard, Rupay',
                },
                {
                  id: 'netbanking',
                  icon: <HiLibrary className="text-xl text-emerald-600" />,
                  label: 'Net Banking',
                  desc: 'All Indian major banks',
                },
                {
                  id: 'wallets',
                  icon: <HiCurrencyRupee className="text-xl text-amber-600" />,
                  label: 'Wallets',
                  desc: 'Paytm, Mobikwik & more',
                },
              ].map((m) => (
                <label key={m.id}
                  onClick={() => setPaymentMethod(m.id)}
                  className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                    paymentMethod === m.id
                      ? 'border-blue-600 bg-blue-50/70 shadow-xs'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}>
                  <input type="radio" name="pm" checked={paymentMethod === m.id}
                    onChange={() => setPaymentMethod(m.id)}
                    className="text-blue-600 shrink-0" />
                  <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
                    {m.icon}
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-gray-800 block">{m.label}</span>
                    <span className="text-xs text-gray-400">{m.desc}</span>
                  </div>
                </label>
              ))}
            </div>

            {/* Pay Button */}
            <button onClick={handlePay} disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm py-4 rounded-xl transition-all shadow-md shadow-blue-600/25 cursor-pointer disabled:opacity-70">
              {loading ? 'Connecting to Razorpay...' : `Pay ₹${course.price.toLocaleString('en-IN')} with Razorpay →`}
            </button>

            <p className="text-[11px] text-gray-400 text-center flex items-center justify-center gap-1">
              <HiLockClosed /> Secure 256-bit SSL encrypted payment
            </p>
          </div>
        </motion.div>

        {/* ── 4 Trust Badges at the bottom with official React Icons ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-5xl mx-auto mt-8">
          {[
            {
              icon: <HiShieldCheck className="w-6 h-6 text-emerald-600" />,
              title: 'SSL Secured',
              sub: '256-Bit Encrypted',
            },
            {
              icon: <HiLightningBolt className="w-6 h-6 text-amber-500" />,
              title: 'Instant',
              sub: 'Confirmation',
            },
            {
              icon: <HiAcademicCap className="w-6 h-6 text-blue-600" />,
              title: 'Access',
              sub: 'After Payment',
            },
            {
              icon: <HiUserGroup className="w-6 h-6 text-indigo-600" />,
              title: 'Trusted by',
              sub: '4200+ Students',
            },
          ].map((b) => (
            <div
              key={b.title}
              className="bg-white rounded-xl border border-gray-200 p-4 text-center shadow-xs hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 rounded-full bg-blue-50/70 border border-blue-100 flex items-center justify-center mx-auto mb-2.5 group-hover:scale-110 transition-transform">
                {b.icon}
              </div>
              <p className="text-xs font-bold text-gray-800">{b.title}</p>
              <p className="text-[10px] text-gray-400 mt-0.5">{b.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
